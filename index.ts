// Arrays:
const listNumber: number[] = [1, 2, 3];
console.log(listNumber);

listNumber.push(5);

console.log(listNumber);

let nome: string[] = ["ioi", "oi"];

console.log(nome);

// Outra sintaxe de array

let numbers: Array<number> = [1, 2, 3];
console.log(typeof numbers);

// Any
const arr1: any = [1, 2, "oi", 3];
console.log(arr1);

// Paramentros tipados:

function soma(a: number, b: number) {
  console.log(a + b);
}
soma(4, 5);

// Tipo de retorno:

function sayHi(): string {
  //definindo o tipo do retorno antes do escopo da função
  return "Hello";
}
console.log(sayHi());

// Função anonima:
setTimeout(function () {
  const sallary: number = 1000;

  // console.log(parseFloat(sallary))

  console.log(sallary);
}, 1000);

// Tipos de Objetos:
function passCoodinates(coord: { x: number; y: number }) {
  console.log(`x coodinates ${coord.x}`);
  console.log(`y coodinates ${coord.y}`);
}

const objCoord = { x: 329, y: 123 };

passCoodinates(objCoord);

const pessaoObj: { nome: string; idade: number } = {
  nome: "Gabriel",
  idade: 23,
};

console.log(pessaoObj);

// Propiedades opcionais:
const pessaoObj2: { nome: string; idade?: number } = { nome: "Gabriel" }; // "idade?" = deixa o propiedade idade como opcional
console.log(pessaoObj2);

// Validando argumento opcional:
function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    console.log("ola" + " " + firstName + " " + lastName);
  } else {
    console.log("ola " + firstName);
  }
}

advancedGreeting("Gabriel", "Pereira");
advancedGreeting("Gabriel");

// Union Type:
let dado: number | string = 2;
console.log(typeof dado);
dado = "dois";
console.log(typeof dado);

// Avançando em unnion types

function showUserRole(role: boolean | string) {
  if (typeof role == "boolean") {
    return "Usuario não aprovado";
  }

  return `A função do usuario é: ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole("admin"));

// Type alias:
type ID = string|number //Define o tipo "ID"
function showId(id: ID){
    console.log(`O id é ${id}`)
}
showId(100)
showId("2232")

// Interface:

interface Point {
    x:number
    y:number
    z:number
}

function showCoords(obj: Point){
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}
const coordObj:Point = {
    x:100,
    y:234,
    z:432
}

showCoords(coordObj)

// Intarface x type Alias:

interface Person{
    name: string
}

interface Person{
    age:number
}

const somePerson: Person = {name: "Matheus", age: 23}
console.log(somePerson)

type personType = {
    name: string
}
// type personType = {
//     age: string
// }

// Não é possivel fazer a modificação do type apenas no Intarface

// Literal Types:
let test: "testando"

function showDirection (direction: "left"| "right" | "center"){
    console.log("a direção é " + direction)
}
showDirection("center")
// showDirection("top")

// Non-null Assertion Operator
const p = document.querySelector("#some-p")
console.log(p!.innerHTML)

// Bigint

let n: bigint

n = 1000n

console.log(n)

// Symbol:

let symbolA:symbol = Symbol("a")
let symbolB = Symbol("a")