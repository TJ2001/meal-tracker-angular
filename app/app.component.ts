import { Component, EventEmitter } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template:`
  <div class="container">
    <h1>Food Tracker App!</h1>
    <food-list
      [foodList]="foods"
      (onFoodSelect)="foodWasSelected($event)">
    </food-list>
  </div>
  `
})
export class AppComponent {
  public foods: Food [];
  constructor(){
    this.foods = [
      new Food("French Toast", "Atleast it was made using wheat bread...", 415),
      new Food("Bacon", "Uh oh, ****!", 505),
      new Food("Orange Juice", "Fresh-squeezed, yum", 140),
      new Food("Fried Chicken", "Ummmm... no comment", 700),
    ];
  }
  foodWasSelected(clickedFood: Food): void {
    console.log('parent', clickedFood);
  }
}
