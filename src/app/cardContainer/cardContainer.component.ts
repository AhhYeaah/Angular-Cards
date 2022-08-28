import { cardContainerService } from './cardContainer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'CardContainer',
  templateUrl: './cardContainer.component.html',
  styleUrls: ['./cardContainer.component.sass'],
})
export class cardContainerComponent implements OnInit {
  pessoas: any[] | undefined = undefined;

  constructor() {
    let { randomNum, peoplePromise } = cardContainerService.getPeople();

    if (randomNum > 0) {
      this.assignPeople(peoplePromise);
    } else {
      this.pessoas = [];
    }
  }

  async assignPeople(peoplePromise: Promise<any>) {
    const {
      data: { results },
    } = await peoplePromise;

    this.pessoas = results;
  }
  ngOnInit(): void {}
}
