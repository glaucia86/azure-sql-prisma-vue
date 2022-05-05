/*
  Warnings:

  - A unique constraint covering the columns `[employee_registration]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- CreateIndex
CREATE UNIQUE INDEX [Employee_employee_registration_key] ON [dbo].[Employee]([employee_registration]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
