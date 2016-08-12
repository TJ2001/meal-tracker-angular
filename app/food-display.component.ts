import { Component, EventEmitter } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
    selector: 'food-display',
    inputs: ['food'],
  template: `
    <div class="tlc margin-top">
      <h3 class="margin-left">{{ food.name }}</h3>
      <h4 class="margin-left">Details: "{{ food.details }}" <br> Calories: {{ food.calories }}</h4>
    </div>
  `
})
export class FoodDisplayComponent {
  public food: Food;
}
