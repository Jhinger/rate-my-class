/*
  Warnings:

  - You are about to drop the column `workload_hours` on the `comments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "classes" ADD COLUMN     "department" TEXT;

-- AlterTable
ALTER TABLE "comments" DROP COLUMN "workload_hours",
ADD COLUMN     "workload" INTEGER;
