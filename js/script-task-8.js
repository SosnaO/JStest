// Напиши програму для принтера makeStickers, яка приймає число detailsCount і рядок robotPart. Функція повинна повертати масив рядків в такому форматі: {{partOfRobot}} detail #{{n}}.

// Якщо detailsCount = 0, поверни порожній масив.

// Приклади:

// makeStickers(3, 'Body') === ['Body detail #1', 'Body detail #2', 'Body detail #3']
// makeStickers(4, 'Head') === ['Head detail #1', 'Head detail #2', 'Head detail #3', 'Head detail #4']
// makeStickers(0, 'Foot') === []

function makeStickers(detailsCount, robotPart) {
  let result = [];
  if (detailsCount === 0) {
    return result;
  }
  for (let i = 0; i < detailsCount; i++) {
    result[i] = robotPart + ' detail #' + (i + 1);
  }
  console.log(result);
  return result;
}

makeStickers(3, 'Body'); //=== ['Body detail #1', 'Body detail #2', 'Body detail #3'];
makeStickers(4, 'Head'); // ===['Head detail #1', 'Head detail #2', 'Head detail #3', 'Head detail #4'];
makeStickers(0, 'Foot'); // === [];
