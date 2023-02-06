import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliveriesService {
  async run(client_id: string) {
    const clientWithDeliveries = await prisma.client.findMany({
      where: {
        id: client_id,
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
