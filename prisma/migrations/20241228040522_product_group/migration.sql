-- CreateTable
CREATE TABLE "product_option_group" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "type" SMALLINT NOT NULL,
    "title" VARCHAR NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3),

    CONSTRAINT "product_option_group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_option" (
    "id" SERIAL NOT NULL,
    "group_id" INTEGER NOT NULL,
    "value" VARCHAR NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3),

    CONSTRAINT "product_option_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "product_option_group" ADD CONSTRAINT "product_option_group_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_option" ADD CONSTRAINT "product_option_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "product_option_group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
