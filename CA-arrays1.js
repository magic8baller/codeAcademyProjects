
let newYearsResolutions = ['Learn to code', 'Drink more water', 'Be more mindful'];

console.log(newYearsResolutions);
//output: [ 'Learn to code', 'Drink more water', 'Be more mindful' ]


//can store indiv array elements to var's!
let listItem = newYearsResolutions[0];
console.log(listItem);
//output: Learn to code


console.log(newYearsResolutions[1]);
//output: Drink more water


/*
console.log(newYearsResolutions[3]);
//output: undefined ([3] = empty
*/

newYearsResolutions[1] = 'Learn a new language';

console.log(newYearsResolutions);
// output: [ 'Learn to code', 'Learn a new language', 'Be more mindful' ]
