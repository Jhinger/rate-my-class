/*
  Warnings:

  - You are about to alter the column `teacher` on the `comments` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.

*/
-- CreateEnum
CREATE TYPE "DELIVERY" AS ENUM ('INPERSON', 'ONLINE');

-- AlterTable
ALTER TABLE "comments" ADD COLUMN     "delivery" "DELIVERY",
ALTER COLUMN "teacher" SET DATA TYPE VARCHAR(50);

-- CreateIndex
CREATE INDEX "comments_userId_idx" ON "comments"("userId");
