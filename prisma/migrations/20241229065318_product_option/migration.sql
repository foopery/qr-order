/*
  Warnings:

  - Added the required column `price` to the `product_option` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "product_option" ADD COLUMN     "price" DECIMAL(12,0) NOT NULL;
