/*
  Warnings:

  - Made the column `is_recommended` on table `comments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `workload` on table `comments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `department` on table `comments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gpa_booster` on table `comments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `grade_recieved` on table `comments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `primary_text` on table `comments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `delivery` on table `comments` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "comments" ALTER COLUMN "is_recommended" SET NOT NULL,
ALTER COLUMN "workload" SET NOT NULL,
ALTER COLUMN "department" SET NOT NULL,
ALTER COLUMN "gpa_booster" SET NOT NULL,
ALTER COLUMN "grade_recieved" SET NOT NULL,
ALTER COLUMN "primary_text" SET NOT NULL,
ALTER COLUMN "delivery" SET NOT NULL;
