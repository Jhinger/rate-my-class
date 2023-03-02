/*
  Warnings:

  - The `gpa_booster` column on the `comments` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[department,classId]` on the table `comments` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "comments" DROP COLUMN "gpa_booster",
ADD COLUMN     "gpa_booster" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "comments_department_classId_key" ON "comments"("department", "classId");
