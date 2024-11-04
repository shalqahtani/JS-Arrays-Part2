/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */

//Task 1
let numbers = [1, 2, 3, 4, 5, 6];

function isArrayLengthOdd(numbers) {
  if (numbers.length % 2 == 0) {
    return false;
  } else {
    return true;
  }
}

//Task 2
console.log(isArrayLengthEven(numbers));

function isArrayLengthEven(numbers) {
  if (numbers.length % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isArrayLengthEven(numbers));

//Task 3

const instructors = ["Modi", "Ayah", "Anwar", "Fahad", "Salman", "Mishari"];
function addLailaToArray(instructors) {
  console.log(instructors);
  instructors.push("Lila");
  console.log(instructors);
}
//console.log(addLailaToArray(instructors));
addLailaToArray(instructors);
//Task 4
/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */

const teams = ["Brazil", "Germany", "Italy"];
function eliminateTeam(teams) {
  console.log(teams);
  teams.pop("Italy");
  console.log(teams);
}
//console.log(eliminateTeam(teams));
eliminateTeam(teams);
