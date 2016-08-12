import { Component, EventEmitter } from 'angular2/core';
import { FoodDisplayComponent } from './food-display.component';
import { Food } from './food.model';
import { NewFoodComponent } from './new-food.component';
import { EditFoodComponent } from './edit-food.component';
import { CaloriesPipe } from './calx.pipe';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  pipes: [CaloriesPipe],
  directives: [FoodDisplayComponent, NewFoodComponent, EditFoodComponent],
  template: `
  <food-display *ngFor="#currentFood of foodList | calories: selectedCalories"
    (click)="foodClicked(currentFood)"
    [class.selected]="currentFood === selectedFood"
    [food]="currentFood">
  </food-display>
  <new-food (onNewFood)="addFood($event)"></new-food>
  <edit-food-details *ngIf="selectedFood" [food]="selectedFood">
  </edit-food-details>
  <select class="form-control" name="genre-select" (change)="onChange($event.target.value)">
    <option value="all">All</option>
    <option value="above">Over 500</option>
    <option value="lower">Less than 501</option>
  </select>
  `
})
export class FoodListComponent {
  public foodList: Food[];
  public selectedCalories: number = 500;
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  constructor(){
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    console.log('child', clickedFood);
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
  addFood(Food) {
    console.log("addFood Called");
    this.foodList.push(Food);
  }
    onChange(selectedCalories) {
    this.selectedCalories = selectedCalories;
  }
}
