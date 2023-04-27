/*
  Warnings:

  - You are about to drop the column `comment_interaction` on the `comments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "classes" ADD COLUMN     "avg_workload" DOUBLE PRECISION DEFAULT 0;

-- AlterTable
ALTER TABLE "comments" DROP COLUMN "comment_interaction";
