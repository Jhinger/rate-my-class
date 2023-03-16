/*
  Warnings:

  - You are about to drop the column `commentInteraction` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `gradeRecieved` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `overview` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `tips` on the `comments` table. All the data in the column will be lost.
  - Added the required column `primary_text` to the `comments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "comments" DROP COLUMN "commentInteraction",
DROP COLUMN "gradeRecieved",
DROP COLUMN "overview",
DROP COLUMN "tips",
ADD COLUMN     "comment_interaction" "COMMENT_INTERACTION" NOT NULL DEFAULT 'NONE',
ADD COLUMN     "grade_recieved" INTEGER,
ADD COLUMN     "primary_text" VARCHAR(350) NOT NULL DEFAULT '',
ADD COLUMN     "secondary_text" VARCHAR(350);
