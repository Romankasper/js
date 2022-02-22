// Все робити за допомоги js.
// - створити блок,
// let div =document.createElement('div');
// div.innerText ='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid amet architecto omnis repellat sapiente similique? Doloremque exercitationem harum magni!'
// //     - додати йому класи wrap, collapse, alpha, beta
// div.classList.add('wrap')
// div.classList.add('collapse')
// div.classList.add('alpha')
// div.classList.add('beta')
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// div.style.backgroundColor = 'red';
// div.style.color ='green'
// div.style.fontSize = '40px'
// div.style.margin ='20px'
// // - додати цей блок в body.
// document.body.append(div)
// // - клонувати його повністю, та додати клон в body.
// document.body.appendChild(div.cloneNode(true))

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// for (const element of coursesAndDurationArray) {
// let divElement =document.createElement('div');
// divElement.innerText =`${element.title} ${element.monthDuration}`
//     document.body.appendChild(divElement)



// - Є масив
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const course of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('item')
    document.body.appendChild(div)
    let h2 = document.createElement('h2');
    h2.classList.add('heading')
    h2.innerText = `${course.title}`;
    div.appendChild(h2)
    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = `${course.monthDuration}`
    div.appendChild(p)
}