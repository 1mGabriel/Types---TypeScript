"use strict";
// Arrays:
const listNumber = [1, 2, 3];
console.log(listNumber);
listNumber.push(5);
console.log(listNumber);
let nome = ["ioi", "oi"];
console.log(nome);
// Outra sintaxe de array
let numbers = [1, 2, 3];
console.log(typeof numbers);
// Any
const arr1 = [1, 2, "oi", 3];
console.log(arr1);
// Paramentros tipados:
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// Tipo de retorno:
function sayHi() {
    //definindo o tipo do retorno antes do escopo da função
    return "Hello";
}
console.log(sayHi());
// Função anonima:
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary))
    console.log(sallary);
}, 1000);
// Tipos de Objetos:
function passCoodinates(coord) {
    console.log(`x coodinates ${coord.x}`);
    console.log(`y coodinates ${coord.y}`);
}
const objCoord = { x: 329, y: 123 };
passCoodinates(objCoord);
const pessaoObj = {
    nome: "Gabriel",
    idade: 23,
};
console.log(pessaoObj);
// Propiedades opcionais:
const pessaoObj2 = { nome: "Gabriel" }; // "idade?" = deixa o propiedade idade como opcional
console.log(pessaoObj2);
// Validando argumento opcional:
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        console.log("ola" + " " + firstName + " " + lastName);
    }
    else {
        console.log("ola " + firstName);
    }
}
advancedGreeting("Gabriel", "Pereira");
advancedGreeting("Gabriel");
// Union Type:
let dado = 2;
console.log(typeof dado);
dado = "dois";
console.log(typeof dado);
// Avançando em unnion types
function showUserRole(role) {
    if (typeof role == "boolean") {
        return "Usuario não aprovado";
    }
    return `A função do usuario é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("admin"));
function showId(id) {
    console.log(`O id é ${id}`);
}
showId(100);
showId("2232");
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 100,
    y: 234,
    z: 432
};
showCoords(coordObj);
const somePerson = { name: "Matheus", age: 23 };
console.log(somePerson);
// type personType = {
//     age: string
// }
// Não é possivel fazer a modificação do type apenas no Intarface
// Literal Types:
let test;
function showDirection(direction) {
    console.log("a direção é " + direction);
}
showDirection("center");
// showDirection("top")
// Non-null Assertion Operator
const p = document.querySelector("#some-p");
console.log(p.innerHTML);
// Bigint
let n;
n = 1000n;
console.log(n);
// Symbol:
let symbolA = Symbol("a");
let symbolB = Symbol("a");
