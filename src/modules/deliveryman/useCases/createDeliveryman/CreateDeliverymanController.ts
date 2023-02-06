import { Request, Response } from "express";
import { CreateDeliverymanService } from "./CreateDeliverymanService";

export class CreateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const createDeliverymanService = new CreateDeliverymanService();
    const result = await createDeliverymanService.run({
      username,
      password,
    });

    return response.json(result);
  }
}
