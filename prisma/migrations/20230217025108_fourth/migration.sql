/*
  Warnings:

  - You are about to alter the column `overview` on the `comments` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(350)`.
  - You are about to alter the column `tips` on the `comments` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(350)`.

*/
-- AlterTable
ALTER TABLE "comments" ADD COLUMN     "teacher" TEXT,
ALTER COLUMN "overview" SET DATA TYPE VARCHAR(350),
ALTER COLUMN "tips" SET DATA TYPE VARCHAR(350);
