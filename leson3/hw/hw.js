// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let numbers = [1, 2, 3, 4, 5,];
// let strings = ['a','b','c','d','i'];
// let a = ['z', 5, '5',true , false];
// console.log(numbers, strings, a)


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let array = [];
// array[0] = 2;
// array[1]= true;
// array[2]= '257'
// array[3]= 'bbbbbbbbb';
// console.log(array)


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i <10; i++) {
//     document.write('<div>Lorem ipsum dolor sit amet. </div>')
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i =0; i < 10 ; i++) {
//     document.write(`<div> Lorem ipsum dolor sit amet. ${i} </div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20){
//     i++;
//     document.write('<h1>Lorem ipsum dolor sit amet.</h1>')
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i <20){
//     document.write(`<h1>Lorem ipsum dolor sit amet. ${i}</h1>`)
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі
// let numbers = [1, 2, 3, 4, 653, 54, 324, 34, 3, 43];
// for ( i = 0; i < numbers.length; i++){
//     console.log(numbers[i])
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі
// let strings = ['1', '2','one', 'fals', 'number', 'book', 'write', 'while','break', 'let'];
// for (i = 0; i < strings.length; i++){
//     console.log(strings[i])
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let strings = [1, 2,'one', false, 'number', 'book', true, 'while','break', 'let'];
// for (i = 0; i < strings.length; i++){
//     console.log(strings[i])
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let strings = [1, 2,'one', false, 'number', 'book', true, 'while',5, 'let'];
// for (i = 0; i < strings.length; i++){
//     if (typeof strings[i] === 'boolean')
//     console.log(strings[i])
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let strings = [1, 2,'one', false, 'number', 'book', true, 'while',5, 'let'];
// for (i = 0; i < strings.length; i++){
//     if (typeof strings[i] === 'number')
//     console.log(strings[i])
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let strings = [1, 2,'one', false, 'number', 'book', true, 'while',5, 'let'];
// for (i = 0; i < strings.length; i++){
//     if (typeof strings[i] === 'string')
//     console.log(strings[i])
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let array = [];
// array[0]=1;
// array[1]=true;
// array[2]='23';
// array[3]=[];
// array[4]={};
// array[5]='string';
// array[6]=56;
// array[7]=2;
// array[8]=false;
// array[9]='break';
// for (i=0;i < array.length;i++){
//     console.log(array[i])
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (i = 0; i <10; i++) {
//     console.log([i])
//     document.write(` ${i} `)
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (i=0; i<100;i++){
//     console.log([i]);
//     document.write(` ${i} `)
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (i=0; i<100;i+=2){
//     console.log([i]);
//     document.write(` ${i} `)
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (i=0;i < 100;i++){
//     if (i % 2 === 0){
//         console.log([i]);
//         document.write(` ${i} `)
//         }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (i=0;i < 100;i++){
//     if (i % 2 === 1){
//         console.log([i]);
//         document.write(` ${i} `)
//         }
// }