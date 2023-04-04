/*
  Warnings:

  - You are about to drop the column `numRatings` on the `Department` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Department" DROP COLUMN "numRatings",
ADD COLUMN     "numComments" INTEGER NOT NULL DEFAULT 0;
