import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
    <div class="margin-top">
      <div class="form-group row">
        <label for="example-text-input" class="col-xs-2 col-form-label">Edit Name: </label>
        <div class="col-xs-10">
        <input class="form-control" [(ngModel)]="food.name">
        </div>
      </div>
      <div class="form-group row">
        <label for="example-search-input" class="col-xs-2 col-form-label">Edit Details: </label>
        <div class="col-xs-10">
        <input class="form-control" [(ngModel)]="food.details">
        </div>
      </div>
      <div class="form-group row">
        <label for="example-search-input" class="col-xs-2 col-form-label">Edit Calories: </label>
        <div class="col-xs-10">
        <input class="form-control" [(ngModel)]="food.calories">
        </div>
      </div>
    </div>
  `
})
export class EditFoodComponent {
  public food: Food;
}
