// - Дано натуральное число n. Выведите все числа от 1 до n.
// const numbers =(n) =>{
// if (n === 1){
//     return '1';
// }
// return  numbers(n-1)+' '+n;
// }
// console.log(numbers(3))

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// const numbersAB = (a,b) =>{
// if(a <= b){
//     if(a === b){
//         return a;
//     }
//     return  numbersAB(a,b-1)+' '+b;
// }else {
//     if(a === b){
//         return a;
//     }
//     return a+" " + numbersAB(a-1,b)
// }
// }
// console.log(numbersAB(1,21))
// console.log(numbersAB(10,1))

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]


// const changePlace = (array,number) =>{
//         for (let i = 0; i < array.length; i++) {
//             if(i === number){
//                 array.splice(i,0,array.splice(i+1,1))
//             }
//         }
//     return document.write(array)
// }
// let arr =[1, 23,123,12,343,12,'okten',10]
// changePlace(arr,2)


