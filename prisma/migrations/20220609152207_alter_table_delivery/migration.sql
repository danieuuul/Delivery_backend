-- DropForeignKey
ALTER TABLE "delivery" DROP CONSTRAINT "delivery_deliveryman_id_fkey";

-- AlterTable
ALTER TABLE "delivery" ALTER COLUMN "deliveryman_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "delivery" ADD CONSTRAINT "delivery_deliveryman_id_fkey" FOREIGN KEY ("deliveryman_id") REFERENCES "deliveryman"("id") ON DELETE SET NULL ON UPDATE CASCADE;
