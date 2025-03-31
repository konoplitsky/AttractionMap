-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PLANNED', 'VISITED');

-- CreateTable
CREATE TABLE "Attraction" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rating" INTEGER NOT NULL DEFAULT 1,
    "photo" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "mapLink" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PLANNED',

    CONSTRAINT "Attraction_pkey" PRIMARY KEY ("id")
);
