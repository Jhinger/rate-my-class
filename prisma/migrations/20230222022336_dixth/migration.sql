/*
  Warnings:

  - You are about to drop the column `grade_recieved` on the `comments` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "COMMENT_INTERACTION" AS ENUM ('LIKED', 'DISLIKED', 'NONE');

-- AlterTable
ALTER TABLE "comments" DROP COLUMN "grade_recieved",
ADD COLUMN     "commentInteraction" "COMMENT_INTERACTION" NOT NULL DEFAULT 'NONE',
ADD COLUMN     "gradeRecieved" INTEGER;
