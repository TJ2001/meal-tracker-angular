
import {Component, EventEmitter} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onNewFood'],
  template: `
  <br>
  <input placeholder="Food" class="col-sm-2 input-lg" #newName>
  <input placeholder="Details" class="col-sm-4 input-lg" #newDetails>
  <input type="number" placeholder="Calories" class="col-sm-2 input-lg" #newCalories>
  <button (click)="addFood(newName, newDetails, newCalories)" class="btn btn-danger btn-lg">Add</button>
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
