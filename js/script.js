// esta es la forma de comentar una sola línea

/* esta es la forma de comentar en dos lineas
ves? son dos lineas o mas */

//VARIABLES: STRING, NUMBER, BOOLEAN. ---------------------------------------------

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


// Operador de comparación lógica. 
// en el ejemplo de abajo se puede ir resolviendo tipo ecuación para llegar siempre a true or false.

/* let num1 = 12;
let num2 = 24;
let num3 = 25;
let num4 = 92;
let num5 = 91;

let op = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3);

document.write(op) */

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

// FUNCIONES CON NOMBRE, ANONIMAS Y FLECHA. -------------------------------------------

// Función con nombre

/* function saludar() {
    document.write('Hola, Mundo!');
}

saludar(); 

function sumar(){
    let num = 1+2;
    document.write(num);
}

sumar(); 

// Función con nombre y parámetro (muy básica). 

/* let nombre = prompt('Ingresá tu nombre completo')

function saludarConNombre(nombre){
    alert('Buenos días ' + nombre);
}

saludarConNombre(nombre); */

/* function sumar(numA, numB) {
    let resultado = numA + numB;
    document.write(resultado + '\n');
}

sumar(3000, 4500);
sumar(300, 550);

let unNum = parseInt(prompt('primer número: '));
let otroNum = parseInt(prompt('primer número: '));

sumar(unNum, otroNum); */

//aca lo complejisamos para una calculadora

/* function calcular(numA, signo, numB) {
    let resultado = 0;
    switch (signo) {
        case '+':
            resultado = numA + numB;
            break;

        case '-':
            resultado = numA - numB;
            break;

        case '*':
            resultado = numA * numB;
            break;

        case '/':
            resultado = numA / numB;
            break;

        default:
            break;
    }
    console.log(resultado);
}

calcular(10, '+', 20);
calcular(10, '-', 5);
calcular(10, '*', 3);
calcular(10, '/', 2); */
/* 
function sumar(numA, numB) {
    let suma = numA + numB;
    return suma;
}

function mostrarMensaje(mensaje){
    console.log(mensaje);
}

mostrarMensaje(sumar(3, 5));
 */


/* en el ejemplo de arriba, al utilizar el return nos devuelve el valor de la variable y en la funcion mostrarMensaje solo mostramos lo que le pasemos por el parámetro. A la hora de llamar a las funciones, ponemos la funcion sumar dentro del parámetro de la funcion mostrarMensaje ya que el valor de la variable muere dentro de la otra funcion pero la devuelve con el return. El return solo devuelve el resultado y termina con la operación. Si se escribe algo luego de un return, no se ejecuta*/

// Función anónimas y flecha

/* const suma = function (a, b) {
    return a + b
}
const resta = function (a, b) {
    return a - b
}

document.write(suma(10, 15));
document.write(resta(15, 5)); */

//en el siguiente ejemplo hago un cálculo utilizando los parámetros.
// la función flecha de una sola línea ya tiene un return implicito.  

/* const suma = (a, b) => a + b
const resta = (a, b) => a - b
const iva = x => x * 0.21

let precioProducto = 500;
let descuento = 50;

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
console.log(nuevoPrecio);

console.log(suma(10, 20));
console.log(resta(30, 10)); */

// Ejercicio para hacer un programa de prueba utilizando lo aprendido hasta el momento (sin funciones).

/* let dineroRoberto = parseFloat(prompt('Hola, Roberto, ¿Cuánto dinero tienes?:'));

if (dineroRoberto > 0.6 && dineroRoberto <1){
    alert('Comprate el helado de palito de agua');
} else if(dineroRoberto >= 1 && dineroRoberto < 1.6){
    alert('Comprate el helado de crema');
} else if(dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    alert('Comprate el heladix');
} else if(dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    alert('Comprate el heladovich');
} else if(dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    alert('Comprate el helardo');
} else if(dineroRoberto >= 2.9){
    alert('Comprate el helado con confites o el 1/4 de Kilo');
} else {
    alert('Lo siento, no podes comprarte nada. Volá de acá.')
}


let dineroPedro = parseFloat(prompt('Hola, Pedro, ingresá tu dinero disponible:'));

if (dineroPedro > 0.6 && dineroPedro <1){
    alert('Comprate el helado de palito de agua');
} else if(dineroPedro >= 1 && dineroPedro < 1.6){
    alert('Comprate el helado de crema');
} else if(dineroPedro >= 1.6 && dineroPedro < 1.7){
    alert('Comprate el heladix');
} else if(dineroPedro >= 1.7 && dineroPedro < 1.8){
    alert('Comprate el heladovich');
} else if(dineroPedro >= 1.8 && dineroPedro < 2.9){
    alert('Comprate el helardo');
} else if(dineroPedro >= 2.9){
    alert('Comprate el helado con confites o el 1/4 de Kilo');
} else {
    alert('Lo siento, no podes comprarte nada. Volá de acá.')
}

let dineroCofla = parseFloat(prompt('Hola, Cofla, ingresá tu dinero disponible:'));

if (dineroCofla > 0.6 && dineroCofla <1){
    alert('Comprate el helado de palito de agua');
    alert('Y te sobran: ' + (dineroCofla - 0.6) + ' USD');
} else if(dineroCofla >= 1 && dineroCofla < 1.6){
    alert('Comprate el helado de crema');
    alert('Y te sobran: ' + (dineroCofla - 1) + ' USD');
} else if(dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert('Comprate el heladix');
    alert('Y te sobran: ' + (dineroCofla - 1.6) + ' USD');
} else if(dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert('Comprate el heladovich');
    alert('Y te sobran: ' + (dineroCofla - 1.7) + ' USD');
} else if(dineroCofla >= 1.8 && dineroCofla <b 2.9){
    alert('Comprate el helardo');
    alert('Y te sobran: ' + (dineroCofla - 1.8) + ' USD');
} else if(dineroCofla >= 2.9){
    alert('Comprate el helado con confites o el 1/4 de Kilo');
    alert('Y te sobran: ' + (dineroCofla - 2.9) + ' USD');
} else {
    alert('Lo siento, no podes comprarte nada. Volá de acá.')
}
 */

//ARRAYS COMUNES Y ASOCIATIVOS -------------------------------------------------

/*let auto = ["blanco", "Onix ltz", "AA442NP", "Chevrolet", 5, true];

//document.write(auto[5])

let auto2 = {
    color: 'blanco',
    modelo: 'Onix ltz',
    patente: 'AA442NP',
    marca: 'Chevrolet',
    puertas: 5,
    seguro: true
}

//document.write(auto2['seguro'])

let color = auto2['color'];
let modelo = auto2['modelo'];
let patente = auto2['patente'];
let marca = auto2['marca'];
let puertas = auto2['puertas'];
let seguro = auto2['seguro'];

let frase = `El color del auto es: <b> ${color}, 
</b> <br> El modelo es: <b> ${modelo}, </b> <br> La patente es: <b> ${patente}, </b> <br> La marca es: <b> ${marca}, </b> <br> El modelo tiene: <b> ${puertas} </b> puertas, <br> El seguro está activado: <b> ${seguro}</b>.` */

//document.write(frase);

// For in y For of. ---------------------------------------------------------------------------------

/* let auto = ["blanco", "Onix ltz", "AA442NP", "Chevrolet", 5, true];

for (let caracteristica in auto){
    document.write(caracteristica + "<br>");
}

document.write("<br>");

for (let caracteristica in auto){
    document.write(auto[caracteristica] + "<br>");
}

document.write("<br>");

for (let caracteristica of auto){
    document.write(caracteristica + "<br>");
}
 */

//de esta forma, con los bucles, accedemos a la información por ejemplo en este array y lo recorremos. Reniendo en cuenta que con el For in llamamos a la posición(indice) y con el for of al elemento en si. En el caso del for in, segundo ejemplo, podemos acceder al elemento llamando al array con los corchetes. Tener en cuenta que son variables que viven y mueren dentro del bloque. 

//También podemos recorrer un con un bucle dentro de otro bucle, eso cuando tenemos arrays dentro de un array, como en el caso que sigue: 

let array1 = ['Octavio', 'Franco', 'Lucía', 'Martin'];
let array2 = ['Fabricio', 'Delia', 'Helena', 'Yoko', array1, 'Kevin'];

forBusqueda:
for (let array in array2){
    if (array == 4){
        for (let array of array1){
            //break forBusqueda;
            //continue forBusqueda;
            document.write(array + "<br>");
        
        } 
    } else {
        document.write(array2[array] + "<br>");
    }
}

// tan simple como eso XD
//En este ejemplo usé la sentencia break junto con el nombre para que termine el bucle, puedo probarlo con o sin, por esa está comentado. Al ponerle nombre al bucle puedo acceder a él desde cualquier parte. También funciona con la sentencia continue. Esto es la sentencia label, es ponerle un nombre al bucle. 

