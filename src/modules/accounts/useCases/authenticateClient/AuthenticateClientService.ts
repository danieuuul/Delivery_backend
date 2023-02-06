import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../database/prismaClient";

interface IAuthentivateClientDTO {
  username: string;
  password: string;
}

export class AuthenticateClientService {
  async run({ username, password }: IAuthentivateClientDTO) {
    const client = await prisma.client.findFirst({
      where: {
        username,
      },
    });

    if (!client) {
      throw new Error("Username or password is incorrect.");
    }

    const passwordMatch = await compare(password, client.password);
    if (!passwordMatch) {
      throw new Error("Username or password is incorrect.");
    }

    const token = sign({ username }, "0104e9a155944d27f108f4c5882475c6", {
      subject: client.id,
      expiresIn: "1d",
    });

    return { token };
  }
}
