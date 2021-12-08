// Перша партія роботів готова, тепер їх треба перевірити. Всі роботи унікальні, тому в кожного своя швидкість руху. Помилка в коді? Можливо. Але зараз не до цього. Треба визначити найнижчу, найвищу та середню швидкість наших роботів.

// Наш сервер приймає масив швидкостей роботів testResults, пропускає його через функцію getSpeedStatistic і повертає статистику у вигляді масиву, де

// перший елемент - це мінімальна швидкість
// другий - максимальна
// третій - середня швидкість, округлена вниз (використай Math.floor(result))
// Приклади:

// getSpeedStatistic([10, 10, 11, 9, 12, 8]) === [8, 12, 10]
// getSpeedStatistic([10]) === [10, 10, 10]
// getSpeedStatistic([]) === [0, 0, 0]
// getSpeedStatistic([8, 9, 9, 9]) === [8, 9, 8]
// getSpeedStatistic([5]) === [5, 5, 5]
// Підказка:

// якщо масив результатів порожній, одразу поверни статистику
// створи змінні min, max та sum з першою швидкістю з масива
// перебери решту элементів оновлюючи min, max та sum коли потрібно
// обчисли average
// поверни масив з min, max та average

function getSpeedStatistic(testResults) {
  if (testResults.length === 0) {
    return [0, 0, 0];
  }
  let min = Math.min(...testResults);
  let max = Math.max(...testResults);
  let sum = 0;
  for (let i = 0; i < testResults.length; i++) {
    sum += testResults[i];
  }
  const average = sum / testResults.length;
  return [min, max, Math.floor(average)];
}

getSpeedStatistic([10, 10, 11, 9, 12, 8]); //=== [8, 12, 10]
getSpeedStatistic([10]); //=== [10, 10, 10]
getSpeedStatistic([]); // === [0, 0, 0]
getSpeedStatistic([8, 9, 9, 9]); //=== [8, 9, 8]
getSpeedStatistic([5]); // === [5, 5, 5]

///

function getSpeedStatistic(testResults) {
  if (testResults.length === 0) {
    return [0, 0, 0];
  }
  let min = testResults[0];
  let max = testResults[0];
  let sum = 0;

  for (const speed of testResults) {
    sum += speed;
    if (speed < min) {
      min = speed;
    }
    if (speed > max) {
      max = speed;
    }
  }
  const average = Math.floor(sum / testResults.length);
  return [min, max, Math.floor(average)];
}
