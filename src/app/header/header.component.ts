import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  collapsed = true;
  @Output() recipesEvent = new EventEmitter<number>();
  @Output() shoppingListEvent = new EventEmitter<number>();

  onRecipes() {
    console.log('onRecipes');
    this.recipesEvent.emit(1);
  }

  onShoppingList() {
    console.log('onShoppingList');
    this.shoppingListEvent.emit(2);
  }
}
