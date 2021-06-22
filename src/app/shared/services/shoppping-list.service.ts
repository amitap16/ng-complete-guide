import { Injectable } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatos', 10)
  ];

  getIngredients() {
    return this.ingredients;
  }
}
