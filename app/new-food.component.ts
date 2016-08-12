
import {Component, EventEmitter} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onNewFood'],
  template: `
  <input placeholder="Food" #newName>
  <input placeholder="Details" #newDetails>
  <input type="number" placeholder="Calories" #newCalories>
  <button (click)="addFood(newName, newDetails, newCalories)" class="btn-success btn-lg add-button">Add</button>
  `
})
export class NewFoodComponent {
  public onNewFood: EventEmitter<Food>;
  constructor() {
    this.onNewFood = new EventEmitter();
  }
  addFood(name: HTMLInputElement,details: HTMLInputElement,calories: HTMLInputElement,genre: HTMLInputElement) {
    var newFood : Food = new Food(name.value,details.value, parseInt(calories.value));
    this.onNewFood.emit(newFood);
    name.value = "";
    details.value = "";
    calories.value = "";
    console.log(newFood.name);
  }
}
