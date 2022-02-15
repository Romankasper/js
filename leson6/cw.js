// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// console.log(n1)
// console.log(n2)
// console.log(n3)
// let normalName = (name) =>{
//    return  name.replace('..',' ').replace('---',' ').replace('__',' ')
// }
// console.log(normalName(n1))
// console.log(normalName(n2))
// console.log(normalName(n3))


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let random =(length) =>{
//     let newArray =[];
//     for (let i = 0; i < length; i++) {
//         newArray.push(Math.round(Math.random()*100))
//     }
//     return newArray
// }
// console.log(random(10))

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let random =(length) =>{
//     let newArray =[];
//     for (let i = 0; i < length; i++) {
//         newArray.push(Math.round(Math.random()*100))
//     }
//     return newArray.sort((a,b) =>a-b)
// }
// console.log(random(10))


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let filterRandom =(length) =>{
//     let newArray =[];
//     for (let i = 0; i < length; i++) {
//         newArray.push(Math.round(Math.random()*100))
//     }
//     return newArray.filter(number=>number%2 === 0)
// }
// console.log(filterRandom(20))

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let randomArrray =(lenght,num)=>{
//     let emptyArray = [];
//     for (let i = 0; i < lenght; i++) {
//         emptyArray.push(Math.floor(Math.random() * num));
//     }
//     return emptyArray.map(value => value.toString())
// };
// console.log(randomArrray(10,100));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// // sortNums('ascending') // [3,11,21]
// // sortNums('descending') // [21,11,3]
// let sortNums = (array,direction) =>{
//     if(direction === 'ascending' ){
//         return array.sort((a,b)=>a-b)
//     }
//   else if(direction === 'descending'){
//         return array.sort((a,b)=>b-a)
//     }
// }
// console.log(sortNums(nums,'descending'))
// console.log(sortNums(nums,'ascending'))

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// let newSort = coursesAndDurationArray.sort((a,b)=>b.monthDuration-a.monthDuration);
// console.log(newSort)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let newFilter = coursesAndDurationArray.filter(value => value.monthDuration>5)
// console.log(newFilter)