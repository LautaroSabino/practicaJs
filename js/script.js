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
// la función flecha de una sola línea ya tiene un return implicito y no hace falta ponerle parèntesis al parametro.  

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

//En este caso hacemos un programa ficticio para mostrarle a tres clientes las opciones que pueden comprarse dependiendo del dinero ingresado, y luego para mostrarle el vuelto a uno de ellos que lo solicitò. 

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

/*const arrayVacío = [];
const carrito = [];

const numerosUnaCifra = [1,2,3,4,5,6,7];

let auto = ["blanco", "Onix ltz", "AA442NP", "Chevrolet", 5, true];

document.write(auto[5] + `<br>`)
console.log(auto);
console.log(auto[2]);

let auto2 = {
    color: 'blanco',
    modelo: 'Onix ltz',
    patente: 'AA442NP',
    marca: 'Chevrolet',
    puertas: 5,
    seguro: true
}

document.write(auto2['marca'] + `<br>`)

let color = auto2['color'];
let modelo = auto2['modelo'];
let patente = auto2['patente'];
let marca = auto2['marca'];
let puertas = auto2['puertas'];
let seguro = auto2['seguro'];

let frase = `El color del auto es: <b> ${color}, 
</b> <br> El modelo es: <b> ${modelo}, </b> <br> La patente es: <b> ${patente}, </b> <br> La marca es: <b> ${marca}, </b> <br> El modelo tiene: <b> ${puertas} </b> puertas, <br> El seguro está activado: <b> ${seguro}</b>.` 

document.write(frase); */

// For, For in y For of. ---------------------------------------------------------------------------------

/* let auto = ["blanco", "Onix ltz", "AA442NP", "Chevrolet", 5, true];

console.log(auto.length);

for (let i = 0; i < auto.length; i++) {
    document.write(`La caracteristica numero ${i+1} del auto es ${auto[i]} y su indice en el array es ${i} ` + `<br>`);
}

document.write(`<br>`);

const numeros = [10,20,30,40,50,60,70];
for (let i = 0; i < numeros.length; i++) {
    const resultado = numeros[i]*100;
    document.write(`el resultado es ${resultado} <br>`)
}

document.write(`<br>`);

for (let caracteristica in auto){
    document.write(caracteristica + `<br>`);
}

document.write(`<br>`);

for (let caracteristica in auto){
    document.write(auto[caracteristica] + `<br>`);
}

document.write("<br>");

for (let caracteristica of auto){
    document.write(caracteristica + `<br>`);
}

const mixto = ['Pepito', 37, false, {apellido: 'perez', DNI: 34345476}, true];

for (let i = 0; i < mixto.length; i++) {
    console.log(mixto[i]);
    
} */

//de esta forma, con los bucles, accedemos a la información por ejemplo en este array y lo recorremos. Teniendo en cuenta que con el For in llamamos a la posición(indice) y con el for of al elemento en si. En el caso del for in, segundo ejemplo, podemos acceder al elemento llamando al array con los corchetes. Tener en cuenta que son variables que viven y mueren dentro del bloque. 

//También podemos recorrer un Array con un bucle dentro de otro bucle, eso cuando tenemos arrays dentro de un array, como en el caso que sigue: 

/* let array1 = ['Octavio', 'Franco', 'Lucía', 'Martin'];
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
} */

// tan simple como eso XD
//En este ejemplo usé la sentencia break junto con el nombre para que termine el bucle, puedo probarlo con o sin, por esa está comentado. Al ponerle nombre al bucle puedo acceder a él desde cualquier parte. También funciona con la sentencia continue. Esto es la sentencia label, es ponerle un nombre al bucle. 

// Ejercicio para hacer un programa de prueba utilizando lo aprendido hasta el momento (con funciones).

//Metodos y propiedades de los arrays----------------------------------------

//LENGTH sirve para recorrer e iterar el indice del array, y tmabien para limitarlo dentro de un for como en los ejemplos anteriores. 

/* const array1 = ['Mario', 1, false, 34, 'José'];

array1.length
console.log(array1);
 */

//PUSH, sirve para agregar un elemento a un array. Se agregan a lo ùltimo del array. 

/* const array1 = ['Mario', 1, false, 34, 'José'];

console.log(array1);
array1.push(true, 44, 'Sonia')
console.log(array1);
 */

//unshift, sirve para agregar un elemento a un array, pero al principio. ¡Por que? porque puedo XD

/* const array1 = ['Mario', 1, false, 34, 'José'];

console.log(array1);
array1.unshift(true, 44, 'Sonia')
console.log(array1); */

//Si queremos eliminar el primer elemento del array utilizamos shift(), va al indice cero. Si queremos eliminar el ùltimo elemento, pop(). No hace falta pasarle un paràmetro. 

/* const array1 = ['Mario', 1, false, 34, 'José'];

console.log(array1);
array1.shift()
console.log(array1);
array1.pop()
console.log(array1); */

//splice() nos permite eliminar uno o varios elementos del array en cualquier posiciòn. Funciona con dos parametros: el primero es el indice donde se ubica el metodo para trabajar, el segundo es la cantidad de elementos a eliminar desde esa posiciòn.  

/* const array1 = ['Mario', 1, false, 34, 'José'];

console.log(array1);
array1.splice(1, 2)
console.log(array1); */

//join() nos permite hacer un string con todos los elementos del Array y nos deja elegir el caracter que va a separar. Me devuelve un string y yo lo puedo guardar en otro lado, por ejemplo, para imprimir.

/* const array1 = ['Mario', 1, false, 34, 'José'];

console.log(array1);
let imprimible = array1.join('-')
console.log(imprimible); */

//concat() nos permite reunir dos array en uno. Primero quedan los elementos al que se le aplica el método.  

/* const array1 = ['Mario', 1, false, 34, 'José'];
const array2 = ['Lucía', 'Martín', 'Octavio', 'Franco']

console.log(array1);
console.log(array2);
const nombres = array1.concat(array2)
console.log(nombres); */

//slice() nos permite copiar una parte de un array para agregarlo a otro. Necesita dos parámetros, desde donde hasta donde (teniendo en cuenta que no incluye el indice que se indica hasta donde).  

/* const array = ['Lucía', 'Martín', 'Octavio', 'Franco']

console.log(array);
const nombresMasculinos = array.slice(1, 4)
console.log(nombresMasculinos);
console.log(array); // el array original no se modifica.
//si le pongo un solo parámetro, me copia todo el resto.  */

//indexof() me devuelve el indice del elemento que selecciono. 

/* const array = ['Lucía', 'Martín', 'Octavio', 'Franco']

console.log(array.indexOf('Martín'));
console.log(array.indexOf('Franco'));
//si se coloca algo que no existe, te pone -1. */

//includes() me devuelve true o false dependiendo de si el elemento por el que pregunto, está en el array o no. 

/* const array = ['Lucía', 'Martín', 'Octavio', 'Franco']

console.log(array.includes('Martín'));
console.log(array.includes('Jensen')); */

//EJERCICIO. En este caso hacemos un programa ficticio para validar la edad de ingreso a una fiesta con la condiciòn del que primero que ingresa post 2AM no paga entrada. 

/*let free = false;

const validarCliente = (time)=>{
    let edad = parseInt(prompt('Ingresà tu edad:'));
    if (edad >= 18){
        if (time > 2 && time < 7 && !free){
            alert('Podes pasar gratis por ser el primero.');
            free = true;
        } else{
            alert(`Son las ${time} hs. Podes pasar, pero debes abonar entrada.`);
        }
        
    } else {
        alert('Lo siento, usted es menor de edad, no puede pasar.');
    }
}

validarCliente(11);
validarCliente(12);
validarCliente(1);
validarCliente(2);
validarCliente(3);
validarCliente(5);
validarCliente(6.30); */

//En este caso hacemos un programa para incoporar alumnos a un sistema de asistencias y luego mostrar cuales estàn aprobados y desaprobados. 

/* let cantidad = parseInt(prompt('Ingrese cantidad de alumnos:'));
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt('Ingrese nombre de alumno' + (i + 1)), 0]
}

const tomarAsistencia = (nombre, p) => {
    let presencia = prompt(nombre);
    if (presencia == 'p' || presencia == 'P') {
        alumnosTotales[p][1]++;
    }
}

for (i = 0; i < 30; i++) {
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}: <br>
    /__________________ presentes: ${alumnosTotales[alumno][1]}  <br>
    ____________________ ausentes: ${30 - alumnosTotales[alumno][1]} 
    `;

    if (30 - alumnosTotales[alumno][1] > 18){
        resultado+= `Reprobado por insistencia <br>`;
    } else {
        resultado+= `<br>`;
    }

    document.write(resultado);
} */

//OBJETOS ---------------------------------------------------------------------

/* let persona = {
    nombre: 'Lautaro',
    apellido: 'Sabino',
    edad: 34,
    altura: 1.91,
    signo: 'géminis',
    genero: 'masculino'
}

document.write(persona.nombre + `<br>`);
document.write(persona.apellido + `<br>`);
document.write(persona.edad + `<br>`);
document.write(persona.altura + `<br>`);
document.write(persona.signo + `<br>`);
document.write(persona.genero + `<br>`);

const auto1 = {
    marca: 'Chevrolet',
    modelo: 'Onix LTZ',
    anio: 2016,
    color: 'blanco',
    puertas: 5,
    seguro: true,

    tocarbocina: function(){document.write('piiiiiiiiii')}

    }


console.log(auto1['marca']);
console.log(auto1['anio']);
console.log(auto1['puertas']);
console.log(auto1['seguro']);

console.log(auto1);

auto1.color = 'negro';

console.log(auto1.color);

auto1.tocarbocina(); */

// Función constructora de objetos (se pone en mayuscula) -------------

/* function Auto (marca, modelo, anio, patente, color, puertas, seguro){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.patente = patente;
    this.color = color;
    this.puertas = puertas;
    this.seguro = seguro;

    this.hablar = function(){document.write('Hola! soy un/una ' + this.modelo)};
}

const auto2 = new Auto('Fiat', 'Toro', 'AA442NP', 2020, 'blanco', 5, true );

auto2.hablar();
console.log(auto2);

console.log();("color" in auto2)

for (const propiedad in auto2){
    document.write(auto2[propiedad] + `<br>`);
} */

// clase constructora ---------------------------------------------

/* class Producto {

    constructor(nombre, precio, categoria) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.categoria = categoria;
        this.vendido = false;
    }

    sumarIva() {
        this.precio = this.precio * 1.21
    }

    vender() {
        this.vendido = true;
    }
}

const producto1 = new Producto('manzana', 250, 'almacen');
const producto2 = new Producto('caramelos', 80, 'golosinas');

producto1.sumarIva();

document.write(producto1.precio + `<br>`)

document.write(producto1.vendido + `<br>`)

producto1.vender();

document.write(producto1.vendido + `<br>`)
document.write(`el precio de ${producto1.nombre} es ${producto1.precio}` + `<br>`) */

// ahora trabajamos con class y extends. Fijarse como con una nueva clase extendida, el objeto puede heredar lo de otra clase más nuevos atributos. --------------

/* class Perfume extends Producto{
    constructor(nombre, precio, genero){
        super(nombre, precio);
        this.genero = genero;
    }
}

const perfume1 = new Perfume('Very Irrestible', 14000, 'masculino');

perfume1.sumarIva()
document.write(perfume1.precio + `<br>`)
document.write(`el precio de ${perfume1.nombre} es ${perfume1.precio} y es de género ${perfume1.genero} ` + `<br>`)


 */

// arrays con objetos. -------------------------------------

/* let librosHarryPotter = [{
    id: 1,
    titulo: 'Harry Potter y la piedra filosofal',
    fecha: 1997
}, {
    id: 2,
    titulo: 'Harry Potter y la cámara secreta',
    fecha: 1998
}, {
    id: 3,
    titulo: 'Harry Potter y el prisionero de Azkaban',
    fecha: 1999
}, {
    id: 4,
    titulo: 'Harry Potter y el cáliz de fuego',
    fecha: 2000
}, {
    id: 5,
    titulo: 'Harry Potter y la orden del fenix',
    fecha: 2001
}, {
    id: 6,
    titulo: 'Harry Potter y el misterio del principe',
    fecha: 2002
}, {
    id: 7,
    titulo: 'Harry Potter y las reliquias de la muerte',
    fecha: 2003
}];



for (const libro of librosHarryPotter) {
    console.log(libro.titulo, libro.fecha); 
    if (libro.fecha == 2001){
        break;
    }   
} */

// en este ejemplo recorro el array, pido que me imprima por console.log los libros dentro del array y también metí un condicional para que termine la busqueda, por ejemplo, en 2001. 

//EJERCICIO aplicando objetos y extends. Programa para identificar una compra entre varios teléfonos. 

/* class Celular {
    constructor(color, peso, tamaño, resoluCamara, memoRam) {
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resoluCamara = resoluCamara;
        this.memoRam = memoRam;
        this.encendido = false;
    }

    botonEncendido() {
        if (this.encendido == false) {
            alert('El celular ha encendido!');
            this.encendido = true;
        } else {
            alert('celular apagado');
            this.encendido = false;
        }
    }

    reiniciar() {
        if (this.encendido == true) {
            alert('El celular se ha reiniceado!');
        } else {
            alert('el celular está apagado');
        }
    }

    tomarFoto() {
        alert(`se tomó una foto con una resolución de: ${this.resoluCamara}`)
    }

    grabarVideo() {
        alert(`se está grabando un video con una resolución ${this.resoluCamara}`)
    }

    infoMobile() {
        return `
        color: <b> ${this.color} </b><br>
        Peso: <b> ${this.peso} </b><br>
        Tamaño: <b> ${this.tamaño} </b><br>
        Memoria RAM: <b> ${this.memoRam} </b><br>
        Resolución de cámara: <b> ${this.resoluCamara} </b><br>
        `;
    }

}

class CeluAltaGama extends Celular{
    constructor(color, peso, tamaño, resoluCamara, memoRam, rdce){
        super(color, peso, tamaño, resoluCamara, memoRam);
        this.resoluCamaraExtra = rdce;
    }

    grabarLento(){
        alert('Estás grabando en cámara lenta');
    }

    reconoFacial(){
        alert('Vamos a comenzar un reconocimiento facial');
    }

    infoAltaGama(){
        return this.infoMobile() + `Resolución cámara trasera es de ${this.resoluCamaraExtra} <br>`
    }
}

const celular1 = new Celular('rojo', '150g', '5 pulg', 'Full HD', '2GB');
const celular2 = new Celular('blanco', '190g', '4.8 pulg', 'Full HD', '1.8GB');
const celular3 = new Celular('negro', '140g', '4 pulg', 'Full HD', '2GB');
const celularAltaGama1 = new CeluAltaGama('plateado', '140g', '4 pulg', 'full HD', '3GB', '4K');
const celularAltaGama2 = new CeluAltaGama('dorado', '140g', '4 pulg', 'Full HD', '3GB', '4K');

celular1.botonEncendido();
celular1.grabarVideo();
celular1.tomarFoto();
celular1.reiniciar();
celular1.botonEncendido();

document.write(`
${celularAltaGama1.infoAltaGama()} <br>
${celularAltaGama2.infoAltaGama()} <br>
`)

celularAltaGama1.grabarLento();
celularAltaGama2.reconoFacial(); */

// FUNCIONES DE ORDEN SUPERIOR ----------------------------------------------
// Son funciones que pasan otra función como parámetro (kill me). 

//En el primer ejemplo la funcion porCadaUno llama a una función escrita por fuera. 

/* function porCadaUno (arr, fn){
    for (element of arr){
        fn(element);
    }
}

function cuadrado(num){
    let resultado = num*num;
    document.write(resultado + `<br>`);
}

function cubo(num){
    let resultado = num*num*num;
    document.write(resultado + `<br>`);
}

const numeros = [1,2,3,4,5,6];

porCadaUno(numeros, cuadrado);
document.write(`<br>`)
porCadaUno(numeros, cubo);

// En el segundo ejemplo, la función flecha la escribimos directamente dentro de la funcion porCadaUno. 

const duplicado = [];

porCadaUno(numeros, (element)=>{
    duplicado.push(element*2)
})

document.write(duplicado + `<br>`)
console.log(duplicado); */

//METODOS DE BUSCA Y TRANSFORMACION (son funciones de orden superior) --------------------------------------

// forEach() itera el array y por cada elemento cumple lo que hayamos pasado por parámetro, como en el jemplo anterior de porCadaUno. 

/* const numeros = [1, 2, 3, 4, 5, 6];

numeros.forEach((num) => {
    document.write(num + `<br>`);
})

let librosHarryPotter = [{
    id: 1,
    titulo: 'Harry Potter y la piedra filosofal',
    fecha: 1997
}, {
    id: 2,
    titulo: 'Harry Potter y la cámara secreta',
    fecha: 1998
}, {
    id: 3,
    titulo: 'Harry Potter y el prisionero de Azkaban',
    fecha: 1999
}, {
    id: 4,
    titulo: 'Harry Potter y el cáliz de fuego',
    fecha: 2000
}, {
    id: 5,
    titulo: 'Harry Potter y la orden del fenix',
    fecha: 2001
}, {
    id: 6,
    titulo: 'Harry Potter y el misterio del principe',
    fecha: 2002
}, {
    id: 7,
    titulo: 'Harry Potter y las reliquias de la muerte',
    fecha: 2003
}];

librosHarryPotter.forEach((num) => {
    document.write(num.titulo + num.fecha +`<br>`);
}) */

//Find() recibe una función flecha comparadora. Devuelve el primero que encuentra con un return implicito. Sino encuentra, devuelve undefined, no false.

/* const cursos = [{
    nombre: 'javaScript',
    precio: 15000
}, {
    nombre: 'ReactJs',
    precio: 20000
}, {
    nombre: 'DesarrolloWeb',
    precio: 15000
}, {
    nombre: 'TestingQA',
    precio: 18000
}];

const encontrado = cursos.find((curso)=> curso.precio > 16000);
console.log(encontrado); */

//Filter() recibe una función flecha comparadora y retorna un nuevo array con los elementos que cumplan esa condición. >Sino encuentra, devuelve un array vacío. 

/* const cursos = [{
    nombre: 'javaScript',
    precio: 15000
}, {
    nombre: 'ReactJs',
    precio: 20000
}, {
    nombre: 'DesarrolloWeb',
    precio: 15000
}, {
    nombre: 'TestingQA',
    precio: 18000
}];

const filtrado = cursos.filter((curso)=> curso.precio > 16000);
console.log(filtrado);

const inFiltrado = cursos.filter((curso)=> curso.precio < 10000);
console.log(inFiltrado); */

// some() funciona igual que find() solo que devuelve true o false

/* const cursos = [{
    nombre: 'javaScript',
    precio: 15000
}, {
    nombre: 'ReactJs',
    precio: 20000
}, {
    nombre: 'DesarrolloWeb',
    precio: 15000
}, {
    nombre: 'TestingQA',
    precio: 18000
}];

const hayAlguno = cursos.some((curso)=> curso.nombre == 'javaScript');
console.log(hayAlguno);

const noHayAlguno = cursos.some((curso)=> curso.nombre == 'Python');
console.log(noHayAlguno); */

// al devolver un boolean, podemos tomarlo para algo que sigue, ya que hace un break. 

// map() crea un nuevo array con todos los elementos del original, pero aplicandole la operación que hayamos pasado en el parametro. 

/* const cursos = [{
    nombre: 'javaScript',
    precio: 15000
}, {
    nombre: 'ReactJs',
    precio: 20000
}, {
    nombre: 'DesarrolloWeb',
    precio: 15000
}, {
    nombre: 'TestingQA',
    precio: 18000
}];

const todosLosNombres = cursos.map((curso)=> curso.nombre);
console.log(todosLosNombres);

const preciosConIVA = cursos.map((curso)=> curso.precio*1.21);
console.log(preciosConIVA);
//acá le sumamos el IVA a todos

const precioBeca = cursos.map((curso)=>{
    return{
        nombre: curso.nombre,
        precio: curso.precio*.30
    }
})
//aca le aplicamos un descuento del 70 %
console.log(precioBeca); */

// reduce() nos permite obtener un unico valor tras iterar el array. Funciona como un meotdo que resume el array a un unico valor de retorno. Lo podemos usar cuando queremos una suma de alguna propiedad de los elementos, cuando deseamos obtener algún resultado general de todo el array. Este método recibe dos parámetros. El primer parámetro es la función que itera y acumula, el segundo parámetro es el valor inicial del acumulador. 

/* const cursos = [{
    nombre: 'javaScript',
    precio: 15000
}, {
    nombre: 'ReactJs',
    precio: 20000
}, {
    nombre: 'DesarrolloWeb',
    precio: 15000
}, {
    nombre: 'TestingQA',
    precio: 18000
}];

const total = cursos.reduce((acumulador, num)=> acumulador + num.precio, 0);
console.log(total); */
// esto es utilizado, por ejemplo, para calcular la compra total en un carrito, mddaa

// sort() METODO DESTRUCTIVO, nos permite reordenar un array según el criterio que definamos. Recibe una función de comparación por parámetro que, a su vez, recibe dos elementos del array. La función retorna un valor numérico (1, -1, 0) que indica qué elemento se posiciona antes o despues. Este método destruye nuestro array, hace MALABARES y nos devuelve un nuevo array. NO SE USA COMO FILTRO. 

/* const numeros = [20, 45, 80, 1, 0, 34, 76, 22, 98, 21]
console.log(numeros);

numeros.sort((a,b)=> a - b);
console.log(numeros);
//forma ascendente

numeros.sort((a,b)=> b - a);
console.log(numeros); */
//forma descendente

//para ordenar strings

/* const cursos = [{
    nombre: 'JavaScript',
    precio: 15000
}, {
    nombre: 'ReactJs',
    precio: 20000
}, {
    nombre: 'DesarrolloWeb',
    precio: 15000
}, {
    nombre: 'TestingQA',
    precio: 18000
}];


cursos.sort((a,b)=>{
    if (a.nombre > b.nombre){
        return 1;
    }

    if (a.nombre < b.nombre){
        return -1;
    } 

    return 0;
})

console.log(cursos); */

// OBJETO Math ------------------------------------------------------------------------------------

/* console.log(Math.E); //constante Euler
console.log(Math.PI); // numero PI
console.log(Math.sqrt(9)); // raíz cuadrada

let azar = Math.random()
let azar1a10 = Math.random() * 10

console.log(azar1a10);
console.log(Math.ceil(azar1a10)); //redondea para arriba
console.log(Math.floor(azar1a10)); // redondea para abajo
console.log(Math.round(azar1a10)); // se fija cual es el más cerca
//esto es para un dado, por ejemplo, genera numeros al azar y los redondea. 

//con todo esto, hacemos una generala

const dados = [];

for (i = 0; i < 5; i++) {
    let dado = Math.ceil(Math.random()*6)
    dados.push(dado);
}

console.log(dados); */

// clase DATE -----------------------------------------------------------------------------------

let fechaActual = new Date();
console.log(fechaActual);

//tener en cuenta que el mes de enero es el 0, no el 1- 
let fechaSimple = new Date(2023, 7, 30);
console.log(fechaSimple);

let ultimoSegundoDelAnio = new Date(2023, 11, 31, 23, 59, 59);
console.log(ultimoSegundoDelAnio);

let casiNavidad = new Date(('December 2023, 24 23:59:59 '));
console.log(casiNavidad);
console.log(casiNavidad.getFullYear()); //esto no pasa el año a un valor numerico. 
console.log(casiNavidad.getMonth() +1);
console.log(casiNavidad.getDay());
console.log(casiNavidad.getDate());
console.log(casiNavidad.toString());