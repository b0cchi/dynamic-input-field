import {Component} from '@angular/core';

interface item {
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-input-field';

  items: item[] = [{value: '' }];

  add(): void {
    this.items.push({value: '' });
  }

  remove(itemIndex: number): void {
    if (this.items.length > 1) {
      this.items.splice(itemIndex, 1);
    } else {
      this.items = [{value: '' }];
    }
  }
}