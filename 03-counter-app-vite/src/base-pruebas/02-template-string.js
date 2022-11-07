export function getSaludo(nombre) {
  return "Hola " + nombre;
}

// este console.log no pasaría el test porque está buscando la variable nombre. Test Suite ejecuta el archivo.
// console.log(`Este es un texto: ${getSaludo(nombre)}  `);
