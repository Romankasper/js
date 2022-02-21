// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

class CreatesObjects {
    constructor(id, name, username, email, addres, phone, website, company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.addres =addres;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
}
class Addres{
    constructor(street, suite, city, zipcode, geo) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo =geo;
    }
}
class Geo {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}
class Comany{
    constructor(name, catchPhrase, bs) {
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }

}
let createobject = new CreatesObjects(1,"Leane Graham",'Bret','Sincere@april.biz',
    new Addres('Kylas Light','Apt. 556','Gwenbrough','92998-3874',new Geo('37.3159','81.1496')),
    '1-770-736-8031 x56442','hildegard.org',new Comany('Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets'))
console.log(createobject)
