const prompt = require('prompt-sync')();

const ladoA = parseFloat(prompt('Digite o valor do lado A: '));
const ladoB = parseFloat(prompt('Digite o valor do lado B: '));
const ladoC = parseFloat(prompt('Digite o valor do lado C: '));

if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log('Os lados formam um triângulo equilátero.');
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log('Os lados formam um triângulo isósceles.');
    } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        console.log('Os lados formam um triângulo escaleno.');
    }
}
else {
    console.log('Os lados fornecidos não formam um triângulo.');
}