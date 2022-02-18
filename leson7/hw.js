// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
class User {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}
let users =[
        new User(14, 'Stepan', 'Giga', 'sg@gmail.com', 30680000001),
        new User(2, 'Olko', 'Atb', 'av@gmail.com', 30680000002),
        new User(36, 'Nina', 'Ola', 'ddf@gmail.com', 30680000003),
        new User(43, 'Stepan', 'Btn', 'gtr@gmail.com', 30680000004),
        new User(5, 'Stecia', 'Luziv', 'sde@gmail.com', 30680000005),
        new User(61, 'Stepan', 'Misko', 'ashh@gmail.com', 30680000006),
        new User(78, 'Yozef', 'Liga', 'uj7@gmail.com', 30680000007),
        new User(12,'Roman','Bybluk','sda@gmail.com',3242343234),
    new User(11,'Blalal','ksdfk','sdfs@gmail.com',23423423234),
    new User(1,'Misha','Pavliv','sfd@gmail.com',324234234223)
]
console.log(users)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter).
let usersFiltr = users.filter(value => value.id %2 === 0);
console.log(usersFiltr)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
users.sort((a,b)=> a.id-b.id)
console.log(users.sort((a,b)=> a.id-b.id))


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client extends User{
    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone);
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let clients =[
    new Client(14, 'Stepan', 'Giga', 'sg@gmail.com', 30680000001,['book','game','ps4']),
    new Client(2, 'Olko', 'Atb', 'av@gmail.com', 30680000002,['phone','computer']),
    new Client(36, 'Nina', 'Ola', 'ddf@gmail.com', 30680000003,['table','chair']),
    new Client(43, 'Stepan', 'Btn', 'gtr@gmail.com', 30680000004,['bedroom']),
    new Client(5, 'Stecia', 'Luziv', 'sde@gmail.com', 30680000005,['honey']),
    new Client(61, 'Stepan', 'Misko', 'ashh@gmail.com', 30680000006,['stone','wardrobe','table']),
    new Client(78, 'Yozef', 'Liga', 'uj7@gmail.com', 30680000007,['cat','dog']),
    new Client(12,'Roman','Bybluk','sda@gmail.com',3242343234,['fish','bee']),
    new Client(11,'Blalal','ksdfk','sdfs@gmail.com',23423423234,['apple','banana','melon','watermelon']),
    new Client(1,'Misha','Pavliv','sfd@gmail.com',324234234223,['clock','figurine'])
]
console.log(clients)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
    console.log(clients.sort((a,b)=>a.order.length-b.order.length))

