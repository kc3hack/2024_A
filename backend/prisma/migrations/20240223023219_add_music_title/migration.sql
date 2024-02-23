/*
  Warnings:

  - Added the required column `musicTitle` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Location` ADD COLUMN `musicTitle` VARCHAR(191) NOT NULL;
