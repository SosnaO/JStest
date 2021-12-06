// Наш новий бос, як виявилося, просто ненавидить голосні літери, тому нам потрібно прибрати їх з усієї документації.

// Напиши функцію removeVowels, яка приймає рядок document і повертає рядок, де усі голосні з document видалені.

// Голосними для цього завдання вважаються букви aeiouy в будь-якому регістрі.

// Приклади:

// removeVowels('document') === 'dcmnt'
// removeVowels('I like my boss') === ' lk m bss'
// removeVowels('350 euro') === '350 r'

// function removeVowels(doc) {
//   let vowels = {
//     a: true,
//     e: true,
//     i: true,
//     o: true,
//     u: true,
//     y: true,
//   };

//   let result = '';

//   for (let i = 0; i < doc.length; i++) {
//     let letter = doc[i].toLowerCase();
//     if (!vowels[letter]) {
//       result += doc[i];
//     }
//   }
//   console.log(result);
//   return result;
// }
// removeVowels('document'); // === 'dcmnt'
// removeVowels('I like my boss'); //=== ' lk m bss'
// removeVowels('350 euro'); //=== '350 r'

//или

function removeVowels(doc) {
  let result = '';

  for (const char of doc) {
    if (!'aiouey'.includes(char.toLowerCase())) {
      result += char;
    }
  }
  console.log(result);
  return result;
}
removeVowels('document'); // === 'dcmnt'
removeVowels('I like my boss'); //=== ' lk m bss'
removeVowels('350 euro'); //=== '350 r'
