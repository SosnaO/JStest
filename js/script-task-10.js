// Поки в нас достатньо роботів, давайте навчимо їх сортувати коробки на складі. Всі коробки мають номери, а роботи вчаться сортувати їх в порядку зростання.

// Але сортування — справа нелегка, іноді трапляються помилки. Тому нам поки доведеться перевіряти, чи правильно робот відсортував коробки.

// Напиши функцію isSorted, яка отримує масив номерів і повертає true або false. (Номери - це завжди числа, але вони можуть повторюватись)

// Приклади:

// isSorted([1, 2, 3, 4, 5]) === true
// isSorted([0, 1, 1, 1, 2]) === true
// isSorted([1, 5, 7]) === true
// isSorted([1, 2, 11]) === true
// isSorted([5]) === true
// isSorted([]) === true
// isSorted([0, 3, 1, 2, 2, 2]) === false
// isSorted([1, 11, 2]) === false
// isSorted([5, 3]) === false

function isSorted(boxNumbers) {
  for (var i = 0; i < boxNumbers.length; i++) {
    if (boxNumbers[i + 1]) {
      if (boxNumbers[i] > boxNumbers[i + 1]) {
        return false;
      }
    }
  }
  return true;
}

isSorted([1, 2, 3, 4, 5]) === true;
isSorted([0, 1, 1, 1, 2]) === true;
isSorted([1, 5, 7]) === true;
isSorted([1, 2, 11]) === true;
isSorted([5]) === true;
isSorted([]) === true;
isSorted([0, 3, 1, 2, 2, 2]) === false;
isSorted([1, 11, 2]) === false;
isSorted([5, 3]) === false;

// ИЛИ
function isSorted(boxNumbers) {
  for (let i = 1; i < boxNumbers.length; i++) {
    if (boxNumbers[i - 1] > boxNumbers[i]) {
      return false;
    }
  }

  return true;
}
