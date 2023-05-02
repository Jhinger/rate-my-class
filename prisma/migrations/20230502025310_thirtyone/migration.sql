-- CreateIndex
CREATE INDEX "comments_classId_grade_recieved_idx" ON "comments"("classId", "grade_recieved");

-- CreateIndex
CREATE INDEX "comments_classId_deleted_idx" ON "comments"("classId", "deleted");
