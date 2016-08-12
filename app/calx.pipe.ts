import {Pipe, PipeTransform} from 'angular2/core';
import {Food} from './food.model';

@Pipe({
  name: "calories",
  pure: false
})
export class CaloriesPipe implements PipeTransform {
  transform (input: Food[], info) {
    var selectedCalories = info[0];
    var output: Food[] = [];
    if (selectedCalories === "above") {
      for (var i = 0; i < input.length; i++){
        if (input[i].calories > 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (selectedCalories === "lower") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories <= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
