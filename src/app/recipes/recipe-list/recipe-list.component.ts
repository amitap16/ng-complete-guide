import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Daal Dhokli'
      , 'Gujarati Sunday Special Dish, yummy!! Dal Dhokli is a spicy, sweet, one-pot meal, prepared by simmering whole wheat flour bits in a lentil-based motley perked with spices. It is a popular dish in Gujarat and Rajasthan and is prepared mostly for lunch.'
      , 'https://ministryofcurry.com/wp-content/uploads/2017/06/IMG_3071-scaled.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
