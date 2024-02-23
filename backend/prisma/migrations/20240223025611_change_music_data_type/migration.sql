/*
  Warnings:

  - You are about to drop the column `musicTitle` on the `Location` table. All the data in the column will be lost.
  - Added the required column `musicID` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Location` DROP COLUMN `musicTitle`,
    ADD COLUMN `musicID` INTEGER NOT NULL;
