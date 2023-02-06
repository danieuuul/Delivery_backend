import { Request, Response } from "express";
import { prisma } from "../../../../database/prismaClient";

interface IFinishDeliveryDTO {
  delivery_id: string;
  deliveryman_id: string;
}

export class FinishDeliveryService {
  async run({ delivery_id, deliveryman_id }: IFinishDeliveryDTO) {
    const delivery = await prisma.delivery.update({
      where: {
        delivery_deliveryman: {
          id: delivery_id,
          deliveryman_id,
        },
      },
      data: {
        end_at: new Date(),
      },
    });
    return delivery;
  }
}
