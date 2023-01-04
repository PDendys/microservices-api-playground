import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class LoggerService {
  log(msg: string) {
    fs.writeFile('log.txt', msg, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
}
