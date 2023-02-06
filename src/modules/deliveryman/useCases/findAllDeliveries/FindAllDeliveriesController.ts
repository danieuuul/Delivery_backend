import { Request, Response } from "express";
import { FindAllDeliveriesService } from "./FindAllDeliveriesService";

export class FindAllDeliveriesController {
  async handle(request: Request, response: Response) {
    const { deliveryman_id } = request;
    const findAllDeliveriesService = new FindAllDeliveriesService();
    const result = await findAllDeliveriesService.run(deliveryman_id);

    return response.json(result);
  }
}
