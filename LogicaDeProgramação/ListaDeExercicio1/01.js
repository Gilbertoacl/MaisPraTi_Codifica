const prompt = require('prompt-sync')();
const numero = parseInt(prompt('Digite um número inteiro: '));

numero % 2 === 0 ? console.log(`${numero} é par`) : console.log(`${numero} é ímpar`);