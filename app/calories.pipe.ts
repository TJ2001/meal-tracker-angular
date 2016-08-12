import {Pipe, PipeTransform} from 'angular2/core';
import {Food} from './food.model';

@Pipe({
  name: "calories",
  pure: false
})
export class CaloriesPipe implements PipeTransform {
  transform(input: Food[], args){
    if(args[0] > 500) {
      return input;
    } else {
      return input.filter((food) => {
        return food.calories===args[0];
      });
    }
  }
}
