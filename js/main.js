const name = "Karolina";
const age = 27;

console.log("siemka");
console.log(name);
console.log(age);
console.log(`Siemka, mam na imię ${name} i mam ${age} lat.`);

const headingTest = document.querySelector(".test-js");
headingTest.innerHTML = "To jest prawdziwa magia za pomocą JavaScriptu!";

const greet = (name, age) => {
  console.log(`Witaj drogi odwiedzający, mam na imię ${name} i mam ${age}`);
};

greet(name, age);
greet("Tomek", 29);

const otherName = "Anrzej";

greet(otherName, 33);

const calculate = (myNumber) => {
  console.log(
    `Proszę Cię funkcjo, masz tutaj numer ${myNumber} i zwroć mi wynik`
  );
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
  console.log(
    `Twoim zaczarowanym obiektem jest ${testObject.membership} oraz ${testObject.favoriteObject}`
  );
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
  console.log(
    `Podwojona wartość pierwszej liczby to ${amounts.propertyOne * 2}`
  );
  console.log(
    `Suma dwóch liczb to ${amounts.propertyOne + amounts.propertyTwo}`
  );
};

counting(numbers);

const humanOne = {
  name: 'Tomek',
  age: 29,
};

const humanTwo = {
  name: 'Karolina',
  age: 27,
};

const names = (a, b) => {
  console.log(`Imię1: ${a.name}`);
  b.name = a.name;
  console.log(`Imię2: ${b.name}`);
};

names(humanOne, humanTwo);
