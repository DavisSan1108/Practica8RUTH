function generarCuadro() {
    const n = parseInt(document.getElementById('n').value);
    const cuadro = document.getElementById('cuadro');
    cuadro.innerHTML = '';
    cuadro.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    document.getElementById('verificarBtn').style.display = 'block';

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            cuadro.innerHTML += `<input type="number" id="cell-${i}-${j}" required>`;
        }
    }
}

function verificarCuadro() {
    const n = parseInt(document.getElementById('n').value);
    const matriz = [];

    // Leer los valores de la matriz desde los inputs
    for (let i = 0; i < n; i++) {
        matriz[i] = [];
        for (let j = 0; j < n; j++) {
            matriz[i][j] = parseInt(document.getElementById(`cell-${i}-${j}`).value);
        }
    }

    // Calcular la suma de la primera fila como la constante mágica
    const sumaMagica = matriz[0].reduce((a, b) => a + b, 0);

    // Verificar filas, columnas y diagonales
    let esMagico = true;

    // Verificar filas
    for (let i = 0; i < n; i++) {
        const sumaFila = matriz[i].reduce((a, b) => a + b, 0);
        if (sumaFila !== sumaMagica) {
            esMagico = false;
            break;
        }
    }

    // Verificar columnas
    for (let j = 0; j < n; j++) {
        let sumaColumna = 0;
        for (let i = 0; i < n; i++) {
            sumaColumna += matriz[i][j];
        }
        if (sumaColumna !== sumaMagica) {
            esMagico = false;
            break;
        }
    }

    // Verificar diagonal principal
    let sumaDiagonalPrincipal = 0;
    for (let i = 0; i < n; i++) {
        sumaDiagonalPrincipal += matriz[i][i];
    }
    if (sumaDiagonalPrincipal !== sumaMagica) {
        esMagico = false;
    }

    // Verificar diagonal secundaria
    let sumaDiagonalSecundaria = 0;
    for (let i = 0; i < n; i++) {
        sumaDiagonalSecundaria += matriz[i][n - 1 - i];
    }
    if (sumaDiagonalSecundaria !== sumaMagica) {
        esMagico = false;
    }

    // Mostrar resultado
    const resultado = document.getElementById('resultado');
    if (esMagico) {
        resultado.innerHTML = `<h2>¡Es un Cuadrado Mágico!</h2><p>La constante mágica es: ${sumaMagica}</p>`;
    } else {
        resultado.innerHTML = `<h2>No es un Cuadrado Mágico</h2>`;
    }
}


/*Cuardrado amgivo valido 3x3
4 9 2
3 5 7
8 1 6*/

/*Cuadrado magico valido 4x4
1 15 14 4
12 6 7 9
8 10 11 5
13 3 2 16*/

/*Cuadrado magico invalido 3x3
1 2 3
4 5 6
7 8 9*/ 

/*Cuadarado no magico 4x4
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16*/

/*Cuadrado Mágico 5x5 Válido
17 24  1  8 15
23  5  7 14 16
4  6 13 20 22
10 12 19 21  3
11 18 25  2  9*/ 

