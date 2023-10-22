/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*1️⃣ EJERCICIO 01 1️⃣*/

// NOTACION FUNCIONAL
/* function Car(marca, color) {
  this.marca = marca;
  this.color = color;
  this.matricula = true;
  this.meep = function () {
    return "Meep! Meep!";
  };
}
var nissan = new Car("Nissan", "Rojo");
console.log(nissan);
console.log(nissan.meep());

var toyota = new Car("Toyota", "verde");
console.log(toyota); */

//NOTACION DE CLASE

/* class Carro {
  constructor(marca, color) {
    this.marca = marca;
    this.color = color;
    this.matricula = true;
    this.meep = function () {
      return "Meep! Meep!";
    };
  }
}

var nissan = new Carro("Nissan", "Rojo");
console.log(nissan);
console.log(nissan.meep());

var toyota = new Carro("Toyota", "verde");
console.log(toyota);
console.log(nissan.meep()); */

// prototype
/* class Animal {
  constructor(raza, nombre) {
    this.raza = raza;
    this.nombre = nombre;
  }
  meow() {
    return "Meow! ";
  }
  ladrar() {
    return "Guau!";
  }
} */
/* var gato = new Animal("felino", "Michi");
console.log(gato);
console.log(gato.meow());

var perro = new Animal("Pastor aleman ", "zeus");
console.log(perro);
console.log(perro.ladrar());
 */
/* 
class Perro extends Animal {
  constructor(raza, nombre) {
    super(raza, nombre);
  }
}
var perro1 = new Perro("Mastin ", "Apolo");
console.log(perro1);

class gato extends Animal {
  constructor(raza, nombre) {
    super(raza, nombre);
  }
}
var gato1 = new gato("criollo", "majua");
console.log(gato1); */

/* // CallBacks -> una funcion que es pasada como argumento a otra funcion -> cb

function suma(a, b, cb) {
  var operacion = a + b;
  var cantidadDeArgs = arguments.length - 1;
  return cb(operacion, cantidadDeArgs);
}

function promedio(suma, args) {
  console.log(suma, args);
  return suma / args;
}

console.log(suma(2, 3, promedio));

//

function saludar(nombre, cb) {
  var saludo = cb(nombre); // mensaje
  return saludo;
}

function mascota(nombre) {
  return "Hola!, soy " + nombre;
}

console.log(saludar("Pluto", mascota)); */

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructora llamada "Usuario".
  // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
  // El valor de cada propiedad la recibirá por parámetro.
  // Además, esta clase debe tener un método llamado "saludar".
  // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
  // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
  // Retornar la clase.
  // Tu código:

  // FUNCION CONSTRUCTORA
  /* function Usuario(usuario, nombre, email, password) {
    this.usuario = usuario;
    this.nombre = nombre;
    this.email = email;
    this.password = password;
    this.saludar = function () {
      return `Hola, mi nombre es ${this.nombre}`;
    };
  }
  return Usuario; */

  // sintaxis CLASES (metodo por fuera)
  class Usuario {
    constructor(usuario, nombre, email, password) {
      this.usuario = usuario;
      this.nombre = nombre;
      this.email = email;
      this.password = password;
    }
    saludar = function () {
      return `Hola, mi nombre es ${this.nombre}`;
    };
  }
  return Usuario;
}

function agregarMetodoPrototype(Usuario) {
  // Agrega un método al prototipo de "Usuario".
  // El método debe llamarse "saludar" y debe devolver el string "Hello World!".
  // Tu código:
  Usuario.prototype.saludar = function () {
    return "Hello World!";
  };
}

function agregarStringInvertida() {
  // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse".
  // [PISTA]: necesitarás utilizar el objeto "this".
  String.prototype.reverse = function () {
    var array = this.split("");
    var arrayInvertido = array.reverse();
    var stringInvertido = arrayInvertido.join("");
    return stringInvertido;
  };
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
};
