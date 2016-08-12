import {Pipe} from 'angular2/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
  name: 'CaloriesPipe'
})
export class CaloriesPipe {

  // Transform is the new "return function(value, args)" in Angular 1.x
  transform(value, args?) {
    // ES6 array destructuring
    let [minCalories] = args;
    return value.filter(food => {
      return food.calories >= +minCalories;
    });
  }

}
