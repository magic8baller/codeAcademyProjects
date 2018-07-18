
let vacationSpots = ['Crete', 'Portugal', 'Iceland'];

for (let vacationSpotIndex = vacationSpots.length; vacationSpotIndex >= 0; vacationSpotIndex--) {
console.log(`I would love to visit ${vacationSpots[vacationSpotIndex]}`);
}

/*output!
I would love to visit undefined
I would love to visit Iceland
I would love to visit Portugal
I would love to visit Crete

Printed I would love to visit undefined: This happened because the length of vacationSpots is 3 so the loop attempted to print vacationSpots[3] which does not exist. Because arrays start counting at 0, the start condition needs to be the length of the vacationSpots array minus 1*/


//NEW CODE
for (let vacationSpotIndex = vacationSpots.length -1; vacationSpotIndex >= 0; vacationSpotIndex--) {
 console.log(`I would love to visit ${vacationSpots[vacationSpotIndex]}`);
}

//NEW OUTPUT
I would love to visit Iceland
I would love to visit Portugal
I would love to visit Crete
