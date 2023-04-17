-- DropIndex
DROP INDEX "Department_schoolId_id_idx";

-- CreateIndex
CREATE INDEX "Department_schoolId_idx" ON "Department"("schoolId");
