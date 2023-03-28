-- DropIndex
DROP INDEX "classes_schoolId_idx";

-- CreateIndex
CREATE INDEX "classes_schoolId_department_idx" ON "classes"("schoolId", "department");
