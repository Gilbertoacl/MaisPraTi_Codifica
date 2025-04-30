const prompt = require('prompt-sync')();
const numero = parseInt(prompt('Digite um número para ver a tabuada: '));

if (isNaN(numero) || numero < 1 || numero > 10) {
    console.log('Por favor, insira um número válido.');
}
else {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}
