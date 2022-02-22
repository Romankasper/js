// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
// let main_headerById =document.getElementById('main_header')
// main_headerById.classList.add('xxx')

// b) робить шириниу елементу ul 400px
// let ul =document.getElementsByTagName('ul')
// ul[0].style.width ='400px';


// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let linkListClass = document.getElementsByClassName('linkList')
// for (const linkListClassElement of linkListClass) {
//     linkListClassElement.style.width ='50%'
// }

// d) отримує текст який зберігається в елементі з класом listElement2
// let liText = document.getElementsByClassName('listElement2')
// console.log(liText[0])


// e) отримує всі елементи li та змінює ім колір фону на сірий
// let liBackground = document.getElementsByTagName('li');
// for (const liBackgroundElement of liBackground) {
//     liBackgroundElement.style.backgroundColor ='gray'
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
// let aAll = document.getElementsByTagName('a');
// console.log(aAll)
// for (const aAllElement of aAll) {
//     aAllElement.classList.add('anchor')
//     // console.log(aAllElement)
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// for (const aAllElement of aAll) {
//     if(aAllElement.innerText === 'link3'){
//         aAllElement.style.fontSize = '40px'
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// for (const aAllElement of aAll) {
//     let newClass = aAllElement.innerText;
//     aAllElement.classList.add(`element_${newClass}`)
//     console.log(aAllElement)
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let subheaderElement = document.getElementsByClassName('sub-header')
// for (const subheaderElementElement of subheaderElement) {
//     subheaderElementElement.style.backgroundColor = prompt('enter a color')
// }


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// for (const subheaderElementElement of subheaderElement) {
//     if(subheaderElementElement.innerText === 'content 2 segment'){
//         subheaderElementElement.style.color = prompt('enter color')
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let content_1 =document.getElementsByClassName('content_1')
// console.log(content_1[0].innerText);
// content_1[0].innerText = prompt('Enter new text')


// l) отримати елементи p та змінити їм padding на 20px
// let pAll =document.getElementsByTagName('p')
// console.log(pAll)
// for (const pAllElement of pAll) {
//     pAllElement.style.padding = '20px'
// }


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let elementText2 = document.getElementsByClassName('text2');
// console.log(elementText2);
// elementText2[0].innerText ='sep-2021'