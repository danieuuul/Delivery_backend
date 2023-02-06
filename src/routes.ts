import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { AuthenticateClientController } from "./modules/accounts/useCases/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/accounts/useCases/autheticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { FindAllDeliveriesController as FindAllClientDeliveriesController } from "./modules/clients/useCases/findAllDeliveries/FindAllDeliveriesController";
import { FindAllDeliveriesController as FindAllDeliverymanDeliveriesController } from "./modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesController";
import { AssignDeliveryController } from "./modules/delivery/useCases/assignDelivery/AssignDeliveryController";
import { CreateDeliveryController } from "./modules/delivery/useCases/createDelivery/CreateDeliveryController";
import { FindAllDeliveryAvailableController } from "./modules/delivery/useCases/findAllDeliveryAvailable/FindAllDeliveryAvailableController";

import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { FinishDeliveryController } from "./modules/delivery/useCases/finishDelivery/FinishDeliveryController";

const routes = Router();

const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const findAllDeliveryAvailableController =
  new FindAllDeliveryAvailableController();
const assignDeliveryController = new AssignDeliveryController();
const findAllClientDeliveriesController =
  new FindAllClientDeliveriesController();
const findAllDeliverymanDeliveriesController =
  new FindAllDeliverymanDeliveriesController();
const finishDeliveryController = new FinishDeliveryController();

routes.post(
  "/deliveryman/authenticate",
  authenticateDeliverymanController.handle
);
routes.post("/client/authenticate", authenticateClientController.handle);

routes.post("/client", createClientController.handle);
routes.get(
  "/client/deliveries",
  ensureAuthenticateClient,
  findAllClientDeliveriesController.handle
);

routes.post("/deliveryman", createDeliverymanController.handle);
routes.get(
  "/deliveryman/deliveries",
  ensureAuthenticateDeliveryman,
  findAllDeliverymanDeliveriesController.handle
);

routes.post(
  "/delivery",
  ensureAuthenticateClient,
  createDeliveryController.handle
);

routes.get(
  "/delivery/not-finished",
  ensureAuthenticateDeliveryman,
  findAllDeliveryAvailableController.handle
);

routes.put(
  "/delivery/assignDelivery/:id",
  ensureAuthenticateDeliveryman,
  assignDeliveryController.handle
);

routes.put(
  "/delivery/finishDelivery/:id",
  ensureAuthenticateDeliveryman,
  finishDeliveryController.handle
);

export { routes };
