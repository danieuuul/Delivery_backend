import { Request, Response } from "express";
import { CreateDeliveryService } from "./CreateDeliveryService";

export class CreateDeliveryController {
  async handle(request: Request, response: Response) {
    const { item_name } = request.body;
    const { client_id } = request;

    const createDeliveryService = new CreateDeliveryService();

    const result = await createDeliveryService.run({
      item_name,
      client_id,
    });

    return response.json(result);
  }
}
