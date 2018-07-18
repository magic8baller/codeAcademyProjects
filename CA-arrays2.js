let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments.push('Hummus');
console.log(condiments);
/*output: [ 'Ketchup',
  'Mustard',
  'Soy Sauce',
  'Sriracha',
  'Hummus' ]*/
condiments = ['paleo-friendly'];
console.log(condiments);
//output: [ 'paleo-friendly' ]

utensils.pop();
console.log(utensils);
/*output: [ 'Fork', 'Knife', 'Chopsticks' ]*/

utensils = ['hands'];
console.log(utensils);
//output: TypeError: Assignment to constant variable.

/*as ABOVE- cant reassign values to const variable;
but CAN change contents of the const arrays (eg pop, shift, slice, split, unshift etc are OK) */
