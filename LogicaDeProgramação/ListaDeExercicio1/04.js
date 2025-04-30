const prompt = require('prompt-sync')();

const menu = `
\n--- Menu Interativo ---
1. Opção A: Mensagem 1
2. Opção B: Mensagem 2
3. Opção C: Mensagem 3
----------------------
`;

console.log(menu);
const opcao = parseInt(prompt('Escolha uma opção (1, 2 ou 3): '));

switch (opcao) {
    case 1:
        console.log('Você escolheu a Opção A! - Confie em si mesmo!');
        break;
    case 2:
        console.log('Você escolheu a Opção B! - Acredite nos seus sonhos!');
        break;
    case 3:
        console.log('Você escolheu a Opção C! - Nunca desista!');
        break;
    default:
        console.log('Opção inválida!');
}