const prompt = require('prompt-sync')();

const valor1 = parseInt(prompt('Digite o primeiro valor: '));
let valor2 = parseInt(prompt('Digite o segundo valor: '));

if (isNaN(valor1) || isNaN(valor2)) {
    console.log('Por favor, insira valores numéricos válidos.');
}

if (valor1 === valor2) {
    console.log('Os valores não podem ser iguais. Por favor, insira valores diferentes.');
    valor2 = parseInt(prompt('Digite o segundo valor diferente do primeiro: '));
}

if (valor1 < valor2) {
    console.log(`Os valores em ordem crescente são: ${valor1}, ${valor2}`);
}else {
    console.log(`Os valores em ordem crescente são: ${valor2}, ${valor1}`);
}