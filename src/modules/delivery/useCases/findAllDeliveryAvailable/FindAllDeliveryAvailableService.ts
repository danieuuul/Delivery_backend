import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliveryAvailableService {
  async run() {
    const deliveries = await prisma.delivery.findMany({
      where: {
        end_at: null,
        deliveryman_id: null,
      },
    });

    return deliveries;
  }
}
