const name = "Karolina";
const age = 27;

console.log("siemka");
console.log(name);
console.log(age);
console.log(`Siemka, mam na imię ${name} i mam ${age} lat.`);

const greet = (name, age) => {
  console.log(`Witaj drogi odwiedzający, mam na imię ${name} i mam ${age}`);
};

greet(name, age);
greet("Tomek", 29);

const otherName = "Anrzej";

greet(otherName, 33);

const calculate = (myNumber) => {
  console.log(`Proszę Cię funkcjo, masz tutaj numer ${myNumber} i zwroć mi wynik`);
  return myNumber * 100;
};

console.log(`Proszę Cię Karolino, oto Twój wynik ${calculate(20)}`);

const myResult = calculate(30);

console.log(`Proszę Cię Karolino, oto Twój wynik ${myResult}`);

const charm = {
  alertName: "javaScript",
  membership: "programowanie",
  favoriteObject: "wtf",
};

const test = (testObject) => {
  console.log(`Twoim zaczarowanym obiektem jest ${testObject.alertName}`);
  console.log(`Twoim zaczarowanym obiektem jest ${testObject.membership} oraz ${testObject.favoriteObject}`);
};
test(charm);

console.log(`Twoim zaczarowanym obiektem jest ${charm.alertName}`);

const numbers = {
  propertyOne: 1,
  propertyTwo: 2,
};

const counting = (amounts) => {
  console.log(`Pierwsza liczba to ${amounts.propertyOne}`);
  console.log(`Druga liczba to ${amounts.propertyTwo}`);
  console.log(`Podwojona wartość pierwszej liczby to ${amounts.propertyOne * 2}`);
  console.log(`Suma dwóch liczb to ${amounts.propertyOne + amounts.propertyTwo}`);
};

counting(numbers);

const humanOne = {
  name: "Tomek",
  age: 29,
};

const humanTwo = {
  name: "Karolina",
  age: 27,
};

const names = (a, b) => {
  console.log(`Imię1: ${a.name}`);
  b.name = a.name;
  console.log(`Imię2: ${b.name}`);
};

names(humanOne, humanTwo);

if ("Java" != "Javascript") {
  console.log("Java to nie JS");
}

if (!("Java" === "Javascript")) {
  console.log("Java to nie JS - sprawdzenie nota");
}

if (2 > 3) {
  console.log("To prawda");
}

if (8 > 3) {
  console.log("To prawda");
}

if (2 == 2) {
  console.log("To prawda");
}

if (2 === "2") {
  console.log("To prawda");
}

if (2 !== "2") {
  console.log("To prawda");
}

if (humanOne.age > humanTwo.age) {
  console.log("To prawda");
}
if (false) {
  console.log("to sie nie wykona");
}

if (!false) {
  console.log("To sie nie wykona, bo odwróciliśmy notem");
}

if (humanOne.age === 29 && humanTwo.age === 27) {
  console.log("Tyle mamy lat");
}

if (humanOne.age === 29 || humanTwo.age === 27) {
  console.log("Ktoś z nas na pewno ma tyle lat");
}

if (humanOne.age > humanTwo.age) {
  console.log("Tomek jest starszy");
} else if (humanOne.age < humanTwo.age) {
  console.log("Karolina jest starsza");
}

if (humanOne.age < humanTwo.age) {
  console.log("Tomek jest starszy");
} else {
  console.log("Karolina jest młodsza");
}

const myNumber = 8;

switch (myNumber) {
  case 7:
    console.log("jestem 7");
    break;
  case 9:
    console.log("jestem 9");
    break;
  default:
    console.log("jestem inna cyfra");
}

32 > 20 ? console.log("prawda") : console.log("nieprawda");

if (32 > 20) {
  console.log("prawda");
} else {
  console.log("nieprawda");
}

const button = document.querySelector(".action--js");

console.log(button);

const myClick = () => {
  const headingTest = document.querySelector(".notes_description--js");
  headingTest.innerHTML = "To jest prawdziwa magia za pomocą JavaScriptu!";
};

button.addEventListener("click", myClick);

button.addEventListener("mouseenter", (e) => {
  console.log(e);
});

import {hello} from './hello.js'

console.log(hello());

import karolina from './karolina.js';

console.log(karolina);

