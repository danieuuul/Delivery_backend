import { prisma } from "../../../../database/prismaClient";

interface ICreateDelivertDTO {
  item_name: string;
  client_id: string;
}

export class CreateDeliveryService {
  async run({ item_name, client_id }: ICreateDelivertDTO) {
    const delivery = await prisma.delivery.create({
      data: {
        item_name,
        client_id,
      },
    });

    return delivery;
  }
}
