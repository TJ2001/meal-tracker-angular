import {Pipe, PipeTransform} from 'angular2/core';
import {Food} from './food.model';

@Pipe({
  name: "calories",
  pure: false
})
export class CaloriesPipe implements PipeTransform {
  transform = function (input: Food[]){
    var output: Food[] = [];
    for (var i = 0; i < input.length; i++){
      if (input[i].calories > 500) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
