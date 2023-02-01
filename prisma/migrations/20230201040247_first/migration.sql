-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "GRADE" AS ENUM ('APLUS', 'A', 'AMINUS', 'BPLUS', 'B', 'BMINUS', 'CPLUS', 'C', 'CMINUS', 'D', 'F', 'UNKNOWN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "ROLE" NOT NULL DEFAULT 'USER';

-- CreateTable
CREATE TABLE "schools" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "short" TEXT NOT NULL,

    CONSTRAINT "schools_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "classes" (
    "id" SERIAL NOT NULL,
    "schoolId" INTEGER,
    "name" TEXT NOT NULL,

    CONSTRAINT "classes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "classId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "overview" TEXT NOT NULL,
    "tips" TEXT NOT NULL,
    "difficulty" INTEGER NOT NULL,
    "upvoteCount" INTEGER NOT NULL DEFAULT 0,
    "gradeRecieved" "GRADE" NOT NULL DEFAULT 'UNKNOWN',
    "workloadHours" INTEGER,
    "gpa_booster" BOOLEAN,
    "is_recommended" BOOLEAN,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "schools_name_short_idx" ON "schools"("name", "short");

-- CreateIndex
CREATE INDEX "classes_name_idx" ON "classes"("name");

-- AddForeignKey
ALTER TABLE "classes" ADD CONSTRAINT "classes_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "schools"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_classId_fkey" FOREIGN KEY ("classId") REFERENCES "classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
