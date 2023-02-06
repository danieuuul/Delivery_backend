import { Request, Response } from "express";
import { FinishDeliveryService } from "./FinishDeliveryService";

export class FinishDeliveryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { deliveryman_id } = request;

    const finishDeliveryService = new FinishDeliveryService();
    const result = await finishDeliveryService.run({
      delivery_id: id,
      deliveryman_id,
    });

    return response.json(result);
  }
}
