//arrow function BEFORE refactoring
const volumeOfSphere = (diameter) => {
  return (1/6) * Math.PI * diameter * diameter * diameter;
}
console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');

//arrow function AFTER refactoring: concise body/ implicit return
const volumeOfSphere = diameter => (1/6) * Math.PI * diameter * diameter * diameter;
console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');
