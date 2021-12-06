// Одного разу тамада на весіллі вирішив розважити гостей, і встановив правило: як тільки приходить новий гість, кожен п'є по одній порції випивки!

// Давай допоможемо тамаді порахувати, скільки порцій випивки потрібно приготувати, і напишемо функцію getDrinks. Вона приймає ціле число numberOfGuests і повертає необхідну кількість порцій випивки, щоб вистачило усім гостям.

// Наприклад, якщо numberOfGuests = 3, то знадобиться:

// 1 порція, коли прийде перший гість;
// ще 2, коли прийде другий;
// і ще 3, коли прийде третій.
// Всього 1 + 2 + 3 = 6 порцій.

// ПІДКАЗКА: створи змінну count. Створи цикл for від 1 до numberOfGests і на кожній ітерації додавай поточну кількість гостей до count. Поверни count.

// ПІДКАЗКА 2: Розділ Підсумувати числа від 1 до n в теорії під відео допоможе тобі написати такий цикл.

// Приклади:getDrinks(3) === 6 // (1 + 2 + 3);
// getDrinks(0) === 0 // нема гостей - нема випивки;
// getDrinks(5) === 15 // (1 + 2 + 3 + 4 + 5);


  function getDrinks(numberOfGuests) {
    // write code here
  let count=0;
  for (let i=1; i<=numberOfGuests; i++){
    count=count+i;
  }
  console.log(count)
  return count;
      
  }
  getDrinks(3);
  getDrinks(0);
  getDrinks(5);