// 1. Створити пустий масив та :
let array =[];
//     a. заповнити його 50 парними числами за допомоги циклу.
// for (let i = 0; i <50; i++) {
//     const arrayElement = array[i];
//     array[i] = i*2+2
// }
// console.log(array)
//     b. заповнити його 50 непарними числами за допомоги циклу.
// for (let i = 0; i <50; i++) {
//     const arrayElement = array[i];
//     array[i] = i*2+1
// console.log(array[i])
// }
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// for (let i = 0; i < 20; i++) {
//     const arrayElement = array[i];
//     array[i] = Math.floor(Math.random()*100)
//     console.log(array[i])
// }
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// for (let i = 0; i < 20; i++) {
//     const arrayElement = array[i];
//     array[i] = Math.floor(Math.random()*725+8)
//     console.log(array[i])
// }
// 2. Вивести за допомогою console.log кожен третій елемен
// for (let i = 0; i <50; i+=3) {
//     const arrayElement = array[i];
//     array[i] = i*2+1
//     console.log(array[i])
// }
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 0; i < 20; i+=3) {
//     const arrayElement = array[i];
//     array[i] = Math.floor(Math.random()*725+8)
//     if (array[i]  % 2 === 0){
//     console.log(array[i])
//     }
// }
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// for (let i = 0; i < 20; i+=3) {
//     const arrayElement = array[i];
//     array[i] = Math.floor(Math.random()*725+8)
//     if (array[i]%2 === 0){
//     console.log(array[i])
//     }
//
// }
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let numbers =[ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     if (numbers[i])
// }