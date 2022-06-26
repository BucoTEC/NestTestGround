import { HttpException, HttpStatus } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export interface ReqWithUser extends Request {
  currentUser: string;
}

export const isLogedIn = (
  req: ReqWithUser,
  res: Response,
  next: NextFunction,
) => {
  const { user } = req.query;

  if (!user) throw new HttpException('Not authorized', HttpStatus.FORBIDDEN);

  if (user !== 'adnan')
    throw new HttpException('Not authorized', HttpStatus.FORBIDDEN);

  req.currentUser = 'adnan';
  next();
};
