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
      new Food("Pizza", "Uh oh", 15),
    ];
  }
  foodWasSelected(clickedFood: Food): void {
    console.log('parent', clickedFood);
  }
}

//
// export class AppComponent {
//   public foods: Food [];
//   constructor(){
//     this.foods = [
//       new Food("French Toast", "Didn't get butter!", 376),
//     ];
//   }
//   foodWasSelected(clickedFood: Food): void {
//     console.log('parent', clickedFood);
//   }
// }
//

// new Food("Bacon", "I should really skip it next time...", 270),
// new Food("Tea", "Need caffeine in the morning", 75),
