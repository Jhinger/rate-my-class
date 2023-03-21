-- AlterTable
ALTER TABLE "classes" ALTER COLUMN "avg_difficulty" SET DEFAULT 0,
ALTER COLUMN "avg_grade" SET DEFAULT 0;

-- DropEnum
DROP TYPE "GRADE";
