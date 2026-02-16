// Ejercicio 1
let num = parseInt(prompt("Introduce un número:"));

if (!isNaN(num) && num > 0) {
  document.write("<h2>Ejercicio 1</h2>");
  document.write("<table>");
  document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");

  for (let i = 1; i <= num; i++) {
    document.write("<tr>");
    document.write("<td>" + i + "</td>");
    document.write("<td>" + i * i + "</td>");
    document.write("<td>" + i * i * i + "</td>");
    document.write("</tr>");
  }

  document.write("</table>");
} else {
  document.write("Entrada inválida.");
}

// Ejercicio 2
let randomSum = Math.floor(Math.random()) + Math.floor(Math.random());

let numberGuess = parseInt(
  prompt("Introduce el resultado de la suma de dos números:"),
);

if (numberGuess == randomSum) {
  document.write("<h2>Ejercicio 2</h2>");
  document.write("¡Adivinaste el número!");
} else {
  document.write("<h2>Ejercicio 2</h2>");
  document.write("¡Incorrecto!");
}

// Ejercicio 3
function contador(arreglo) {
  let negativos = 0;
  let ceros = 0;
  let positivos = 0;

  for (num of arreglo) {
    if (num < 0) {
      negativos++;
    } else if (num === 0) {
      ceros++;
    } else {
      positivos++;
    }
  }

  document.write(
    `<p>Negativos: ${negativos}, Ceros: ${ceros}, Positivos: ${positivos}</p>`,
  );
}

document.write("<h2>Ejercicio 3</h2>");
contador([0, 0, -3, -2, -15, 2]);

// Ejercicio 4
function promedios(arreglo) {
  const promediosArreglo = [];
  for (fila of arreglo) {
    let suma = 0;
    for (num of fila) {
      suma += num;
    }
    const promedioFila = suma / fila.length;
    promediosArreglo.push(promedioFila);
  }
  document.write(`<p>Promedios: ${promediosArreglo.join(", ")}</p>`);
}

document.write("<h2>Ejercicio 4</h2>");
promedios([
  [10, 20, 30],
  [5, 5],
  [100, 200],
]);

// Ejercicio 5
function inverso(num) {
  let numStr = num.toString();
  let numInverso = "";

  let der = numStr.length - 1;

  while (der >= 0) {
    numInverso += numStr[der];
    der--;
  }

  return Number(numInverso);
}

document.write("<h2>Ejercicio 5</h2>");
document.write(`<p>El inverso de 12345 es: ${inverso(12345)}</p>`);
