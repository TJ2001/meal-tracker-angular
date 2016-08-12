import { Component, EventEmitter } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
    selector: 'food-display',
    inputs: ['food'],
  template: `
    <h3>Food: {{ food.name }}</h3>
    <h4>Details: "{{ food.details }}" <br> Calories: {{ food.calories }}</h4>
  `
})
export class FoodComponent {
  public food: Food;
}
