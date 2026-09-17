import { NextFunction, Request, Response } from 'express';
import { logger } from '../utils/logger';

//middeware to check if user is authenticated or not
// request carries auth info in its req headers, so we can check if the user is authenticated or not
// its gotten like this req.headers.authorization

// const StudentInfo = {
//   department: 'Computer Science',
//   profile: {
//     biodata: {
//       name: 'Sofiyat Okoyivo',
//       age: 20,
//     },
//     state: 'Lagos',
//   },
//   studentId: '1234567890',
// };

// const name = StudentInfo.profile.biodata.name;

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  console.log('authHeader:', authHeader);
  if (authHeader && authHeader === 'Bearer mysecrettoken') {
    logger.info('User is authenticated');
    next();
  } else {
    logger.warn('Unauthorized access attempt');
    res.status(401).json({ message: 'Unauthorized' });
  }
}
