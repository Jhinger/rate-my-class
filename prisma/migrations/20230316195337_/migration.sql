-- AlterTable
ALTER TABLE "comments" ALTER COLUMN "primary_text" DROP NOT NULL,
ALTER COLUMN "secondary_text" SET DEFAULT '';
