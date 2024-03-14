import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import {rateLimit} from 'express-rate-limit';

@Injectable()
export class RateLimiterMiddleware implements NestMiddleware {
  private limiter;

  constructor() {
    this.limiter = rateLimit({
      windowMs: 15 * 60 * 1000,
      limit: 10, 
      message: 'Trop de demandes. Veuillez réessayer plus tard.',
      statusCode: HttpStatus.TOO_MANY_REQUESTS,
    });
  }

  use(req: Request, res: Response, next: NextFunction) {
    this.limiter(req, res, next);
  }
}
