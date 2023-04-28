-- DropIndex
DROP INDEX "Department_schoolId_avgGrade_idx";

-- CreateIndex
CREATE INDEX "Department_schoolId_numComments_idx" ON "Department"("schoolId", "numComments" DESC);
