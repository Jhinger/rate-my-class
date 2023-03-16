-- DropIndex
DROP INDEX "classes_name_idx";

-- AlterTable
ALTER TABLE "classes" ADD COLUMN     "avg_difficulty" INTEGER,
ADD COLUMN     "avg_grade" INTEGER,
ADD COLUMN     "num_comments" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "comments" ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE INDEX "classes_schoolId_idx" ON "classes"("schoolId");
