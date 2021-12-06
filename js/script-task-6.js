// Нещодавно археологи знайшли старі записи древньої цивілізації. Виявляється у них вже була розвинена писемність і була своя мова. Але найкрутіше з цього всього те, що говорили вони просто задом наперед. Археологи відправили знахідку нам на розшифровку.

// Давай розшифруємо decryptMessage послання message древньої цивілізації нащадкам!!!

// Приклади:

// decryptMessage('!!!reeb gniknird ekil eW') === 'We like drinking beer!!!'
// decryptMessage('0202 ni eb lliw cimednap surivanoroc A') === 'A coronavirus pandemic will be in 2020'

// function decryptMessage(message) {
//   let arr = '';
//   // console.log(arr);

//   for (let i = message.length; i >= 0; i--) {
//     // if () {

//     // }

//     arr += message.charAt(i);
//   }
//   console.log(arr);

//   return arr;
// }
// //console.log(decryptMessage());
// decryptMessage('!!!reeb gniknird ekil eW'); //=== 'We like drinking beer!!!';

//или

function decryptMessage(message) {
  let arr = '';
  for (const char of message) {
    arr = char + arr;
  }
  return arr;
}
// decryptMessage('!!!reeb gniknird ekil eW');
