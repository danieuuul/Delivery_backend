import { Request, Response } from "express";
import { FindAllDeliveriesService } from "./FindAllDeliveriesService";

export class FindAllDeliveriesController {
  async handle(request: Request, response: Response) {
    const { client_id } = request;
    const findAllDeliveriesService = new FindAllDeliveriesService();
    const result = await findAllDeliveriesService.run(client_id);

    return response.json(result);
  }
}
