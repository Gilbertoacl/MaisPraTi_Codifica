const prompt = require('prompt-sync')();

function jogoDeAdivinhacao() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    let palpite = 0;

    while (palpite !== numeroAleatorio) {
        palpite = parseInt(prompt("Adivinhe o número entre 1 e 100:"));
        tentativas++;

        if (palpite < numeroAleatorio) {
            console.log("Mais alto!");
        } else if (palpite > numeroAleatorio) {
            console.log("Mais baixo!");
        } else {
            console.log(`Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`);
        }
    }
}

jogoDeAdivinhacao();