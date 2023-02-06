import { Request, Response } from "express";
import { AuthenticateDeliverymanService } from "./AuthenticateDeliverymanService";

export class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticateDeliverymanService = new AuthenticateDeliverymanService();
    const result = await authenticateDeliverymanService.run({
      username,
      password,
    });

    return response.json(result);
  }
}
