/*
  Warnings:

  - You are about to drop the column `department` on the `classes` table. All the data in the column will be lost.
  - Made the column `schoolId` on table `classes` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "classes" DROP CONSTRAINT "classes_schoolId_fkey";

-- DropIndex
DROP INDEX "classes_schoolId_department_idx";

-- AlterTable
ALTER TABLE "classes" DROP COLUMN "department",
ADD COLUMN     "departmentId" INTEGER,
ALTER COLUMN "schoolId" SET NOT NULL;

-- CreateTable
CREATE TABLE "Department" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "numRatings" INTEGER NOT NULL DEFAULT 0,
    "avgGrade" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "classes_schoolId_departmentId_idx" ON "classes"("schoolId", "departmentId");

-- AddForeignKey
ALTER TABLE "classes" ADD CONSTRAINT "classes_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "schools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "classes" ADD CONSTRAINT "classes_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;
