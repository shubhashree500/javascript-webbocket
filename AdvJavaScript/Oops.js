// 1.Object literal
// -------------------
// let person = {
//     first_name: "Shubhashree",
//     last_name: "Khilar",
//     getFunction: function(){
//         return(`the name of the person is ${person.first_name}${person.last_name}`)
//     },
//     phone_number: {
//         mobile: '3450360936',
//         land_line: '759847528'
//     }
// }
// console.log(person.getFunction());
// console.log(person.first_name);
// console.log(person.last_name);

// console.log(person.phone_number.mobile);



// 2.object constructor
// function Person(first_name,last_name){
//     this.first_name = first_name;
//     this.last_name = last_name;
// }
// let person1 = new Person('shubhabhree','khilar');
// let person2 = new Person('biswajit','khilar');
// console.log(person1.first_name);
// console.log(`${person2.first_name} ${person2.last_name}`);


// class vehicle{
//     constructor(name,maker,engine){
//         this.name = name;
//         this.maker = maker;
//         this.engine = engine;
//     }
//     getDetails(){
//         return(`the name of the bike is ${this.name}`)
//     }
// }
// let bike1 = new vehicle('hayabhusa','suzuki','1340cc');
// let bike2 = new vehicle('duke', 'super', 'cc')

// console.log(bike1.name);
// console.log(bike2.engine);
// console.log(bike1.getDetails());


// class person{
//     constructor(name){
//         this.name = name;
//     }
//     toString(){
//         return (`${super.toString()}.student ID : ${this.id}`);
//     }
// }
// class student extends person{
//     constructor(name,id){
//         super(name);
//         this.id = id;
//     }
//     toString(){
//         return(`${super.toString()},student ID: ${this.id}`);
//     }
// }
// let student1 = new student('shree',22);
// console.log(student1.toString());


// class person{
//     constructor(name,id){
//         this.name = name;
//         this.id =id;
//     }
//     add_Adress(add){
//         this.add = add;
//     }
//     getDetails(){
//         console.log(`name is ${this.name}, address is: ${this.add}`);
//     }
// }
// let person1 = new person('Lima',22);
// person1.add_Adress('delhi');
// person.getDetails();

