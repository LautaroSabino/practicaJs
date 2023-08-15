// esta es la forma de comentar una sola línea

/* esta es la forma de comentar en dos lineas
ves? son dos lineas o mas */

//VARIABLES STRING, NUMBER, BOOLEAN. ---------------------------------------------

/* let userName = "Lautaro";
const userLastName = "Sabino";
let age = 34;
let value = true;
let quote = 'esta es una cadena de caracteres'


// OPERACIONES CON VARIABLES. ---------------------------------------------------

let numA = 25;
let numB = 35;
let resultado = numA % numB;

// CONCATENACIÓN. ----------------------------------------------------------------

let userNameComplete = userName + " " + userLastName; */

/* let userName = prompt('ingresá tu nombre:');
let userLastName = prompt('ingrese su apellido:');
let userAge = parseInt(prompt('ingresa tu edad:'));

let userAgeNextYear = userAge + 1;
console.log(userName);
console.log(userLastName);
console.log('La edad del usuario dentro de un año será, mdda: ' + userAgeNextYear); */

//ESTRUCTURA IF, IF ELSE. -----------------------------------------------------------

/* let numero = parseInt(prompt('Ingresá un número y te digo si es par o impar'));
let resultado;

if(numero%2==0){
    resultado = "par"
}else{
    resultado = "Impar"
}

alert(resultado); */


/* let edad = 17.5;
if(edad>=18){
    console.log('Usted puede pasar, pues viejo');
} else{
    console.log('usted no puede pasar, vuelva a su casa con sus padres XD');
} */

/* let numeroA = 15;
let numeroB = 35;
let boolean = (numeroA > numeroB);

if(boolean){
    console.log('la variable booleana es true');
} else{
    console.log('la variable booleana es false');
} */

/* let userAge = parseInt(prompt('Ingrese su edad:'));

if(userAge > 18){
    alert('Usted puede pasar');
} else if(userAge > 13){
    alert('Puede pasar, pero acompañado por un adulto');
} else {
    alert('Tomate el palo, rancio');
} */

// BUCLES E ITERACIONES ---------------------------------------------------------

/* for (let i = 1; i <= 3; i++) {

    document.write('Usted es el jefe de los minisuper?' +i);
}

document.write('Gracias, vuelvan pronto');

for(let i = 0; i <=10; i++){
    
    document.write(i + 'x5 es igual a: ' + i*5);

} */

/* for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        break;
    }
    console.log('Esta vuelta vale: ' + i);
}

for (let i= 0; i<=12;i++){
    if (i==4){
        continue;
    }
    alert(i);
} */

/* let repetir = true;

while (repetir) {
    console.log('Soy un bucle while que hará explotar tu navegador');
    repetir = false;
}

let edad = parseInt(prompt('Ingresá tu edad, capo: '));

while(edad < 13){
    alert('Usted no puede pasar, a llorar al campito');
    edad = parseInt(prompt('Ingresá tu edad, capo: '));
}
 */

/* let edad;

do{
    edad = parseInt(prompt('Ingresá tu edad, capo: '));
}while (edad < 13)
 */

// ESTRUCTURA SWICHT ------------------------------------------------------------

/* let color = prompt('Elija un color primario: ');

switch (color) {
    case 'azul':
        alert('Elegiste el color azul')
        break;

    case 'rojo':
        alert('Elegiste el color rojo')
        break;

    case 'amarillo':
        alert('Elegiste el color amarillo')
        break;    

    default:
        alert('No elegiste un color primario')
        break;
} */

// EJEMPLO DE UN PROGRAMA DE CAJERO AUTOMÁTICO COMBINANDO LO APRENDIDO HASTA EL MOMENTO. ------------------------------------------------------------------------

/* let saldo = 1500;
let opcion = prompt('Ingresá tu opción:\n 1- Consultar saldo. \n 2- Hacer retiro de dinero. \n 3- Hacer un Depósito. \n 4- Presione x para finalizar');

while (opcion != 'x') {
    switch (opcion) {
        case '1':
            alert('Tu saldo es: $' + saldo);
            break;

        case '2':
            let retiro = parseFloat(prompt('Ingrese la cantidad a retirar'));
            if (saldo >= retiro) {
                saldo = saldo - retiro;
                alert('Listo! Tu nuevo saldo es de: $' + saldo);
            } else {
                alert('Su saldo es insuficiente para esta transacción');
            }
            break;

        case '3':
            let deposito = parseFloat(prompt('Ingrese la cantidad a depositar'));
            saldo = saldo + deposito;
            alert('Listo! tu nuevo saldo es de: $' + saldo);
            break;

        default:
            alert('elegiste una opción inválida');
            break;
    }
    opcion = prompt('Ingresá tu opción:\n 1- Consultar saldo. \n 2- Hacer retiro de dinero. \n 3- Hacer un Depósito. \n 4- Presione x para finalizar');
} */