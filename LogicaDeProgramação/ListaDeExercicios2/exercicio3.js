const frase = "olá olá mundo mundo development development aula teste teste"; 
const palavras = frase.split(" ");
const palavrasUnicas = [];

for (let i = 0; i < palavras.length; i++) {
    const palavra = palavras[i];
    if (!palavrasUnicas.includes(palavra)) {
        palavrasUnicas.push(palavra);
    }
}

console.log(palavrasUnicas);