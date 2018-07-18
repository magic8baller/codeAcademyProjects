let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

groceryList.unshift('popcorn');
console.log(groceryList);
/*output: [ 'popcorn',
  'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains' ]*/
console.log(groceryList.slice(1, 4));
//output: [ 'bananas', 'coffee beans', 'brown rice' ]

/*if console.log(groceryList.slice(-2, -1));
output: ["coconut oil"]*/
