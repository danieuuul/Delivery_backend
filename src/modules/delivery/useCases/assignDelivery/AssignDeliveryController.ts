import { Request, Response } from "express";
import { AssignDeliveryService } from "./AssignDeliveryService";

export class AssignDeliveryController {
  async handle(request: Request, response: Response) {
    const { deliveryman_id } = request;
    const { id } = request.params;

    const assignDeliveryService = new AssignDeliveryService();
    const result = await assignDeliveryService.run({
      delivery_id: id,
      deliveryman_id,
    });

    return response.json(result);
  }
}
