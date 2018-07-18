/* The scope of `random` is too loose--> moved from global to within getRandEvent block: before the same randomly assigned events applied to both name / name2 b/c in GLOBAL scope will use SAME value when called  */

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
}

// made scope of days less localized
const getTrainingDays = event => {
  let days;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }
  return days;
}

// moved name to global scope 
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
}

const event = getRandEvent();
const days = getTrainingDays(event);

// Define a `name` variable. Use it as an argument after updating logEvent and logTime 
const name = 'Nala';
logEvent(name, event);
logTime(name, days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);

/*output:
Nala's event is: Marathon
Nala's time to train is: 50 days
Warren's event is: Triathlon
Warren's time to train is: 100 days

&&random days/events pairs for each person with each run*/
