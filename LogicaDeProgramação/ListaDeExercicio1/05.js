const prompt = require('prompt-sync')();

const peso = parseFloat(prompt('Digite seu peso (em kg): '));
const altura = parseFloat(prompt('Digite sua altura (em metros): '));

const imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log(`Seu IMC é ${imc.toFixed(2)} - Baixo peso`);
} else if (imc >= 18.5 && imc < 24.9) {
    console.log(`Seu IMC é ${imc.toFixed(2)} - Peso normal`);
} else if (imc >= 25 && imc < 29.9) {
    console.log(`Seu IMC é ${imc.toFixed(2)} - Sobrepeso`);
} else if (imc >= 30) {
    console.log(`Seu IMC é ${imc.toFixed(2)} - Obesidade`);
} else {
    console.log('Erro ao calcular o IMC!');
}

