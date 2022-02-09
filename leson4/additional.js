// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//  function sumArgument (arg1,arg2){
//     if(!arg2){
//         console.log(arg1)
//     }else{
//         console.log(arg1+arg2)
//     }
//  }
// sumArgument(1,  )


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// function sumArray (array1,array2) {
//     for (let i=0,j=0; i <array1.length,j <array2.length;i++,j++){
//       console.log(array1[i]+array2[j])
//     }
// }
// let arr1 = [2,3,5,6,4,4];
// let arr2 = [3,4,5,3,2,4];
// sumArray(arr1,arr2)


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// let array =[{name: 'Dima', age: 13}, {model: 'Camry'}]
// function arrayKey (array){
//     let keys = []
//     for (const arrayElement of array) {
//         for (const arrayElementKey in arrayElement) {
//             keys.push(arrayElementKey)
//         }
//     }
//     return keys
// }
// console.log(arrayKey(array))

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// let array =[{name: 'Dima', age: 13}, {model: 'Camry'}]
// function arrayKey (array){
//     let keys = []
//     for (const arrayElement of array) {
//         for (const arrayElementKey in arrayElement) {
//             keys.push(arrayElement[arrayElementKey])
//         }
//     }
//     return keys
// }
// console.log(arrayKey(array))