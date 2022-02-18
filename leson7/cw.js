//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Cars (model,zavod,year,maxspeed,volum) {
//     this.model =model;
//     this.zavod =zavod;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volum = volum;
//     this.drive = function (){
//         console.log(`Їдемо з швидкістю ${maxspeed} на годину`);
//     };
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
//         }
//     };
//     this.newMaxSpeed = function (newSpeed){
//         this.maxspeed =this.maxspeed+newSpeed
//     };
//     this.changeYear = function (newYear){
//         this.year = newYear
//         console.log(this.year)
//     };
//     this.addDriver =function (driver){
//         this.drive =driver
//     };
// }
//
// let addCar = new Cars('Peugeot', 'France', 2000, 270, 2.0);
// addCar.info();
// addCar.newMaxSpeed(90);
// addCar.info();
// addCar.changeYear(1900);
// addCar.addDriver('Mongol');
// console.log(addCar);



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class Cars2{
    constructor(model, zavod, year, maxspeed, volum) {
        this.model = model;
        this.zavod = zavod;
        this.year = year;
        this.maxspeed = maxspeed;
        this.volum = volum;
    }
    drive(){
        console.log(`Їздимо з швидкістю ${this.maxspeed} на годину`)
    }
    info () {
        for (const key in this) {
            if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
        }
    }
    increaseMaxSpeed (newSpeed){
        this.maxspeed = this.maxspeed + newSpeed
    }
    changeYer (newYear){
        this.year = newYear

    }
    addDriver (driver){
        this.drive = driver
    }
}
 let addCar2 = new Cars2('Peugeot', 'France', 2000, 270, 2.0);
console.log(addCar2)
addCar2.drive()
addCar2.info()
addCar2.increaseMaxSpeed(10);
console.log(addCar2)
addCar2.changeYer(1980)
addCar2.info()
addCar2.addDriver('Petro')
console.log(addCar2)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}

let arrayCinderella = [
    new Cinderella('Nelia',23,39),
    new Cinderella('Olia',54,43),
    new Cinderella('Vasia',50 ,46),
    new Cinderella('Nastia',19,36),
    new Cinderella('ira', 24, 30),
    new Cinderella('lesia', 26, 31),
    new Cinderella('nadia', 29, 32),
    new Cinderella('genia', 90, 58),
    new Cinderella('lola', 87, 34),
    new Cinderella('goha', 34, 39),
]
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Princ{
    constructor(name, age, shoesize) {
        this.name = name;
        this.age = age;
        this.shoesize = shoesize;
    }
}
let princ = new Princ('Petro',26,36)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let idealPara =(arrayCinderella , princ) =>{
    for (const arrayCinderellaElement of arrayCinderella) {
        if (arrayCinderellaElement.footsize ===princ.shoesize){
            return `idealPara ${princ.name} - ${arrayCinderellaElement.name} `
        }
    }
}
console.log(idealPara(arrayCinderella,princ))

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

const yourPara = arrayCinderella.find((item) => item.footsize === princ.shoesize);
console.log(yourPara)