const getSleepHours = (day) => {
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 5;
      break;
    case 'wednesday':
      return 6;
      break;
    case 'thursday':
      return 9;
      break;
    case 'friday':
      return 7;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 10;
      break;
  }
};

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You met your sleep goals!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`Whoa you must\'ve been tired! You slept ${idealSleepHours - actualSleepHours} hour(s) over your goal!`);
  } else {
    console.log(`You are ${idealSleepHours - actualSleepHours} hour(s) below your sleep goal! Look into a NAP!`);
  }
};

calculateSleepDebt();
