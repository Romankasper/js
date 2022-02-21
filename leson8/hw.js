// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

    let contentbyId = document.getElementById('content');
console.log(contentbyId)


// -- отримує текст з блоку з id "rules"
let rulesById = document.getElementById('rules');
console.log(rulesById)


// -- замініть текст параграфа з id 'content' на будь-який інший
contentbyId.innerHTML = '<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, quaerat?</p>'


// -- замініть текст параграфа з id 'rules' на будь-який інший

rulesById.innerText = ' Lorem ipsum dolor sit amet '

// -- змініть кожному елементу колір фону на червоний
let childrenBackground = document.body.children;
for (const childrenBackgroundElement of childrenBackground) {
    childrenBackgroundElement.style.background = 'red'
}

// -- змініть кожному елементу колір тексту на синій
for (const childrenBackgroundElement of childrenBackground) {
    childrenBackgroundElement.style.color = 'blue'
}


// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(rulesById.classList)


// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let fc_rulesColor =document.getElementsByClassName('fc_rules')
console.log(fc_rulesColor)
for (const fcRulesColorElement of fc_rulesColor) {
    fcRulesColorElement.style.color = 'red'
}