console.log("Hello from the script!");

// let numbers = [17, 32, 19, 0, 9, 8, 1, 12, 13, 40];

// // // different methods on an array

// // // 1. forEach
// numbers.forEach(function (number) {
//   console.log(number * number);
// });

// // // 2. map
// const newNumbers = numbers.map(function (number) {
//   return number * 2;
// });
//     console.log(newNumbers);

// // // 3. filter
// const filteredNumbers = numbers.filter(function (number) {
//   return number > 10;
// });
// console.log(filteredNumbers);

// == vs ===

// const a = 10;
// const b = "10";
// console.log(a, "==", b, a == b);
// console.log(a, "===", b, a === b);
// console.log(true==1);
// console.log(false === 0);

//string functions MDN

//spread operator

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newNumbers = [...numbers, 10, 11, 12];
// console.log(newNumbers);

// const person = {
//   name: "Jacob Doe",
//   age: 32,
// };
// const newPerson = {
//   ...person,
//   salary: 20000,
// };

// newPerson.name = "John Doe";
// console.log(newPerson);
// console.log(person);

//DOM manipulation

// const h1 = document.querySelector("h1");
// h1.textContent = "Hello World";
// h1.style.color = "red";

const p1 = fetch("https://swapi.dev/api/people/1");
console.log(p1.json());
console.log("I am supposed to print later!!");

console.log("Excecuted First!!");
setTimeout(function () {
  console.log("Executed now!!");
}, 3000);
console.log("excuted second!!");

// document.body.style.backgroundColor = 'yellow'
// setTimeout(
//     function () {
//         document.body.style.backgroundColor = 'blue'
//     },
//     3000)
// document.body.style.backgroundColor = 'red'

// document.body.style.backgroundColor = 'yellow'
// setTimeout(function () {
//     document.body.style.backgroundColor = 'green';
//     setTimeout(function () {
//         document.body.style.backgroundColor = 'blue'
//         setTimeout(function () {
//             document.body.style.backgroundColor = 'red'
//         }, 2000)
//     }, 2000)
// }, 2000)

const starWars = async () => {
  try {
    const p1 = await fetch("https://swapi.dev/api/people/1");
    const data1 = await p1.json();
    console.log(data1.name, data1.height);
    const p2 = await fetch("https://swapi.dev/api/people/2");
    const data2 = await p2.json();
    console.log(data2.name, data2.height);
  } catch (e) {
    console.log("Ye kya kar diya?");
  }
};

starWars();
