import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../database/prismaClient";

interface IAuthentivateDeliverymanDTO {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanService {
  async run({ username, password }: IAuthentivateDeliverymanDTO) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username,
      },
    });

    if (!deliveryman) {
      throw new Error("Username or password is incorrect.");
    }

    const passwordMatch = await compare(password, deliveryman.password);
    if (!passwordMatch) {
      throw new Error("Username or password is incorrect.");
    }

    const token = sign({ username }, "0104e9a155944d27f108f4c5882475c6", {
      subject: deliveryman.id,
      expiresIn: "1d",
    });

    return { token };
  }
}
