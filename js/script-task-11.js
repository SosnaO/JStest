// Наші інженери зараз шукають баг, який змушує роботів винищувати людство...

// А ми поки випустимо оновлення. Раніше ми навчили роботів розуміти команди і перетворювати напрямок руху в правильний сигнал:

// 'forward' в x + 0 та y + 1
// 'back' в x + 0 та y - 1
// 'right' в x + 1 та y + 0
// 'left' в x - 1 та y + 0
// Було б чудово, якби робот знав, де він зараз знаходится навіть без GPS.
// Напиши функцію getLocation, яка приймає масив початкових координат coordinates (у вигляді [x, y]) та массив історії команд commands, і повертає масив кінцевих координат робота в тому ж форматі ([x, y]).

// Наприклад:

// coordinates = [2, 1]
// commands = ['left', 'back', 'back']

// Координати після першої команди: [1, 1] // 1 крок вліво
// Координати після другої команди: [1, 0] // 1 крок назад
// Координати після третьої команди: [1, -1] // 1 крок назад

// Результатом буде [1, -1]
// Інші приклади:

// getLocation([0, 0], ['forward', 'right']) === [1, 1]
// getLocation([2, 3], ['back', 'back', 'back', 'right']) === [3, 0]
// getLocation([0, 5], ['back', 'back', 'back', 'right', 'left', 'forward']) === [0, 3]ф
function getLocation(coordinates, commands) {
  let result = coordinates.slice();

  for (let i = 0; i <= commands.length; i++) {
    if (commands[i] === 'forward') {
      result[1] = result[1] + 1;
    } else if (commands[i] === 'back') {
      result[1] = result[1] - 1;
    } else if (commands[i] === 'right') {
      result[0] = result[0] + 1;
    } else if (commands[i] === 'left') {
      result[0] = result[0] - 1;
    }
  }

  console.log(result);
  return result;
}

getLocation([0, 0], ['forward', 'right']); //=== [1, 1]
getLocation([2, 3], ['back', 'back', 'back', 'right']); //=== [3, 0]
getLocation([0, 5], ['back', 'back', 'back', 'right', 'left', 'forward']); // === [0, 3]
getLocation([2, 3], ['back', 'back', 'back', 'right']) / //=== [3, 0]
  getLocation([0, 5], ['back', 'back', 'back', 'right', 'left', 'forward']); //=== [0, 3]
