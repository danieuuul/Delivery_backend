import { NextFunction, Response, Request } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateDeliveryman(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: "Token is missing",
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(
      token,
      "0104e9a155944d27f108f4c5882475c6"
    ) as IPayload;

    request.deliveryman_id = sub;

    return next();
  } catch (err) {
    return response.status(401).json({
      message: "Token is invalid",
    });
  }
}
