import { prisma } from "../../../../database/prismaClient";

interface IUpdateDeliveryWithDeliverymanDTO {
  delivery_id: string;
  deliveryman_id: string;
}

export class AssignDeliveryService {
  async run({
    delivery_id,
    deliveryman_id,
  }: IUpdateDeliveryWithDeliverymanDTO) {
    const delivery = await prisma.delivery.update({
      where: {
        id: delivery_id,
      },
      data: {
        deliveryman_id,
      },
    });

    return delivery;
  }
}
