/*
  Warnings:

  - Made the column `department` on table `classes` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "classes" ALTER COLUMN "department" SET NOT NULL;
