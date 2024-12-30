/*
  Warnings:

  - Added the required column `item_id` to the `order_item_option` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "order_item_option" ADD COLUMN     "item_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "order_item_option" ADD CONSTRAINT "order_item_option_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "order_item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
