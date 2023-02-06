import { Request, Response } from "express";
import { CreateClientService } from "./CreateClientService";

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const createClientService = new CreateClientService();
    const result = await createClientService.run({
      username,
      password,
    });

    return response.json(result);
  }
}
