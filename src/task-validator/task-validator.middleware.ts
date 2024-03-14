import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { validate } from 'class-validator';
import { CreateTaskDto } from '../tasks/dto/create-task.dto';

@Injectable()
export class TaskValidationMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const createTaskDto: CreateTaskDto = req.body;
    const errors = await validate(createTaskDto);

    if (errors.length > 0) {
      return res.status(400).json({ message: 'Les données de la tâche sont invalides.', errors });
    }

    next();
  }
}
