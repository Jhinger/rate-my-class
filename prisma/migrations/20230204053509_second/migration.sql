/*
  Warnings:

  - You are about to drop the column `gradeRecieved` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `upvoteCount` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `workloadHours` on the `comments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "comments" DROP COLUMN "gradeRecieved",
DROP COLUMN "upvoteCount",
DROP COLUMN "workloadHours",
ADD COLUMN     "grade_recieved" "GRADE" NOT NULL DEFAULT 'UNKNOWN',
ADD COLUMN     "upvote_count" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "workload_hours" INTEGER;
