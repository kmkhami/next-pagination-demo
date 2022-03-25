-- CreateTable
CREATE TABLE "ar_internal_metadata" (
    "key" VARCHAR NOT NULL,
    "value" VARCHAR,
    "created_at" TIMESTAMP(6) NOT NULL,
    "updated_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "ar_internal_metadata_pkey" PRIMARY KEY ("key")
);

-- CreateTable
CREATE TABLE "plans" (
    "id" BIGSERIAL NOT NULL,
    "merchant_id" VARCHAR NOT NULL,
    "name" VARCHAR,
    "frequency" VARCHAR,
    "day" VARCHAR,
    "amount" INTEGER,
    "callback_url" VARCHAR,
    "email_reports" BOOLEAN,
    "rule_uuid" VARCHAR,
    "strategy_uuid" VARCHAR,
    "receipt_template_id" VARCHAR,
    "metadata" JSONB NOT NULL DEFAULT '{}',
    "created_at" TIMESTAMP(6) NOT NULL,
    "updated_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "plans_pkey" PRIMARY KEY ("id")
);
