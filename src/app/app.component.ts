import { Component } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Ng7InfiniteVirtualScroll';
  dummydata;
  constructor() {
    this.dummydata = Array(10000)
      .fill(1)
      .map((_) => {
        return {
          name: faker.name.findName(),
          company: faker.company.companyName(),
          avatar: faker.image.avatar(),
        };
      });
  }
}

/* export class AppComponent {
  listArray: string[] = [];
  sum = 40;
  direction = '';

  constructor() {
    this.appendItems();
  }

  onScrollDown(ev: any) {
    console.log('scrolled down!!', ev);

    this.sum += 40;
    this.appendItems();

    this.direction = 'scroll down';
  }

  onScrollUp(ev: any) {
    console.log('scrolled up!', ev);
    this.sum += 20;
    this.prependItems();

    this.direction = 'scroll up';
  }

  appendItems() {
    this.addItems('push');
  }

  prependItems() {
    this.addItems('unshift');
  }

  addItems(_method: string) {
    for (let i = 0; i < this.sum; ++i) {
      if (_method === 'push') {
        this.listArray.push([i].join(''));
      } else if (_method === 'unshift') {
        this.listArray.unshift([i].join(''));
      }
    }
  }
} */
