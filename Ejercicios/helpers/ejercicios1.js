// RELACIÓN I: `Arrays` en JavaScript.

// Ejercicio 1: Suma de Arrays
//Escribe una función llamada `sumaArrays` que tome dos arrays `arr1` y `arr2` del mismo tamaño. La función debe devolver un nuevo array que contenga la suma de los elementos correspondientes de `arr1` y `arr2`.

/**
 * @description: suma de arrays
 */
const sumaArrays = (arr1,arr2) => arr1.map((num, index) => num + arr2[index]);
//console.log(sumaArrays([1,2,3],[4,5,6]));

// Ejercicio 2: Duplicados
// Define una función llamada `eliminarDuplicados` que tome un array `arr`. La función debe eliminar los elementos duplicados y devolver un nuevo array con elementos únicos, manteniendo el orden original.
/**
 * @description: devuelve un array que toma elementos únicos de dos arrays
 */
const eliminarDuplicados = (arr1, arr2) => {
    let arrtotal=arr1.concat(arr2);
    return arrtotal.filter((element, index) => arrtotal.indexOf(element) === index);
    //NOTA: indexOf da el índice del primer elemento que contiene el contenido "element", si no coincide con el índice es porque está repetido.
    // Por lo tanto los índices son diferentes y da false, dejando fuera ese valor.
}
//console.log(eliminarDuplicados([1,2,3,4],[1,3,4,5]))

// Ejercicio 3: Filtrar Pares
// Crea una función llamada `filtrarPares` que tome un array de números `arr` y devuelva un nuevo array que contenga solo los números pares.
/**
 * @description: filtra de un array los número pares
 */
const filtrarpares = (arr) => arr.filter((num) => num % 2 == 0);
//console.log(filtrarpares([1,2,3,4,5,10,11,12])) ;

// Ejercicio 4: Unión de Arrays
// Escribe una función llamada `unirArrays` que acepte un número variable de arrays y los combine en uno solo. Nota: Se podría utilizar el método `reduce` y el método `concat` para lograrlo.
/**
 * @description: une una cantidad variable de arrays y los combina en uno solo
 */
const unirArrays = (...arr) => arr.flat();
console.log(unirArrays(['ene','feb','mar'],['lun','mar','mie']))

// Ejercicio 5: Conteo de Palabras
// Define una función llamada `contarPalabras` que tome una cadena de texto `texto` y devuelva un objeto que cuente cuántas veces aparece cada palabra en el texto.
/**
 * @description: devuelve un objeto que dice cuantas veces aparece cada palabra en un texto.
 */
const contarPalabras = (texto) =>{
    let arr = texto.toLowerCase().split(" ");
    let cont = []; 
    const objeto = {};
    arr.filter((palabra, index) => arr.indexOf(palabra) == index ? cont[index]=1 : cont[arr.indexOf(palabra)]+=1);
    arr.forEach((palabra, index) => cont[index]!=null ? objeto[palabra] = cont[index] : null);
    return objeto;
};
//console.log(contarPalabras("Tres tristes tigres comian tristes el trigo en el tres trigales con tres tigres"))

//  Ejercicio 6: Ordenar Números
// Crea una función llamada `ordenarNumeros` que tome un array de números `arr` y lo ordene de menor a mayor .
/**
 * @description: ordena los número de menor a mayor
 */
const ordenarNumeros = (arr) => arr.sort((a,b) => a - b);
//console.log(ordenarNumeros([1,5,15,10,7,3,0]));

// Ejercicio 7: Eliminar Elementos
// Escribe una función llamada `eliminarElemento` que tome un array `arr` y un elemento `elemento`, y elimine la primera aparición de ese elemento en el array.
/**
 * @description: elimina primer elemento llamado "elemento" del array
 */
const eliminarElemento = (arr, elemento) => {
    arr.map((rec,index) =>{if(rec == elemento) arr.splice(index,1)});
    return arr;
}
//console.log(eliminarElemento(['ene','feb','mar','abr'], 'abr'));

// Ejercicio 8: Máximo y Mínimo
// Define una función llamada `encontrarMaxMin` que tome un array de números `arr` y devuelva un objeto con las propiedades `max` y `min`, que contengan el valor máximo y mínimo del array, respectivamente.
/**
 * @description: encuentra el numero máximo y mínimo de un array y devuelve los valores como un objeto
 */
const encontrarMaxMin = (arr) => {
    const objeto = {};
    objeto.max = Math.max(...arr);
    objeto.min = Math.min(...arr);
    return objeto;
};
//console.log(encontrarMaxMin([1,2,3,4,5,6]));

// Ejercicio 9: Buscar Elemento
// Crea una función llamada `buscarElemento` que tome un array `arr` y un elemento `elemento`. La función debe devolver el índice de la primera aparición de `elemento` en el array, o -1 si no se encuentra.
/**
 * @description: busca la primera posición de aparición de "elemento" o devuelve -1
*/
const buscarElemento = (arr,elemento) => arr.indexOf(elemento) != null ? arr.indexOf(elemento):-1;
//console.log(buscarElemento("tres tristes tigres comían trigo en un triste trigal".split(" "),"triste"))

// Ejercicio 10: Dividir en fragmentos.
// Escribe una función llamada `dividirFragmento` que tome un array `arr` y un número entero `tamano`. La función debe dividir el array en fragmentos de tamaño `tamano` y devolver un nuevo array con los Fragmentos.
/**
 * @description: toma un array y un numero entero y divide el array en numero de partes iguales
 */
const dividirFragmento = (arr, tam) => [...arr].map((elem,i) => (i % tam == 0 ? [...arr].slice(i,i+tam): null)).filter(frag => frag != null)
//console.log(dividirFragmento([1,2,3,4,5,6,7,8,9,10,11],3))


// RELACIÓN II: Ejercicios de Arrays en Javascript.

// Ejercicio 11: Mapear números.
// Define una función llamada mapearNumeros que toma dos argumentos: un array arr y una
// función funcion . La función debe aplicar la función proporcionada a cada elemento del array y
// devolver un nuevo array con los resultados de la función aplicada a cada elemento.

// Ejercicio 12: Combinar Objetos
// Escribe una función llamada combinarObjetos que tome dos objetos (tanto arrays como
// objetos) obj1 y obj2 . La función debe combinar ambos objetos en uno solo y devolverlo.

// Ejercicio 13: Extraer Propiedades
// Define una función llamada extraerPropiedades que tome un objeto obj y un array de
// propiedades . La función debe devolver un nuevo objeto que contenga solo las propiedades
// especificadas en el array. Si una propiedad no existe en el objeto original, debe ser omitida en
// el nuevo objeto.

// Ejercicio 14: Rango de Números
// Escribe una función llamada rangoNumeros que tome dos números inicio y fin . La
// función debe devolver un array que contenga todos los números en el rango desde inicio
// hasta fin , incluyendo ambos números.

// Ejercicio 15: Invertir Cadena
// Define una función llamada invertirCadena que tome una cadena cadena y devuelva una
// nueva cadena con los caracteres en orden inverso.

// Ejercicio 16: Capitalizar Palabras
// Crea una función llamada capitalizarPalabras que tome una cadena cadena y devuelva
// una nueva cadena en la que la primera letra de cada palabra esté en mayúscula y las demás
// en minúscula.

// Ejercicio 17: Multiplicar Matriz por Escalar
// Escribe una función llamada multiplicarMatrizPorEscalar que tome una matriz matriz y
// un número escalar . La función debe multiplicar cada elemento de la matriz por el escalar y
// devolver una nueva matriz con los resultados.

// Ejercicio 18: Combinación de Arrays
// Escribe una función llamada combinarArrays que pase como parámetro "creciente" o
// "decreciente", junto con un número indeterminado de arrays con valores numéricos.
// Seguidamente me devolverá un array con todos los elementos que conformen los arrays
// ordenado creciente u ordenado decreciente según indique en el parámetro. Si no indico nada
// se hará de forma creciente.

// Ejercicio 19: Palíndromo
// Escribe una función llamada esPalindromo que verifique si una palabra es un palíndromo, es
// decir, se lee igual de izquierda a derecha y de derecha a izquierda. La función debe devolver
// true si la palabra es un palíndromo y false en caso contrario.

// Ejercicio 20: Diferencia de Arrays
// Escribe una función llamada diferenciaArrays que encuentre la diferencia entre dos arrays,
// es decir, los elementos que están en uno pero no en el otro. La función debe devolver un nuevo
// array con los elementos diferentes.

// Ejercicio 21: Rotación de Arrays
// Escribe una función llamada rotarArray que rote los elementos de un array hacia la derecha
// o izquierda. La función debe tomar un array arr y un número entero pasos que indique
// cuántos pasos se deben realizar hacia la derecha (si es positivo) o hacia la izquierda (si es
// negativo).

// Ejercicio 22: Suma de Matrices
// Escribe una función llamada sumarMatrices que sume dos matrices (arrays bidimensionales)
// y devuelva el resultado. Las matrices de entrada estarán representadas como arrays de arrays
// con la misma cantidad de filas y columnas.

// Ejercicio 23: Promedio de Filas
// Escribe una función llamada promedioFilas que calcule el promedio de cada fila en una
// matriz (array bidimensional) y devuelva un array con los resultados.

// Ejercicio 24: Ordenar Objetos
// Escribe una función llamada ordenarPorPropiedad que ordene un array de objetos por una
// propiedad específica. La función debe tomar un array arr y una cadena propiedad que
// indique la propiedad por la cual se debe ordenar.

// Ejercicio 25: Números que faltan
// Escribe una función llamada numerosFaltantes que encuentre los números faltantes en un
// rango dado dentro de un array. La función debe tomar un array de números arr y dos
// números enteros inicio y fin que representan el rango. La función debe devolver un array
// con los números que faltan en ese rango.