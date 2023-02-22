-- DropIndex
DROP INDEX "comments_classId_idx";

-- CreateIndex
CREATE INDEX "comments_classId_idx" ON "comments"("classId");
