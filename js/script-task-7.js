// Напиши, будь ласка, функцію isWerewolf, яка отримує рядок target і повертає true, якщо це перевертень.

//   Примітка: target може містити латинські літери(і великі, і малі), пробіли та розділові знаки.
// isWerewolf('rotator') === true // rotator --> rotator
// isWerewolf('home') === false // home --> emoh

function isWerewolf(target) {
  let arr = '';
  let arr1;
  let target1;
  let arr2;
  let target2;
  for (const char of target) {
    arr = char + arr;
  }
  arr1 = arr.split(' ').join('').toLowerCase();
  console.log('arr1', arr1);
  target1 = target.split(' ').join('').toLowerCase();
  console.log('target', target1);

  arr2 = arr1.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, '');
  console.log('arr2', arr2);
  target2 = target1.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, '');
  console.log('target2', target2);
  if (arr2.charAt() === target2.charAt()) {
    return console.log(true);
  }

  return console.log(false);
}
isWerewolf('rotator') === true; // rotator --> rotator
isWerewolf('home') === false; // home --> emoh
isWerewolf('racecar'); //=== true;'Was it a rat I saw?'
isWerewolf('red rum sir is murder'); //=== true;
isWerewolf('eva, can i see bees in a cave'); //=== true;
isWerewolf('Was it a rat I saw?'); //=== true;






//или 
// function isWerewolf(target) {
//   const lowerTarget = target.toLowerCase();
//   const abc = 'abcdifghijklmnopqrstuvwxyz';
//   let normal = '';
//   let reveresd = '';

//   for (const char os lowerTarget) {
//     if(abc.includes(char)){
//       normal+=char;
//       reversed=char+=reversed
//     }
//   }

// return normal === reversed;

}
