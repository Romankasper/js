// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 ='hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// console.log(str1.length)
// console.log(str2.length)
// console.log(str3.length)

// - Перевести до великого регістру наступні стрінгові значення
// let upStr1 =str1.toUpperCase();
// console.log(upStr1);
// let upStr2 = str2.toUpperCase();
// console.log(upStr2);
// let upStr3 =str3.toUpperCase();
// console.log(upStr3)

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str1 ='HELLO WORLD';
// let str2 = 'LOREM IPSUM';
// let str3 = 'JAVASCRIPT IS COOL';
// let lowerStr1 = str1.toLowerCase();
// console.log(lowerStr1);
// let lowerStr2 = str2.toLowerCase();
// console.log(lowerStr2);
// let lowerStr3 =str3.toLowerCase();
// console.log(lowerStr3);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// let newStr =str.trim();
// console.log(newStr)



// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//// let str = 'Каждый охотник желает знать';
// //let arr = stringToarray(str);
// // document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// const stringToarray = (str) => {return str.split(" ")}
// let str = 'Каждый охотник желает знать';
// let array =stringToarray(str);
// console.log(array)
// document.write(array)

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// document.writeln(delete_characters(str, 7)); // Каждый
//    let str = 'Каждый охотник желает знать';
// let delete_Characters = (str , index) =>{
//     return str.substring(0,index)
// }
// console.log(delete_Characters(str,7))
// document.write(delete_Characters(str,11))


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let insert_dash =(str) =>{
//     return str.split(' ').join('-').toUpperCase();
// }
// let str = "HTML JavaScript PHP";
// console.log(insert_dash(str))
// document.write(insert_dash(str))

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let firstUp = (str) => {
//     return str[0].toUpperCase() + str.slice(1)
// };
// document.write(firstUp('hello okten'));
// console.log(firstUp('hello okten'));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let capitalize = (str) => {
//     return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
// };
// document.write(capitalize('okten hi you are welcome'));
// console.log(capitalize('okten hi you are welcome'));