/*
  Warnings:

  - Made the column `departmentId` on table `classes` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "classes" DROP CONSTRAINT "classes_departmentId_fkey";

-- DropIndex
DROP INDEX "Department_schoolId_idx";

-- AlterTable
ALTER TABLE "classes" ALTER COLUMN "departmentId" SET NOT NULL;

-- CreateIndex
CREATE INDEX "Department_schoolId_avgGrade_idx" ON "Department"("schoolId", "avgGrade");

-- AddForeignKey
ALTER TABLE "classes" ADD CONSTRAINT "classes_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
