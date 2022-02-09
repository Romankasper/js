// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function numMin (a, b, c){
//     if (a < b && a < c){
//         document.write(a)
//     }else if (b < a && b < c ){
//         document.write(b)
//     }else if (c <a && c < b){
//         document.write(c)
//     }
//
// }
// numMin(5,6 ,123)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function numMax (num1,num2,num3){
//     if (num1 > num2 && num1 > num3){
//         console.log(num1)
//     }else if (num2 > num1 && num2 > num3){
//         console.log(num2)
//     }else if (num3 > num2 && num3 > num1){
//     console.log(num3)
//     }
// }
// numMax(12,435,213)


// - створити функцію яка повертає найбільше число з масиву
// let newArray = [2, 53,545,23,12]
// function maxArrayNamber (array){
//      let max = array[0]
//     for (const arrayElement of array) {
//         if  (arrayElement > max){
//             max = arrayElement
//     }
//     }
//     return max
// }
// document.write(`<h2>Найбільший елемент масиву: ${maxArrayNamber(newArray)}</h2>`)


// - створити функцію яка повертає найменьше число з масиву
// let newArray = [2, 53,545,23,12,1]
// function minArrayNamber (array){
//      let min = array[0]
//     for (const arrayElement of array) {
//         if  (arrayElement < min){
//             min = arrayElement
//     }
//     }
//     return min
// }
// document.write(`<h2>Найенший елемент масиву: ${minArrayNamber(newArray)}</h2>`)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function sumArray (array){
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum = arrayElement +sum
//     }
//     return sum
// }
// let sumCheck = [160,12,342,123,213];
// console.log(sumArray(sumCheck))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function averageSumArray (array){
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum +=arrayElement;
//     }
//     return sum/array.length
// }
// let a = [2, 1, 6]
// console.log(averageSumArray(a))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function minMax(numbers) {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const element of arguments) {
//         if (element > max) {
//             max = element;
//         }
//         if (element < min) {
//             min = element;
//         }
//     }
//     console.log( max);
//     return min;
// }
// document.write('Мінімальне число : ' + minMax(231,231,435,231,12,32,34,1235,32))

// - створити функцію яка заповнює масив рандомними числами
// function funRandom (length) {
//     let arrayEmpty = [];
//     for (let i = 0; i < length; i++){
//         arrayEmpty.push(Math.floor(Math.random()*100));
//     }
// return arrayEmpty
// }
//
// document.write(funRandom(10))


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function funRandom (limit){
//     let arrayEmpty =[];
//     for (let i = 0; i < 10; i++) {
//        arrayEmpty.push(Math.round(Math.random()*limit))
//
//     }
// return arrayEmpty
// }
// document.write(funRandom(4))


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let array = [1,2,3]
// function revers (array) {
//     const myReversArray = [];
//     for (let i = array.length-1; i >= 0; i--) {
//        myReversArray.push(array[i])
//     }
//     return myReversArray
// }
// console.log(revers(array))