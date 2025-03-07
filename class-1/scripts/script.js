console.log("Welcome to FSDI 104!");

//? Global variables
let globalVariable = "i am a global variable";

function exampleFunction() {
  //? Local variable
    let localVariable = "i am a local variable";
    console.log(globalVariable);
    console.log(localVariable);
    if(true){
        let blockVariable = "i am a block variable";
        console.log(blockVariable);
    }
}

console.log(globalVariable);
/*
* These will throw an error because they are not defined in the global scope
? console.log(localVariable);
? console.log(blockVariable);
*/

exampleFunction();

//! -------------ARRAYS-------------

let fruits = ["apple", "banana", "orange"];
console.log(`This is an array: ${fruits}`);
console.table(fruits);


console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[1] = "cherry";
console.log(fruits);

//? aray length
console.log(fruits.length);

//? add and remove elements of the array
fruits.push("watermelon"); //* add to the end
console.log(fruits);

fruits.pop(); //* remove from the end
fruits.pop(); //* remove from the end
console.log(fruits);

fruits.unshift("grapes"); //* add to the beginning
console.log(fruits);

//! ---------------Challenge 1---------------
//* Create an array of students names
//* use a for loop to iterate the array
//* log each student name in the console

let students = ["Isai", "Erick", "Rafael", "George", "jeffrey"];
for(let i = 0; i < students.length; i++){
    console.log(students[i]);
}

//! -------------OBJECTS-------------
//* Objects are a collection of key-value pairs
//* it allows us to store multiple values in a single variable

/* 
* syntax:
* let objectName = {
*     key1: value1,
*     key2: value2,
*     key3: value3
* }
*/

let person = {
    name: "Mike",
    lastname: "Scott",
    age: 40,
    isStudent: false,
}

//? Accessing object properties
console.log(`The person's name is ${person.name}`);
console.log(person[`age`]); 
console.log(person.lastname); 
console.log(person.isStudent); 

let student1 = {
    name: "leo",
    email: "leo@gmail.com",
    age: 80,
    address: "741 evergreen terrace Springfield, USA",
}

//? create 3 more students objects
let student2 = {
    name: "isai",
    email: "isai@gmail.com",
    age: 21,
    address: "425 Morelos, Tecate, BC",
}

let student3 = {
    name: "juan",
    email: "juan@gmail.com",
    age: 33,
    address: "calle 13, Tijuana, BC",
}

let student4 = {
    name: "ashly",
    email: "ashly@gmail.com",
    age: 23,
    address: "172 el cajon, USA",
}

let studentsList = [student1, student2, student3, student4];
console.log(`student list: ${studentsList.length}`);

document.getElementById("studentCounter").textContent = `Student Count: ${studentsList.length}`;


function getStudentNames(){
let StudenNamesUl = document.getElementById("studentNames");
studentsList.forEach((student) => {
    let li = document.createElement("li");
    li.textContent = student.name;
    StudenNamesUl.appendChild(li);
});
}