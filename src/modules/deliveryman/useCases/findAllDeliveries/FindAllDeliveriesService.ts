import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliveriesService {
  async run(delivery_id: string) {
    const clientWithDeliveries = await prisma.deliveryman.findMany({
      where: {
        id: delivery_id,
      },
      select: {
        deliveries: true,
        id: true,
        username: true,
      },
    });

    return clientWithDeliveries;
  }
}
