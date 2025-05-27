const produtos = [
    { nome: 'Produto A', preco: 30 },
    { nome: 'Produto B', preco: 20 },
    { nome: 'Produto C', preco: 50 },
    { nome: 'Produto D', preco: 10 }
];
function obterNomesOrdenadosPorPreco(produtos) {
    return produtos
        .map(produto => produto.nome)
        .sort((a, b) => {
            const precoA = produtos.find(p => p.nome === a).preco;
            const precoB = produtos.find(p => p.nome === b).preco;
            return precoA - precoB;
        });
}

const nomesOrdenados = obterNomesOrdenadosPorPreco(produtos);
console.log(nomesOrdenados); 
