-- DropIndex
DROP INDEX "comments_classId_idx";

-- CreateIndex
CREATE INDEX "comments_department_classId_idx" ON "comments"("department", "classId");
