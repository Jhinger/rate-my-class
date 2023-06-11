/*
  Warnings:

  - You are about to alter the column `teacher` on the `comments` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `VarChar(35)`.
  - Made the column `overall_rating` on table `comments` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "comments" ALTER COLUMN "teacher" SET DATA TYPE VARCHAR(35),
ALTER COLUMN "overall_rating" SET NOT NULL;
