// Напиши функцію doublePower, яка приймає масив поточних потужностей currentPowers та повертає новий масив з подвоєними значеннями.

// Приклади:

// doublePower([100, 150, 200, 220]) === [200, 300, 400, 440]
// doublePower([45, 34, 56, 67]) === [90, 68, 112, 134]
// doublePower([]) === []

function doublePower(currentPowers) {
  let result = [];
  for (const n of currentPowers) {
    result.push(n * 2);
  }
  console.log(result);
  return result;
}

doublePower([100, 150, 200, 220]) === [200, 300, 400, 440];
doublePower([45, 34, 56, 67]) === [90, 68, 112, 134];
doublePower([]) === [];
doublePower([0, 0, 4, 6, 8, 10]);
