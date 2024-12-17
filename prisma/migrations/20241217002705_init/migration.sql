-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "state" SMALLINT NOT NULL,
    "name" VARCHAR NOT NULL,
    "thumbnail_url" VARCHAR NOT NULL,
    "content" VARCHAR NOT NULL,
    "main_price" DECIMAL(12,0) NOT NULL,
    "discount_price" DECIMAL(12,0) NOT NULL,
    "is_discount" BOOLEAN NOT NULL,
    "quantity" INTEGER NOT NULL,
    "is_quantity" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3),

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);
