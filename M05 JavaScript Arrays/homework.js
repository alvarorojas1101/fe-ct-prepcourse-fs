/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido por parámetro.
  // Tu código:
  return array[0];
}
//console.log(devolverPrimerElemento([4, 2, 3]));

function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido por parámetro.
  // Tu código:
  let ultimoElemento = array.pop();
  return ultimoElemento;
}
//console.log(devolverUltimoElemento([1,2,5,4]))

function obtenerLargoDelArray(array) {
  // Retornar la longitud del arreglo recibido por parámetro.
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // El arreglo recibido por parámetro contiene números.
  // Retornar un arreglo con los elementos incrementados en +1.
  // Tu código:
  /* let masUno = [];
  for (let i = 0; i < array.length; i++) {
    masUno[i] = array[i] + 1;
  }
  return masUno; */

  /* return (arrayIncremento = array.map(function (elem) {
    elem = elem + 1;
    return elem;
  })); */

  var arr2 = [];
  for (var i = 0; i < array.length; i++) {
    var elemento = array[i];
    var nuevoElemento = elemento + 1;
    arr2.push(nuevoElemento);
  }
  return arr2;
}
//console.log(incrementarPorUno([1, 2, 3, 4]));

function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retornar un string donde todas las palabras estén concatenadas
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  let frase = palabras.join(" ");
  return frase;
}
//console.log(dePalabrasAFrase(["h", "o", "l", "a"]));

function arrayContiene(array, elemento) {
  // Verifica si el elemento existe dentro del arreglo recibido.
  // Retornar true si está, o false si no está.
  // Tu código:
  return array.includes(elemento);
}
//console.log(arrayContiene([1, 2, 3], 1));

function agregarNumeros(arrayOfNums) {
  // El parámetro "arrayOfNums" debe ser un arreglo de números.
  // Suma todos los elementos y retorna el resultado.
  // Tu código:
  return arrayOfNums.reduce(function (acumulador, elem) {
    acumulador = acumulador + elem;
    return acumulador;
  }, 0);
}
console.log(agregarNumeros([1, 2, 3, 4]));

function promedioResultadosTest(resultadosTest) {
  // El parámetro "resultadosTest" es un arreglo de números.
  // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
  // Tu código:
  var suma = agregarNumeros(resultadosTest);
  var totaElementos = resultadosTest.length;
  var promedio = suma / totaElementos;
  return promedio;
}

console.log(promedioResultadosTest([1, 2, 3, 4]));

function numeroMasGrande(arrayOfNums) {
  // El parámetro "arrayOfNums" es un arreglo de números.
  // Retornar el número más grande.
  // Tu código:
  var numeroMasGrande = arrayOfNums[0];
  arrayOfNums.forEach(function (elem) {
    if (elem > numeroMasGrande) numeroMasGrande = elem;
  });
  return numeroMasGrande;
}
console.log(numeroMasGrande([1, 5, 4, 6, 54, 58]));

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  var longitudDeArguments = arguments.length;
  if (longitudDeArguments === 0) return 0;
  if (longitudDeArguments === 1) return arguments[0];
  var producto = 1;
  for (var i = 0; i < arguments.length; i++) {
    producto = producto * arguments[i];
  }
  return producto;
}

console.log(multiplicarArgumentos(1, 2, 4, 5));

function cuentoElementos(array) {
  // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
  // Tu código:
  var mayoresDe18 = array.filter(function (elem) {
    return elem > 18;
  });
  return mayoresDe18.length;
}
console.log(cuentoElementos([20, 21, 25, 24, 18, 17, 24]));

function diaDeLaSemana(numeroDeDia) {
  // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
  // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
  // Tu código:
  if (numeroDeDia < 1 || numeroDeDia > 7) return "Numero Invalido";
  if (numeroDeDia === 1 || numeroDeDia === 7) return "Es fin de semana";
  else return "Es dia laboral";
}
console.log(diaDeLaSemana());

function empiezaConNueve(num) {
  // Esta función recibe por parámetro un número.
  // Debe retornar true si el entero inicia con 9 y false en otro caso.
  // Tu código:

  var numeroString = num.toString().at(0);
  var primerValor = numeroString.charAt(0);
  primerValor = Number(primerValor);
  return primerValor === 9;
}
console.log(empiezaConNueve(99));

function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario retornar false.
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[0]) return false;
  }
  return true;
}
console.log(todosIguales([2, 2, 2, 4]));

function mesesDelAño(array) {
  // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var mesesFiltrados = array.filter(function (elem) {
    if (elem === "Enero" || elem === "Marzo" || elem === "Noviembre")
      return elem;
  });
  var conjunto = new Set(mesesFiltrados);
  var arregloEmpaquetado = [...conjunto];
  if (arregloEmpaquetado.length < 3)
    return "No se encontraron los meses pedidos";
  return arregloEmpaquetado;
}

console.log(
  mesesDelAño(["Enero", "Febrero", "Enero", "Marzo", "Abril", "Noviembre"])
);

function tablaDelSeis() {
  // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Tu código:
  var tabla = [];
  for (var i = 0; i <= 10; i++) {
    var operacion = 6 * i;
    tabla.push(operacion);
  }
  return tabla;
}
console.log(tablaDelSeis());

function mayorACien(array) {
  // La función recibe un arreglo con enteros entre 0 y 200.
  // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
  // Tu código:
  var filtrados = array.filter(function (elem) {
    if (elem > 100) return elem;
  });
  return filtrados;
}
console.log(mayorACien([200, 400, 100, 5, 145]));

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retornarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // [PISTA]: utiliza el statement 'break'.
  // Tu código:
  var resultado = [];
  for (var i = 0; i < 10; i++) {
    resultado.push(num + i * 2);
    if (num + i * 2 === i + 1) {
      return "Se interrumpió la ejecución";
    }
  }
  return resultado;
}
//console.log(breakStatement(2));

function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continua con la siguiente iteración.
  // [PISTA]: utiliza el statement 'continue'.
  // Tu código:
  var resultado = [];
  for (var i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }
    resultado.push(num + i * 2);
  }
  return resultado;
}
console.log(continueStatement(5));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  tablaDelSeis,
  mayorACien,
  breakStatement,
  continueStatement,
};
