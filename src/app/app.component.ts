import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  linkNum: number;

  onRecipesEvent(num) {
    console.log(num);
    this.linkNum = num;
  };

  onShoppingListEvent(num) {
    console.log(num);
    this.linkNum = num;
  };
}
