import { Response, Request } from "express";
import { FindAllDeliveryAvailableService } from "./FindAllDeliveryAvailableService";

export class FindAllDeliveryAvailableController {
  async handle(request: Request, response: Response) {
    const findAllDeliveryNotFinishedService =
      new FindAllDeliveryAvailableService();

    const result = await findAllDeliveryNotFinishedService.run();

    return response.json(result);
  }
}
