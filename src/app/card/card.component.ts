import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'Card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
  constructor() {
    this.getImage();
  }
  @Input() photo: string = '';
  @Input() name: string = '';
  @Input() local: string = '';
  @Input() tel: string = '';
  @Input() email: string = '';
  thumb: string = './assets/default-banner.jpg';

  async getImage() {
    const imgUrl =
      'https://picsum.photos/1080?random&t=' + new Date().getTime();

    const img = new Image();
    img.src = imgUrl;

    img.onload = () => {
      this.thumb = imgUrl;
    };
  }
  ngOnInit(): void {}
}
