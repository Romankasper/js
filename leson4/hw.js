// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function squareCreator (a, b) {
//     return  a*b
// }
// console.log(squareCreator(5,6))
// document.write(`площа прямокутника ${squareCreator(5,3)}`)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function areaCircle (r){
//     return 3.14*(Math.pow(r,2))
// }
// console.log(areaCircle(3))vbksilh
// document.write('площа кола:' + areaCircle(5))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function areaCylindr (h,r){
//     return 2*3.14*r*h
// }
// console.log(areaCylindr(5,3))

// - створити функцію яка приймає масив та виводить кожен його елемент
// function dataArray (array){
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }
//     }
// let array = [4,5,6,5,3]
//     dataArray(array)
// let f = [4, "a", 435, true]
// dataArray(f)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function dataParagraph (text){
//     document.write(`<p>${text}</p>`)
// }
// dataParagraph('gulu bylu i vmerlu')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function dataLi (text){
//     document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li></ul>`)
// }
// dataLi('Lorem ipsum dolor sit.')
// function dataLi (text){
//     document.write(`<ul>`)
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${text}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
// dataLi('knife')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function dataLi (text,number){
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
// dataLi('knife',9)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function primitives (array){
//     document.write(`<ol>`)
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//
//     }
//     document.write(`</ol>`)
// }
// let arr = [4, 'asd' ,false, 5, true]
// primitives(arr)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// function objArray (array){
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id} ${arrayElement.name} ${arrayElement.age}</div>`)
//     }
// }
// let newArray = [{id:1 , name:'Roman',age:26},{id:2 , name:'petro',age:22},{id:3 , name:'Oleg',age:36}];
// objArray(newArray)