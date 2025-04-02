import { Request, Response, NextFunction } from 'express';

type ControllerType = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void>;

export const ctrlWrapper = (controller: ControllerType) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};
