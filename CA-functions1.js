let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log(`Order: ${crustType} pizza topped with ${topping}`);
}
/*Output:
Order: thin crust pizza topped with mushroom
Order: whole wheat pizza topped with spinach
Order: brooklyn style pizza topped with pepperoni*/

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
}
const getTax = (itemCount) => {
  return getSubTotal(itemCount) * .06;
}
const getTotal = (itemCount) => {
  return getSubTotal(itemCount) + getTax(itemCount);
}
console.log(getSubTotal(orderCount)); //22.5
console.log(getTotal(orderCount)); //23.85
