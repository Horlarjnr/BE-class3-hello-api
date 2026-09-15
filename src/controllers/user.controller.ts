import type { Request, Response } from 'express';
import { addUser, getUsers, greetings } from '../services/user.service';

export const getGreetings = (_req: Request, res: Response) => {
  const message = greetings();
  res.json({ message });
};

export const createUser = (req: Request, res: Response) => {
  const { name, email } = req.body;
  const user = addUser(name, email);
  res.status(201).json(user);
};

export const getUser = (_req: Request, res: Response) => {
  res.json({ users: getUsers() });
};
