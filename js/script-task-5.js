// Ти можеш розраховувати, що назва складається виключно з букв, а слова розділені одним пробілом.

// Приклади:

// makeAbbr('national aeronautics space administration') === 'NASA'
// makeAbbr('central processing unit') === 'CPU'
// makeAbbr('simplified molecular input line entry specification') === 'SMILES'

function makeAbbr(words) {
  let arr = words.split(' ');
  let result1;
  console.log('arr', arr);
  //let x = arr.element[0];
  let result = '';
  for (let i = 0; i <= arr.length; i++) {
    element = arr[i];
    if (element) {
      //console.log(element);
      result = result + String(element).charAt(0);
      result1 = result.toUpperCase();
    } //result = result + arr[0];
  }
  console.log('result', result1);
  return result1;
}

makeAbbr('national aeronautics space administration'); //=== 'NASA';

// var str = 'How are you doing today?';
// var res = str.split(' ');

// console.log(res); // How,are,you,doing,today? it will print
