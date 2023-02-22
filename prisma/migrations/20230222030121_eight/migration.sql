-- CreateIndex
CREATE INDEX "comments_classId_idx" ON "comments" USING HASH ("classId");
