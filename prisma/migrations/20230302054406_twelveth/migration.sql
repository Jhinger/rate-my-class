-- DropIndex
DROP INDEX "comments_department_classId_idx";

-- DropIndex
DROP INDEX "comments_department_classId_key";

-- CreateIndex
CREATE INDEX "comments_classId_idx" ON "comments"("classId");
