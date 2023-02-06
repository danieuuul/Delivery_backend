import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateClientDTO {
  username: string;
  password: string;
}

export class CreateClientService {
  async run({ username, password }: ICreateClientDTO) {
    const clientExist = await prisma.client.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    if (clientExist) {
      throw new Error("Client already exists");
    }

    const hashPassword = await hash(password, 10);

    const client = await prisma.client.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return client;
  }
}
