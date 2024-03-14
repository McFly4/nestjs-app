import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World<br> <br>Bienvenu: http://localhost:3000/bienvenu/{insérer un nom !}`;
  }

  getMsg(param: string): string {
    return `Bienvenu ${param} !`;
  }
}
