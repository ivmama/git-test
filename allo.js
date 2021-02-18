"use-strict";
// @ts-nocheck
// const person = {
//     name: {
//         first: 'John',
//         last: 'Doe'
//     },
//     age: 21,
//     role: 'admin'
// }

// const firstName = person.firstName;
// const lastName = person.lastName;


// const { name: {first: firstName, last: lastName}} = person;
// console.log(firstName, lastName);

// const {role = 'user'} = person;
// console.log(role);

// function connect({
//     host = 'localhost',
//     port = 3000,
//     user = 'guest'} = {}) {
//         console.log(user, port, host)
// }

// connect();

// const fib = [1, 1, 2, 3, 5, 8, 13, 21];
// const [, a, , b] = fib;
// console.log(a,b)

// const line = [[10, 17],[14, 7]];

// const [[p1x, p1y], [p2x, p2y]] = line;
// console.log(p1x,p1y, p2x, p2y);


// const people = ['chris', 'james', 'aaaaa'];
// const [a, ...other] = people;
// console.log(a, other); 

// const dict = {
//     duck: 'quack',
//     dog: 'wuff',
//     mouse: 'squeak',
//     hamster: 'squeak'
// };


// const res = Object.entries(dict)
//     .filter(([, value]) => value === 'squeak')
//     .map(([key])=> key)

// console.log(res);


// const shape = {
//     type: 'segment', 
//     coordinates: {
//         start: [10, 15],
//         end: [17, 15]
//     }
// }
// const {coordinates: {start: [startX, startY], end: [endX, endY]}} = shape;


// console.log(startX, startY, endX, endY);

// let namemy = 'fdsf';
// let who = 'pidor'; 

// const txt2 = `hello vanya ${Date.now()} you ${who}`;
// console.log(txt2);

// const html = `
// fsdf
// fdsfs
// fdsf <dsfsdf>   ${Date.now()}
// `

// console.log(html)

// const x = 1000;
// const y = 300;

// const p = {
//     x,
//     y,
//     draw(ctx) {

//     }
// };

// const prefix = '_fsf_'

// const data = {
//     [prefix + 'name']: 'bob',
//     [prefix + 'age']: 22
// }

// console.log(data)


// const defaults = {
//     host: 'localhost',
//     bdName: 'blog',
//     user: 'admin'
// };

// const opts =  {
//     user: 'john',
//     password: 'password'
// };

// const res = Object.assign({},defaults, opts);

// console.log(res);

// const person = {
//     name: 'John',
//     friens: ['mark', 'Smith']
// }

// const shallowCopy = Object.assign({}, person);

// person.friens.push('fdfdf')
// console.log(shallowCopy);

// const defaults = {
//     host: 'localhost',
//     bdName: 'blog',
//     user: 'admin'
// };

// const opts =  {
//     user: 'john',
//     password: 'password'
// };

// // const res = Object.assign({},defaults, opts);
// const port = 8080;
// const result = {
//     ...defaults, 
//     ...opts, 
//     port, 
//     connect(){

//     }
// };

// console.log(result);


// function Animal(name, voice){
//     this.name = name;
//     this.voice = voice;
// }

// Animal.prototype.say = function(){
//     console.log(this.name, 'goes', this.voice);
// }


// const dog = new Animal('Dog','woof');
// const cat = new Animal('Cat','meow');

// dog.say();
// cat.say();

// class Animal {
//     constructor(name, voice) {
//         this.name = name;
//         this.voice = voice;
//     }

//     say() {
//         console.log(this.name, 'goes', this.voice);
//     }
// }

// // duck -> Bird.prototype -> Animal.prototype -> Object.prototype -> null
// class Bird extends Animal {
//     constructor(name, voice, canFly) {
//         super(name, voice);
//         this.say();
//         this.canFly = canFly;
//     }
//     say() {
//         console.log('dfsdfsdfsdfsdf'); 
//     }

// }

// const duck = new Bird('Duck', 'quack', true);

// duck.say()


// class Counter {
//     count = 1;
//     inc = () => {
//         this.count+=Counter.incrementStep;
//         console.log(this.count)
//     }
//     static incrementStep = 2;

//     static incrementAll = function(arr) {
//         arr.forEach(counter => counter.inc());
//     }
// }

// Counter.incrementAll([]);


// const cnt = new Counter();
// console.log(cnt.count);
// cnt.inc();
// setTimeout(cnt.inc, 1000);


// let camelize = (str) => {
//     return str.split('-').map((v,i)=>{
//         if(i>0){
//            return v[0].toUpperCase() + v.substring(1); 
//         }
//         else return v;
//     }).join('')
//   }
  
//  console.log(camelize("background-color"));

// let arr = [5, 3, 8, 1];

// function filterRange(arr, a, b) {
//     return arr.filter((v)=> v>=a && v<=b);
// }

// let filtered = filterRange(arr, 1, 4);



// console.log(filtered); // 3,1 (совпадающие значения)

// console.log(arr); // 5,3,8,1 (без изменений)


// function filterRangeInPlace(arr, a, b) {

//     for (let i = 0; i < arr.length; i++) {
//       let val = arr[i];
  
//       // удалить, если за пределами интервала
//       if (val < a || val > b) {
//         arr.splice(i, 1);
//         i--;
//       }
//     }
  
//   }
  
//   let arr = [5, 3, 8, 1];
  
//   filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
  
//   alert( arr ); // [3, 1]

// let arr = [5, 2, 1, -10, 8, -5, 15];

// arr.sort((a, b) => b-a);

// console.log( arr ); 



// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// function copySorted(arr) {
//     let arrNew = arr.slice(0, arr.length);
//     return arrNew.sort();
// } 

// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (без изменений)


// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map((v) => v.name );

// console.log( names ); 


// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map((v)=> ({
//     fullName: `${v.name} ${v.surname}`,
//     id: v.id
// }))
// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]


// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // Вася 



// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ masha,vasya, petya ];

// sortByAge = (arr) => {
//    return  arr.sort((a,b) => a.age - b.age)
// }


// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петя


// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// getAverageAge = (arr) => {
//   return arr.reduce((s, v) => s + v.age, 0) / arr.length;
// } 

// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


// function unique(arr) {
//     let dict = {};
//     return arr.filter((v) => {
//         dict[v] = (dict[v]||0) +1;
//         return dict[v] <= 1; 
//     })
//   }
  
//   let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
//   ];
  
//   console.log( unique(strings) );


// a = null;
// console.log(a==null)

// const arr = [1,2,5];

// console.log(arr.forEach((e)=> e=2));

// let from = 1;
// let required = 1;


// const a = ()=> 2;
// const b = ()=> 1;
// console.log


// console.log(/\s/.exec("9,8,7,6,5,4,3,2,1 Старт!").index)

// console.log('abcda'.slice(-2))

// const a = [1,2,3,4,5,6,7,8]
// console.log(a.slice(-6));

// const a = 5;
// let b = prompt("s", );
// console.log(a==b);


// var a ='hello';


// function foo() {};

// console.log(typeof foo);
 //use strict
// let a = 10;
// a.b = 10;
// console.log(a);

// async function bar() {
//   return Promise.resolve(10);
// }

// async function foo() {};

// const res2 = foo();
// const res2 =bar()

// console.log(res1, res2)


// function foo() {

// }

// foo.x = 10;

// console.log(foo.x);


// const result = [5,7,9].slice(1)

// result.pop()
// result.push(4);

// console.log(result)

// function f1() {
//     console.log(this);
//     this.style.background = 'orange';   
// }

// document.querySelector('.b-1').addEventListener('click', f1);

// class U2 {
//     constructor(model){
//         this.model = model;
//     }
//     showThis() {
//         console.log(this)
//     }
// }

// const boat = new U2('222');
// const boat2 = new U2(333);
// console.log(boat);
// console.log(boat2);
// boat.showThis();    
// boat2.showThis();    
 

// class Yellow extends U2 {
//     constructor(model, color){
//         super(model);
//         this.color = color;
//     }
// }

// let b = new Yellow(666, 'red');
// console.log(b)


// let head = {
//     glasses: 1,

//   };
  
//   let table = {
//     pen: 3,
//     __proto__: head
//   };
  
//   let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
//   };
  
//   let pockets = {
//     money: 2000,
//     __proto__: bed
//   };

//   console.log(pockets.glasses)

// let hamster = {
//     stomach: [],
//     eat(food) {
//       this.stomach = [food];
//     }
//   };
  
//   let speedy = {
//       stomach: [],
//     __proto__: hamster
//   };
  
//   let lazy = {
//     stomach: [],
//     __proto__: hamster
//   };
  
//   // Этот хомяк нашёл еду
//   speedy.eat("apple");
//   console.log( speedy.stomach ); // apple
  
//   // У этого хомяка тоже есть еда. Почему? Исправьте
//   console.log( lazy.stomach ); // apple



// let names = "John";
// names = "Pete";




// let sayHi = () => {
//   console.log("Hi, " + names);
// }

// sayHi();


// function sum(a){
//     return function(b){
//         return a + b;
//     }
// };

// console.log(sum(4)(3));



// function inBetween(a, b) {
//     return function(i) {
//         if (i >= 3 && i<= 6) return true;
//     }
// }

// function inArray(array) {
//     return function(i) {
//         return array.includes(i);
//     }
// }


// let arr = [1, 2, 3, 4, 5, 6, 7];

// // console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2



// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
//   ];

//   function byField(props) {
//     return function (a, b) {
//         if (a[props] > b[props]) {
//             return 1;
//         }
//         else return -1;
//     }
//   }

// console.log(users.sort(byField('age')));

// console.log(users.sort(byField('name')));
// console.log(users.sort(byField('age')));


// function makeArmy() {
//     let shooters = [];
  
//     for (let i = 0; i < 10; i++) {
//       let shooter = function() { // функция shooter
//         console.log( i ); // должна выводить порядковый номер
//       };
//       shooters.push(shooter);
//     }
  
//     return shooters;
//   }
  
//   let army = makeArmy();
  
//   army[0](); // у 0-го стрелка будет номер 10
//   army[5](); // и у 5-го стрелка тоже будет номер 10

console.log(1);


console.log(3);

