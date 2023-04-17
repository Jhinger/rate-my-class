-- DropIndex
DROP INDEX "classes_schoolId_id_idx";

-- DropIndex
DROP INDEX "schools_name_short_idx";

-- CreateIndex
CREATE INDEX "classes_schoolId_idx" ON "classes"("schoolId");

-- CreateIndex
CREATE INDEX "schools_short_idx" ON "schools"("short");
