// - створити функцію яка обчислює та повертає площу прямокутника висотою
// const areaRectangle =(a,b) => a*b;
// console.log(areaRectangle(5,4));
// document.write(`<p>Площа прямокутника = ${areaRectangle(6,8)}</p>`)

// - створити функцію яка обчислює та повертає площу кола
// const areaCircle = (r) => 3.14*(Math.pow(r,2));
// console.log(areaCircle(2));
// document.write('Площа кола -' +areaCircle(7));

// - створити функцію яка обчислює та повертає площу циліндру
// const areaCYlindr = (r,h) => 2*3.14*r*h;
// console.log(areaCYlindr(3,5));
// document.write(`<h2>Площа циліндра = ${areaCYlindr(4,7)}</h2>`);

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [5, 45, 456,45, 452,1]
// const dataElement = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }
// }
// dataElement(arr)

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// const paragraphText =(text) => document.write(`<p> ${text} </p>`)
// paragraphText('bad text ')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// const createsUl = (arg) =>{
//     document.write(`<ul>`)
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${arg}</li>`)
//     }
//     document.write(`</ul>`)
// }
// createsUl('creates text')


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// const createsUlDinamic = (text,number) =>{
//         document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// createsUlDinamic('creates text',6)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// const createsOL = (array) => {
//     document.write(`<ol>`)
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ol>`)
//
// }
// let arr = [5, true , 'bee', 54645,false];
// createsOL(arr)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arrayObject = [{id:1, name:'Roman', age:26},{id:2, name:'Oleg', age:27},{id:2, name:'Petro', age:44}];
// const objectArray = (array) => {
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id}  ${arrayElement.name}  ${arrayElement.age}</div>`)
//     }
// }
// objectArray(arrayObject)