/*
  Warnings:

  - The primary key for the `Employee` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
BEGIN TRY

BEGIN TRAN;

-- RedefineTables
BEGIN TRANSACTION;
DECLARE @SQL NVARCHAR(MAX) = N''
SELECT @SQL += N'ALTER TABLE '
    + QUOTENAME(OBJECT_SCHEMA_NAME(PARENT_OBJECT_ID))
    + '.'
    + QUOTENAME(OBJECT_NAME(PARENT_OBJECT_ID))
    + ' DROP CONSTRAINT '
    + OBJECT_NAME(OBJECT_ID) + ';'
FROM SYS.OBJECTS
WHERE TYPE_DESC LIKE '%CONSTRAINT'
    AND OBJECT_NAME(PARENT_OBJECT_ID) = 'Employee'
    AND SCHEMA_NAME(SCHEMA_ID) = 'dbo'
EXEC sp_executesql @SQL
;
CREATE TABLE [dbo].[_prisma_new_Employee] (
    [employee_id] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(100) NOT NULL,
    [job_role] NVARCHAR(100) NOT NULL,
    [salary] DECIMAL(12,2) NOT NULL,
    [birth] DATE NOT NULL,
    [employee_registration] INT NOT NULL,
    CONSTRAINT [Employee_pkey] PRIMARY KEY ([employee_id])
);
IF EXISTS(SELECT * FROM [dbo].[Employee])
    EXEC('INSERT INTO [dbo].[_prisma_new_Employee] ([birth],[employee_id],[employee_registration],[job_role],[name],[salary]) SELECT [birth],[employee_id],[employee_registration],[job_role],[name],[salary] FROM [dbo].[Employee] WITH (holdlock tablockx)');
DROP TABLE [dbo].[Employee];
EXEC SP_RENAME N'dbo._prisma_new_Employee', N'Employee';
COMMIT;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
