const prompt = require('prompt-sync')();
let num = 1
let soma = 0;
let contador = 0;
while (num != 0) {
    num = parseFloat(prompt('Digite um número decimal (0 para sair): '));
    if (num != 0) {
        soma += num;
        contador++;
    }
    
}

let media = soma / contador;

console.log(`A soma dos números digitados é: ${soma.toFixed(2)}`);
console.log(`A quantidade de números digitados é: ${contador}`);
console.log(`A média aritmética dos números digitados é: ${media.toFixed(2)}`);