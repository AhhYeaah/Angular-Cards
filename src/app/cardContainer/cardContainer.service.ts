import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class cardContainerService {
  constructor() {}

  static getPeople(): {
    peoplePromise: Promise<AxiosResponse<any>>;
    randomNum: number;
  } {
    const randomNum = Math.trunc(Math.random() * (9.9 - 0) + 0);

    const peoplePromise = axios.get(
      'https://randomuser.me/api/?results=' + randomNum
    );

    return {
      peoplePromise,
      randomNum,
    };
  }
}
