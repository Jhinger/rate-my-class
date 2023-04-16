-- DropIndex
DROP INDEX "classes_schoolId_departmentId_idx";

-- CreateIndex
CREATE INDEX "Department_schoolId_id_idx" ON "Department"("schoolId", "id");

-- CreateIndex
CREATE INDEX "classes_schoolId_id_idx" ON "classes"("schoolId", "id");
