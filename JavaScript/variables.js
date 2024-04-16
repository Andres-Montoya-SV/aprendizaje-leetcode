// En este archivo tengo planeado explicar los tipos de variables que existen en JavaScript, y los tipos de datos que pueden almacenar.
// También explicaré cómo declarar variables y cómo asignarles valores.

// Variables
// Una variable es un espacio de memoria que se reserva para almacenar un dato. En JavaScript, las variables pueden almacenar cualquier tipo de dato.
// Para declarar una variable en JavaScript, se utiliza la palabra reservada "var", seguida del nombre de la variable. Por ejemplo:

var nombre;

// En este caso, se ha declarado una variable llamada "nombre". Sin embargo, en este momento la variable no tiene ningún valor asignado, por lo que su valor es "undefined".

// Para asignar un valor a una variable, se utiliza el operador de asignación "=", seguido del valor que se desea asignar. Por ejemplo:

nombre = "Andres";

// En este caso, se ha asignado el valor "Andres" a la variable "nombre". Ahora, la variable "nombre" contiene el valor "Andres".

// También es posible declarar y asignar un valor a una variable en una sola línea. Por ejemplo:

var edad = 25;

// En este caso, se ha declarado una variable llamada "edad" y se le ha asignado el valor 25 en una sola línea.

// Tipos de variables
// En JavaScript, existen varios tipos de variables, que pueden almacenar diferentes tipos de datos, y estos son:
// - Number: variables que almacenan valores numéricos.
// - String: variables que almacenan cadenas de texto.
// - Boolean: variables que almacenan valores booleanos (true o false).
// - Object: variables que almacenan objetos.
// - Array: variables que almacenan arreglos de datos.
// - Function: variables que almacenan funciones.

// A continuación, se muestran ejemplos de cómo declarar y asignar valores a variables de cada uno de estos tipos:

// Number
var edad = 25;

// String
var nombre = "Andres";

// Boolean
var esMayorDeEdad = true;

// Object
var persona = {
    nombre: "Andres",
    edad: 25
};

// Array
var numeros = [1, 2, 3, 4, 5];

// Function
var saludar = function() {
    console.log("Hola!");
};

// Para poder acceder al valor de una variable, basta con utilizar su nombre. Por ejemplo:

console.log(nombre); // Imprime "Andres"

// También es posible modificar el valor de una variable asignándole un nuevo valor. Por ejemplo:

nombre = "Juan";

console.log(nombre); // Imprime "Juan"

// En este caso, se ha modificado el valor de la variable "nombre" de "Andres" a "Juan".

// Es importante tener en cuenta que en JavaScript, las variables son dinámicas, lo que significa que pueden cambiar de tipo en cualquier momento. Por ejemplo:

var numero = 10;

console.log(numero); // Imprime 10

numero = "Diez";

console.log(numero); // Imprime "Diez"

// En este caso, la variable "numero" se ha declarado como un número, pero luego se le ha asignado un valor de tipo cadena de texto. JavaScript permite este tipo de comportamiento, lo que puede ser útil en ciertas situaciones, pero también puede llevar a errores si no se maneja correctamente.

// También es importante tener en cuenta que en JavaScript, las variables son case-sensitive, lo que significa que se distingue entre mayúsculas y minúsculas. Por ejemplo:

var nombre = "Andres";
var Nombre = "Juan";

console.log(nombre); // Imprime "Andres"
console.log(Nombre); // Imprime "Juan"

// En este caso, se han declarado dos variables con nombres similares, pero con una diferencia en la primera letra. JavaScript considera que estas son dos variables diferentes, por lo que es importante tener en cuenta la capitalización al declarar variables.

// También es posible declarar múltiples variables en una sola línea, separándolas por comas. Por ejemplo:

var a = 1, b = 2, c = 3; // a esto se le llama "declaración múltiple"

// En este caso, se han declarado tres variables llamadas "a", "b" y "c", y se les ha asignado un valor en una sola línea.

// También es posible declarar variables sin asignarles un valor. En este caso, la variable tendrá un valor de "undefined". Por ejemplo:

var x;

console.log(x); // Imprime "undefined"

// En este caso, se ha declarado una variable llamada "x", pero no se le ha asignado un valor, por lo que su valor es "undefined".

// También es posible declarar variables sin utilizar la palabra reservada "var". Sin embargo, esto no es recomendable, ya que puede llevar a errores y comportamientos inesperados. Por ejemplo:

y = 10;

console.log(y); // Imprime 10

// En este caso, se ha declarado una variable llamada "y" sin utilizar la palabra reservada "var". JavaScript permite este tipo de comportamiento, pero puede llevar a errores si no se maneja correctamente.

// Ahora vamos a hablar sobre las constantes en JavaScript.

// Constantes
// Una constante es un tipo de variable cuyo valor no puede cambiar una vez que ha sido asignado. En JavaScript, las constantes se declaran utilizando la palabra reservada "const". Por ejemplo:

const PI = 3.1416;

// En este caso, se ha declarado una constante llamada "PI" y se le ha asignado el valor 3.1416. Una vez que se ha asignado un valor a una constante, no es posible cambiarlo. Por ejemplo:

PI = 3.14; // Esto generará un error, ya que no es posible cambiar el valor de una constante.

// Las constantes son útiles cuando se desea asegurar que un valor no cambie durante la ejecución de un programa. Por ejemplo, si se desea utilizar el valor de PI en cálculos matemáticos, es conveniente declararlo como una constante para evitar que su valor cambie accidentalmente.

// También es posible declarar múltiples constantes en una sola línea, separándolas por comas. Por ejemplo:

const A = 1, B = 2, C = 3;

// En este caso, se han declarado tres constantes llamadas "A", "B" y "C", y se les ha asignado un valor en una sola línea.

// Las constantes también son case-sensitive, al igual que las variables. Por ejemplo:

const nombre = "Andres";
const Nombre = "Juan";

console.log(nombre); // Imprime "Andres"
console.log(Nombre); // Imprime "Juan"

// En este caso, se han declarado dos constantes con nombres similares, pero con una diferencia en la primera letra. JavaScript considera que estas son dos constantes diferentes, por lo que es importante tener en cuenta la capitalización al declarar constantes.

// Si recibimos una variable o constante y queremos saber su tipo de dato, podemos utilizar el operador "typeof". Por ejemplo:

console.log(typeof nombre); // Imprime "string"
console.log(typeof edad); // Imprime "number"
console.log(typeof esMayorDeEdad); // Imprime "boolean"
console.log(typeof persona); // Imprime "object"
console.log(typeof numeros); // Imprime "object"
console.log(typeof saludar); // Imprime "function"

// En este caso, se ha utilizado el operador "typeof" para obtener el tipo de dato de las variables y constantes declaradas anteriormente. JavaScript proporciona varios tipos de datos, como "string" para cadenas de texto, "number" para números, "boolean" para valores booleanos, "object" para objetos y arreglos, y "function" para funciones.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de una variable o constante que no ha sido declarada. Por ejemplo:

console.log(typeof z); // Imprime "undefined"

// En este caso, se ha utilizado el operador "typeof" para obtener el tipo de dato de una variable llamada "z" que no ha sido declarada. JavaScript devuelve "undefined" como resultado, ya que la variable "z" no ha sido declarada.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de una expresión. Por ejemplo:

console.log(typeof 10); // Imprime "number"
console.log(typeof "Hola"); // Imprime "string"
console.log(typeof true); // Imprime "boolean"
console.log(typeof { nombre: "Andres", edad: 25 }); // Imprime "object"
console.log(typeof [1, 2, 3, 4, 5]); // Imprime "object"
console.log(typeof function() {}); // Imprime "function"

// En este caso, se ha utilizado el operador "typeof" para obtener el tipo de dato de diferentes expresiones. JavaScript proporciona varios tipos de datos, como "number" para números, "string" para cadenas de texto, "boolean" para valores booleanos, "object" para objetos y arreglos, y "function" para funciones.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de una función. Por ejemplo:

function sumar(a, b) {
    return a + b;
}

console.log(typeof sumar); // Imprime "function"

// En este caso, se ha declarado una función llamada "sumar", y se ha utilizado el operador "typeof" para obtener su tipo de dato. JavaScript devuelve "function" como resultado, ya que la variable "sumar" es una función.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de una función anónima. Por ejemplo:

var restar = function(a, b) {
    return a - b;
}

console.log(typeof restar); // Imprime "function"

// En este caso, se ha declarado una función anónima llamada "restar", y se ha utilizado el operador "typeof" para obtener su tipo de dato. JavaScript devuelve "function" como resultado, ya que la variable "restar" es una función.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de una función flecha. Por ejemplo:

var multiplicar = (a, b) => a * b;

console.log(typeof multiplicar); // Imprime "function"

// En este caso, se ha declarado una función flecha llamada "multiplicar", y se ha utilizado el operador "typeof" para obtener su tipo de dato. JavaScript devuelve "function" como resultado, ya que la variable "multiplicar" es una función.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de una clase. Por ejemplo:

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

console.log(typeof Persona); // Imprime "function"

// En este caso, se ha declarado una clase llamada "Persona", y se ha utilizado el operador "typeof" para obtener su tipo de dato. JavaScript devuelve "function" como resultado, ya que las clases en JavaScript son funciones.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de una instancia de una clase. Por ejemplo:

var andres = new Persona("Andres", 25);

console.log(typeof andres); // Imprime "object"

// En este caso, se ha creado una instancia de la clase "Persona" llamada "andres", y se ha utilizado el operador "typeof" para obtener su tipo de dato. JavaScript devuelve "object" como resultado, ya que "andres" es un objeto.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de una expresión regular. Por ejemplo:

var expresionRegular = /abc/;
console.log(typeof expresionRegular); // Imprime "object"

// En este caso, se ha declarado una expresión regular que busca la cadena "abc", y se ha utilizado el operador "typeof" para obtener su tipo de dato. JavaScript devuelve "object" como resultado, ya que las expresiones regulares en JavaScript son objetos.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de un valor nulo. Por ejemplo:

var nulo = null;
console.log(typeof nulo); // Imprime "object"

// En este caso, se ha declarado una variable llamada "nulo" con un valor nulo, y se ha utilizado el operador "typeof" para obtener su tipo de dato. JavaScript devuelve "object" como resultado, ya que el valor nulo en JavaScript es un objeto.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de un valor indefinido. Por ejemplo:

var indefinido;
console.log(typeof indefinido); // Imprime "undefined"

// En este caso, se ha declarado una variable llamada "indefinido" sin asignarle un valor, y se ha utilizado el operador "typeof" para obtener su tipo de dato. JavaScript devuelve "undefined" como resultado, ya que el valor indefinido en JavaScript es "undefined".

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de un valor NaN (Not a Number). Por ejemplo:

var noEsUnNumero = NaN;

console.log(typeof noEsUnNumero); // Imprime "number"

// En este caso, se ha declarado una variable llamada "noEsUnNumero" con un valor NaN, y se ha utilizado el operador "typeof" para obtener su tipo de dato. JavaScript devuelve "number" como resultado, ya que NaN es un valor numérico.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de un valor Infinity. Por ejemplo:

var infinito = Infinity;

console.log(typeof infinito); // Imprime "number"

// En este caso, se ha declarado una variable llamada "infinito" con un valor Infinity, y se ha utilizado el operador "typeof" para obtener su tipo de dato. JavaScript devuelve "number" como resultado, ya que Infinity es un valor numérico.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de un valor -Infinity. Por ejemplo:

var menosInfinito = -Infinity;

console.log(typeof menosInfinito); // Imprime "number"

// En este caso, se ha declarado una variable llamada "menosInfinito" con un valor -Infinity, y se ha utilizado el operador "typeof" para obtener su tipo de dato. JavaScript devuelve "number" como resultado, ya que -Infinity es un valor numérico.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de un valor BigInt. Por ejemplo:

var numeroGrande = 1234567890123456789012345678901234567890n; // el sufijo "n" indica que es un valor BigInt (entero grande) el cual es un tipo de dato introducido en ECMAScript 2020

console.log(typeof numeroGrande); // Imprime "bigint"

// En este caso, se ha declarado una variable llamada "numeroGrande" con un valor BigInt, y se ha utilizado el operador "typeof" para obtener su tipo de dato. JavaScript devuelve "bigint" como resultado, ya que BigInt es un tipo de dato numérico que permite representar enteros grandes.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de un valor Symbol. Por ejemplo:

var simbolo = Symbol("simbolo");

console.log(typeof simbolo); // Imprime "symbol"

// En este caso, se ha declarado una variable llamada "simbolo" con un valor Symbol, y se ha utilizado el operador "typeof" para obtener su tipo de dato. JavaScript devuelve "symbol" como resultado, ya que Symbol es un tipo de dato que representa un identificador único.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de un valor de tipo función generador. Por ejemplo:

function* generador() {
    yield 1;
    yield 2;
    yield 3; // yield es una palabra reservada que se utiliza para devolver un valor en una función generadora, se puede decir que es similar a un return pero con la diferencia de que la función generadora puede ser pausada y reanudada en cualquier momento
}

console.log(typeof generador); // Imprime "function"

// En este caso, se ha declarado una función generadora llamada "generador", y se ha utilizado el operador "typeof" para obtener su tipo de dato. JavaScript devuelve "function" como resultado, ya que las funciones generadoras en JavaScript son funciones.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de un valor de tipo promesa. Por ejemplo:

var promesa = new Promise((resolve, reject) => {
    resolve("Éxito");
});

console.log(typeof promesa); // Imprime "object"

// En este caso, se ha declarado una promesa llamada "promesa", y se ha utilizado el operador "typeof" para obtener su tipo de dato. JavaScript devuelve "object" como resultado, ya que las promesas en JavaScript son objetos.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de un valor de tipo mapa. Por ejemplo:

var mapa = new Map();

console.log(typeof mapa); // Imprime "object"

// En este caso, se ha declarado un mapa llamado "mapa", y se ha utilizado el operador "typeof" para obtener su tipo de dato. JavaScript devuelve "object" como resultado, ya que los mapas en JavaScript son objetos.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de un valor de tipo conjunto. Por ejemplo:

var conjunto = new Set();

console.log(typeof conjunto); // Imprime "object"

// En este caso, se ha declarado un conjunto llamado "conjunto", y se ha utilizado el operador "typeof" para obtener su tipo de dato. JavaScript devuelve "object" como resultado, ya que los conjuntos en JavaScript son objetos.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de un valor de tipo weakmap. Por ejemplo:

var mapaDebil = new WeakMap();

console.log(typeof mapaDebil); // Imprime "object"

// En este caso, se ha declarado un weakmap llamado "mapaDebil", y se ha utilizado el operador "typeof" para obtener su tipo de dato. JavaScript devuelve "object" como resultado, ya que los weakmaps en JavaScript son objetos.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de un valor de tipo weakset. Por ejemplo:

var conjuntoDebil = new WeakSet(); // un weakset es similar a un set pero solo puede contener objetos y no valores primitivos (los valores primitivos son: undefined, null, boolean, number, string, symbol y bigint)

console.log(typeof conjuntoDebil); // Imprime "object"

// En este caso, se ha declarado un weakset llamado "conjuntoDebil", y se ha utilizado el operador "typeof" para obtener su tipo de dato. JavaScript devuelve "object" como resultado, ya que los weaksets en JavaScript son objetos.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de un valor de tipo DataView. Por ejemplo:

var vistaDeDatos = new DataView(new ArrayBuffer(16)); // un DataView es un objeto que proporciona una vista de un ArrayBuffer, permitiendo la lectura y escritura de datos en diferentes formatos
// ArrayBuffer es un objeto que permite almacenar datos binarios en un búfer, es decir, en una secuencia de bytes, y estos datos pueden ser de diferentes tipos, como enteros, flotantes, etc.

console.log(typeof vistaDeDatos); // Imprime "object"

// En este caso, se ha declarado un DataView llamado "vistaDeDatos", y se ha utilizado el operador "typeof" para obtener su tipo de dato. JavaScript devuelve "object" como resultado, ya que los DataViews en JavaScript son objetos.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de un valor de tipo Int8Array. Por ejemplo:

var arregloDeEnteros = new Int8Array(8); // un Int8Array es un arreglo de enteros de 8 bits con signo, es decir, que puede almacenar valores enteros en el rango de -128 a 127

console.log(typeof arregloDeEnteros); // Imprime "object"

// En este caso, se ha declarado un Int8Array llamado "arregloDeEnteros", y se ha utilizado el operador "typeof" para obtener su tipo de dato. JavaScript devuelve "object" como resultado, ya que los Int8Arrays en JavaScript son objetos.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de un valor de tipo Uint8Array. Por ejemplo:

var arregloDeEnterosSinSigno = new Uint8Array(8); // un Uint8Array es un arreglo de enteros de 8 bits sin signo, es decir, que puede almacenar valores enteros en el rango de 0 a 255

console.log(typeof arregloDeEnterosSinSigno); // Imprime "object"

// En este caso, se ha declarado un Uint8Array llamado "arregloDeEnterosSinSigno", y se ha utilizado el operador "typeof" para obtener su tipo de dato. JavaScript devuelve "object" como resultado, ya que los Uint8Arrays en JavaScript son objetos.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de un valor de tipo Int16Array. Por ejemplo:

var arregloDeEnterosDe16Bits = new Int16Array(8); // un Int16Array es un arreglo de enteros de 16 bits con signo, es decir, que puede almacenar valores enteros en el rango de -32768 a 32767, y se puede decir que es similar a un Int8Array pero con más capacidad de almacenamiento, ya que un Int8Array solo puede almacenar valores en el rango de -128 a 127

console.log(typeof arregloDeEnterosDe16Bits); // Imprime "object"

// En este caso, se ha declarado un Int16Array llamado "arregloDeEnterosDe16Bits", y se ha utilizado el operador "typeof" para obtener su tipo de dato. JavaScript devuelve "object" como resultado, ya que los Int16Arrays en JavaScript son objetos.

// Y existen otros tipos de arreglos como: Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array y BigUint64Array.
// También es posible utilizar el operador "typeof" para obtener el tipo de dato de un valor de tipo ArrayBuffer. Por ejemplo:

var búfer = new ArrayBuffer(16); // un ArrayBuffer es un objeto que permite almacenar datos binarios en un búfer, es decir, en una secuencia de bytes, y estos datos pueden ser de diferentes tipos, como enteros, flotantes, etc.

console.log(typeof búfer); // Imprime "object"

// En este caso, se ha declarado un ArrayBuffer llamado "búfer", y se ha utilizado el operador "typeof" para obtener su tipo de dato. JavaScript devuelve "object" como resultado, ya que los ArrayBuffers en JavaScript son objetos.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de un valor de tipo SharedArrayBuffer. Por ejemplo:

var búferCompartido = new SharedArrayBuffer(16); // un SharedArrayBuffer es un objeto que permite almacenar datos binarios en un búfer compartido, es decir, que puede ser compartido entre diferentes hilos de ejecución

console.log(typeof búferCompartido); // Imprime "object"

// Ahora hablemos de los tipos de datos primitivos en JavaScript.

// Tipos de datos primitivos
// En JavaScript, existen seis tipos de datos primitivos, que son:

// - Number: representa valores numéricos, como enteros y flotantes.
// - String: representa valores de texto, como cadenas de caracteres.
// - Boolean: representa valores booleanos, como true o false.
// - Undefined: representa un valor no definido.
// - Null: representa un valor nulo.
// - Symbol: representa un identificador único.
// - BigInt: representa valores numéricos enteros grandes.
// - NaN: representa un valor que no es un número.
// - Infinity: representa un valor numérico infinito.
// - -Infinity: representa un valor numérico infinito negativo.

// A continuación, se muestran ejemplos de cómo declarar variables de cada uno de estos tipos de datos primitivos:

// Number
var numero = 10;

// String
var texto = "Hola";

// Boolean
var esVerdadero = true;

// Undefined
var indefinido;

// Null
var nulo = null;

// Symbol
var simbolo = Symbol("simbolo");

// BigInt
var numeroGrande = 1234567890123456789012345678901234567890n;

// NaN
var noEsUnNumero = NaN;

// Infinity
var infinito = Infinity;

// -Infinity
var menosInfinito = -Infinity;

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de un valor de tipo BigInt. Por ejemplo:

console.log(typeof 1234567890123456789012345678901234567890n); // Imprime "bigint"

// En este caso, se ha utilizado el operador "typeof" para obtener el tipo de dato de un valor BigInt. JavaScript devuelve "bigint" como resultado, ya que BigInt es un tipo de dato numérico que permite representar enteros grandes.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de un valor de tipo Symbol. Por ejemplo:

console.log(typeof Symbol("simbolo")); // Imprime "symbol"

// En este caso, se ha utilizado el operador "typeof" para obtener el tipo de dato de un valor Symbol. JavaScript devuelve "symbol" como resultado, ya que Symbol es un tipo de dato que representa un identificador único.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de un valor de tipo NaN. Por ejemplo:

console.log(typeof NaN); // Imprime "number"

// En este caso, se ha utilizado el operador "typeof" para obtener el tipo de dato de un valor NaN. JavaScript devuelve "number" como resultado, ya que NaN es un valor numérico.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de un valor de tipo Infinity. Por ejemplo:

console.log(typeof Infinity); // Imprime "number"

// En este caso, se ha utilizado el operador "typeof" para obtener el tipo de dato de un valor Infinity. JavaScript devuelve "number" como resultado, ya que Infinity es un valor numérico.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de un valor de tipo -Infinity. Por ejemplo:

console.log(typeof -Infinity); // Imprime "number"

// En este caso, se ha utilizado el operador "typeof" para obtener el tipo de dato de un valor -Infinity. JavaScript devuelve "number" como resultado, ya que -Infinity es un valor numérico.

// También es posible utilizar el operador "typeof" para obtener el tipo de dato de un valor de tipo undefined. Por ejemplo:

console.log(typeof undefined); // Imprime "undefined"

// En este caso, se ha utilizado el operador "typeof" para obtener el tipo de dato de un valor undefined. JavaScript devuelve "undefined" como resultado, ya que undefined es un valor no definido.

// Hablemos de las diferencias entre let, const, var y por qué es recomendable utilizar let y const en lugar de var.

// Diferencias entre let, const y var

// En JavaScript, existen tres formas de declarar variables: let, const y var. Cada una de estas formas tiene sus propias características y diferencias, y es importante comprender cuándo es apropiado utilizar cada una.

// - let: la palabra reservada "let" se utiliza para declarar variables que pueden cambiar de valor durante la ejecución de un programa. Por ejemplo:

let x = 10;

x = 20;

console.log(x); // Imprime 20

// En este caso, se ha declarado una variable llamada "x" utilizando la palabra reservada "let", y se le ha asignado un valor de 10. Luego, se ha cambiado el valor de la variable a 20. La variable "x" es de tipo let, por lo que su valor puede cambiar durante la ejecución del programa.

// - const: la palabra reservada "const" se utiliza para declarar constantes, es decir, variables cuyo valor no puede cambiar una vez que ha sido asignado. Por ejemplo:

const ElPI = 3.1416;

// ElPI = 3.14; // Esto generará un error, ya que no es posible cambiar el valor de una constante.

// En este caso, se ha declarado una constante llamada "ElPI" utilizando la palabra reservada "const", y se le ha asignado un valor de 3.1416. La constante "ElPI" no puede cambiar de valor una vez que ha sido asignado.

// - var: la palabra reservada "var" se utilizaba en versiones anteriores de JavaScript para declarar variables. Sin embargo, en versiones más recientes de JavaScript, se recomienda utilizar "let" y "const" en lugar de "var". Por ejemplo:

var y = 10;

y = 20;

console.log(y); // Imprime 20

// En este caso, se ha declarado una variable llamada "y" utilizando la palabra reservada "var", y se le ha asignado un valor de 10. Luego, se ha cambiado el valor de la variable a 20. La variable "y" es de tipo var, por lo que su valor puede cambiar durante la ejecución del programa.

// La principal diferencia entre "let" y "var" es que las variables declaradas con "let" tienen un alcance de bloque, es decir, que solo son visibles dentro del bloque en el que fueron declaradas. Por ejemplo:
    
{
    let z = 30;
}

console.log(z); // Esto generará un error, ya que la variable "z" no es visible fuera del bloque en el que fue declarada.

// En este caso, se ha declarado una variable llamada "z" utilizando la palabra reservada "let" dentro de un bloque de código. La variable "z" solo es visible dentro de ese bloque, por lo que no es posible acceder a ella fuera del bloque.

// Por otro lado, las variables declaradas con "var" tienen un alcance de función, es decir, que son visibles en toda la función en la que fueron declaradas. Por ejemplo:

function ejemplo() {
    var w = 40;
}

console.log(w); // Esto generará un error, ya que la variable "w" no es visible fuera de la función en la que fue declarada.

// En este caso, se ha declarado una variable llamada "w" utilizando la palabra reservada "var" dentro de una función. La variable "w" solo es visible dentro de esa función, por lo que no es posible acceder a ella fuera de la función.

// Por lo tanto, se recomienda utilizar "let" y "const" en lugar de "var" para declarar variables, ya que "let" y "const" tienen un alcance de bloque, lo que ayuda a evitar errores y comportamientos inesperados en el código.

// En resumen, en JavaScript es posible declarar variables utilizando las palabras reservadas "let", "const" y "var". Cada una de estas formas tiene sus propias características y diferencias, y es importante comprender cuándo es apropiado utilizar cada una. Se recomienda utilizar "let" y "const" en lugar de "var" para declarar variables, ya que "let" y "const" tienen un alcance de bloque, lo que ayuda a evitar errores y comportamientos inesperados en el código.

// Ahora hablemos sobre el alcance de las variables en JavaScript.

// Alcance de las variables
// En JavaScript, el alcance de una variable se refiere a la parte del código en la que la variable es visible y puede ser utilizada. Existen dos tipos de alcance en JavaScript: alcance global y alcance local.

// - Alcance global: una variable con alcance global es visible y puede ser utilizada en todo el código, es decir, que es accesible desde cualquier parte del programa. Por ejemplo:

var global = 10;

function ejemploGlobal() {
    console.log(global);
}

ejemploGlobal(); // Imprime 10

// En este caso, se ha declarado una variable llamada "global" con alcance global, es decir, que es visible y puede ser utilizada en todo el código. La función "ejemploGlobal" puede acceder a la variable "global" y mostrar su valor.

// - Alcance local: una variable con alcance local es visible y puede ser utilizada solo dentro de un bloque de código específico, como una función o un bloque de código delimitado por llaves {}. Por ejemplo:

function ejemploLocal() {
    var local = 20;
    console.log(local);
}

ejemploLocal(); // Imprime 20

// console.log(local); // Esto generará un error, ya que la variable "local" tiene alcance local y no es visible fuera de la función en la que fue declarada.

// En este caso, se ha declarado una variable llamada "local" con alcance local dentro de la función "ejemploLocal", es decir, que solo es visible y puede ser utilizada dentro de esa función. La variable "local" no es visible fuera de la función en la que fue declarada.

// También es posible declarar variables con alcance local utilizando la palabra reservada "let" y "const". Por ejemplo:

function ejemploLocalLet() {
    let localLet = 30;
    console.log(localLet);
}

ejemploLocalLet(); // Imprime 30

// console.log(localLet); // Esto generará un error, ya que la variable "localLet" tiene alcance local y no es visible fuera de la función en la que fue declarada.

// En este caso, se ha declarado una variable llamada "localLet" con alcance local utilizando la palabra reservada "let" dentro de la función "ejemploLocalLet". La variable "localLet" solo es visible dentro de esa función, por lo que no es posible acceder a ella fuera de la función.

// También es posible declarar variables con alcance local utilizando la palabra reservada "const". Por ejemplo:

function ejemploLocalConst() {
    const localConst = 40;
    console.log(localConst);
}

ejemploLocalConst(); // Imprime 40

// console.log(localConst); // Esto generará un error, ya que la variable "localConst" tiene alcance local y no es visible fuera de la función en la que fue declarada.

// En este caso, se ha declarado una variable llamada "localConst" con alcance local utilizando la palabra reservada "const" dentro de la función "ejemploLocalConst". La variable "localConst" solo es visible dentro de esa función, por lo que no es posible acceder a ella fuera de la función.

// También es posible declarar variables con alcance local utilizando la palabra reservada "let" y "const" dentro de bloques de código delimitados por llaves {}. Por ejemplo:

{
    let localBloqueLet = 50;
    console.log(localBloqueLet);
}

// console.log(localBloqueLet); // Esto generará un error, ya que la variable "localBloqueLet" tiene alcance local y no es visible fuera del bloque en el que fue declarada.

// En este caso, se ha declarado una variable llamada "localBloqueLet" con alcance local utilizando la palabra reservada "let" dentro de un bloque de código delimitado por llaves {}. La variable "localBloqueLet" solo es visible dentro de ese bloque, por lo que no es posible acceder a ella fuera del bloque.

// También es posible declarar variables con alcance local utilizando la palabra reservada "const" dentro de bloques de código delimitados por llaves {}. Por ejemplo:

{
    const localBloqueConst = 60;
    console.log(localBloqueConst);
}

// console.log(localBloqueConst); // Esto generará un error, ya que la variable "localBloqueConst" tiene alcance local y no es visible fuera del bloque en el que fue declarada.

// En este caso, se ha declarado una variable llamada "localBloqueConst" con alcance local utilizando la palabra reservada "const" dentro de un bloque de código delimitado por llaves {}. La variable "localBloqueConst" solo es visible dentro de ese bloque, por lo que no es posible acceder a ella fuera del bloque.

// En resumen, en JavaScript, el alcance de una variable se refiere a la parte del código en la que la variable es visible y puede ser utilizada. Existen dos tipos de alcance en JavaScript: alcance global y alcance local. Las variables con alcance global son visibles y pueden ser utilizadas en todo el código, mientras que las variables con alcance local son visibles y pueden ser utilizadas solo dentro de un bloque de código específico, como una función o un bloque de código delimitado por llaves {}. Es importante tener en cuenta el alcance de las variables al declararlas, para evitar errores y comportamientos inesperados en el código.

// Ahora hablemos sobre los tipos de datos en JavaScript.

// Tipos de datos en JavaScript

// En resumen, en JavaScript es posible declarar variables utilizando la palabra reservada "var", y asignarles valores utilizando el operador de asignación "=".
// Las variables pueden almacenar diferentes tipos de datos, como números, cadenas de texto, booleanos, objetos, arreglos y funciones. Cada uno de estos tipos de datos se comporta de manera diferente en JavaScript, y es importante comprender cómo funcionan para poder utilizarlos de manera efectiva en el desarrollo de aplicaciones web.

// En el siguiente archivo, hablaré sobre los operadores en JavaScript, y cómo se utilizan para realizar operaciones matemáticas, de comparación y lógicas.
