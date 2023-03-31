let handler = async (m, { conn, text, usedPrefix, command}) => {
let fila, columna
function generarSopaDeLetras() {
    const LADO = 10;
    let sopaDeLetras = new Array(LADO);
  
    for (let i = 0; i < LADO; i++) {
      sopaDeLetras[i] = new Array(LADO);
    }
  
    const PALABRAS = ["CASA", "GATABOT", "WHATSAPP", "GITHUB"];
    const PALABRA = PALABRAS[Math.floor(Math.random() * PALABRAS.length)];
  
    let filaInicial = Math.floor(Math.random() * LADO);
    let columnaInicial = Math.floor(Math.random() * LADO);
  
    const DIRECCIONES = ["horizontal", "vertical", "diagonalDerecha", "diagonalIzquierda"];
    const DIRECCION = DIRECCIONES[Math.floor(Math.random() * DIRECCIONES.length)];
  
    while (filaInicial + PALABRA.length > LADO && DIRECCION === "vertical" || columnaInicial + PALABRA.length > LADO && DIRECCION === "horizontal" || filaInicial + PALABRA.length > LADO || columnaInicial + PALABRA.length > LADO) {
      filaInicial = Math.floor(Math.random() * LADO);
      columnaInicial = Math.floor(Math.random() * LADO);
    }
  
    for (let i = 0; i < PALABRA.length; i++) {
      if (DIRECCION === "horizontal") {
        sopaDeLetras[filaInicial][columnaInicial + i] = PALABRA.charAt(i);
      } else if (DIRECCION === "vertical") {
        sopaDeLetras[filaInicial + i][columnaInicial] = PALABRA.charAt(i);
      } else if (DIRECCION === "diagonalDerecha") {
        sopaDeLetras[filaInicial + i][columnaInicial + i] = PALABRA.charAt(i);
      } else {
        sopaDeLetras[filaInicial + i][columnaInicial - i] = PALABRA.charAt(i);
      }
    }
  
    console.log(`La palabra "${PALABRA}" se encuentra en la dirección "${DIRECCION}" empezando en la fila ${filaInicial} y columna ${columnaInicial}.\n`);
  
    const LETRAS_POSIBLES = "ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓜⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ";
    let sopaDeLetrasConBordes = "";
    sopaDeLetrasConBordes += "     " + [...Array(LADO).keys()].join("   ") + "\n"; // Agregamos los números de columnas
    sopaDeLetrasConBordes += "  *╭" + "┄".repeat(LADO) + '┄┄' + "╮*\n"; // Agregamos la línea horizontal superior
  
    for (let i = 0; i < LADO; i++) {
    let fila = i + " | "; // Agregamos el número de fila al inicio de cada fila
    for (let j = 0; j < LADO; j++) {
      if (sopaDeLetras[i][j]) {
        fila += sopaDeLetras[i][j] + " "; // Alineamos a la derecha y agregamos un espacio adicional al final de cada letra
      } else {
        let letraAleatoria = LETRAS_POSIBLES.charAt(Math.floor(Math.random() * LETRAS_POSIBLES.length));
        fila += letraAleatoria + " "; // Alineamos a la derecha y agregamos un espacio adicional al final de cada letra
      }
    }
    fila += " |"; // Agregamos el caracter "|" al final de cada fila
    sopaDeLetrasConBordes += fila + "\n";
  }
  
  sopaDeLetrasConBordes += "  *╰" + "┄".repeat(LADO) + '┄┄' + "╯*"; // Agregamos la línea horizontal inferior
  
  console.log(sopaDeLetrasConBordes);
 fila = filaInicial 
 columna = columnaInicial
  }
  
let acertado = false;
let intentos = 3;
   
while (!acertado) {
  if (`${fila}${columna}` == text) {
    console.log("¡Correcto!");
    acertado = true;
    break; // Salir del bucle while
  } else {
    intentos--;
    if (intentos === 0) {
      console.log("Agotaste tus intentos. La palabra correcta era:", fila, columna);
      generarSopaDeLetras();
      //fila = filaInicial;
      //columna = columnaInicial;
      intentos = 3;
    } else {
      console.log("Incorrecto. Te quedan", intentos, "intentos");
    }
  }
}
  
}

handler.command = /^(sopa)$/i
export default handler
