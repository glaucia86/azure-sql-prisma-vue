BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Employee] (
    [employee_id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(100) NOT NULL,
    [job_role] NVARCHAR(100) NOT NULL,
    [salary] DECIMAL(12,2) NOT NULL,
    [birth] DATE NOT NULL,
    [employee_registration] INT NOT NULL,
    CONSTRAINT [Employee_pkey] PRIMARY KEY ([employee_id])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
