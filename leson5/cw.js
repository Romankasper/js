// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// const minNumber = (a, b ,c) => (a < b && a < c) ? document.write(a) : (b < a && b < c ) ? document.write(b) : (c <a && c < b) ?document.write(c) :document.write('Введіть щераз')
// minNumber(4, 54 ,4546)


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// const maxNumber = (a, b ,c) => (a > b && a > c) ? document.write(a) : (b > a && b > c ) ? document.write(b) : (c > a && c > b) ?document.write(c) :document.write('Введіть щераз')
// maxNumber(4, 54 ,4546)


// - створити функцію яка повертає найбільше число з масиву
// let arr = [3, 23, 31, 65, 4, 5];
// const maxNumberOFArray = (array) => {
//     let max = array[0]
//     for (let i = 0; i < array.length; i++) {
//    if(array[i] > max){
//        max = array[i]
//    }
//     }
//      return max
// }
// console.log(maxNumberOFArray(arr))

// - створити функцію яка повертає найменьше число з масиву
// let array = [54,234,334, 34, 341, 'adadas'];
// const minArrayNamber = (array) => {
//     let min = array[0]
//     for (const arrayElement of array) {
//         if (arrayElement < min){
//             min = arrayElement
//         }
//     }
//     return min- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// }
// document.write(`Мінімальне число в масиві = ${minArrayNamber(array)}`)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [4 , 5, 3];
// const sumElementArray = (array) =>{
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum +=arrayElement
//     }
//     return sum
// }
// document.write(`<h2>${sumElementArray(arr)}</h2>`)


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr = [3, 2, 4]
// const serednieArray = (array) =>{
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum +=arrayElement
//     }
//     return sum/array.length
// }
// console.log(serednieArray(arr))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// const minMaxNamber = (...arg) =>{
//     let min =arg[0];
//     let max = arg[0];
//     for (const argElement of arg) {
//         if (argElement < min){
//             min = argElement
//         }
//         if(argElement > max){
//             max = argElement
//         }
//     }
//     document.write(`<p>максимальне число з введених = ${max}</p>`)
//     return min;
// }
// document.write('Мінімальне число з введених:' +minMaxNamber(23,234,12,435,121))

// - створити функцію яка заповнює масив рандомними числами
// const filsArray = (lenght) =>{
// let array = [];
//     for (let i = 0; i < lenght; i++) {
//         array.push(Math.floor(Math.random()*100))
//     }
//     return array
// }
// console.log(filsArray(5))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// const filsArray = (lenght,limit) =>{
// let array = [];
//     for (let i = 0; i < lenght; i++) {
//         array.push(Math.round(Math.random()*limit))
//     }
//     return array
// }
// console.log(filsArray(  10,99))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let array = [1,2,3,2342,23,12];
// const reversArray = (array) =>{
//     const arrayNew =[];
//     for (let i = array.length-1; i >=0; i--) {
//          arrayNew.push(array[i])
//     }
//     return arrayNew
// }
// console.log(reversArray(array))