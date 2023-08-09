// esta es la forma de comentar una sola línea

/* esta es la forma de comentar en dos lineas
ves? son dos lineas o mas */

/* let userName = "Lautaro";
const userLastName = "Sabino";
let age = 34;
let value = true;
let quote = 'esta es una cadena de caracteres'

let numA = 25;
let numB = 35;
let resultado = numA % numB;

let userNameComplete = userName + " " + userLastName; */

/* let userName = prompt('ingresá tu nombre:');
let userLastName = prompt('ingrese su apellido:');
let userAge = parseInt(prompt('ingresa tu edad:'));

let userAgeNextYear = userAge + 1;
console.log(userName);
console.log(userLastName);
console.log('La edad del usuario dentro de un año será, mdda: ' + userAgeNextYear); */

let numero = parseInt(prompt('Ingresá un número y te digo si es par o impar'));
let resultado;

if(numero%2==0){
    resultado = "par"
}else{
    resultado = "Impar"
}

alert(resultado)