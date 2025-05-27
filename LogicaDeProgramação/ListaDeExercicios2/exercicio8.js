const vendas = [
    { cliente: "Alice", total: { unidade: 12, unidade50: 10 } },
    { cliente: "Bob", total: { unidade: 5, unidade50: 15 } },
    { cliente: "Alice", total: { unidade: 8, unidade50: 20 } },
    { cliente: "Bob", total: { unidade: 10, unidade50: 5 } }
];

function agruparVendasPorCliente(vendas) {
    return vendas.reduce((acumulador, venda) => {
        const cliente = venda.cliente;
        const totalVenda = Object.values(venda.total).reduce((total, valor) => total + valor, 0);
        
        if (!acumulador[cliente]) {
            acumulador[cliente] = 0;
        }
        
        acumulador[cliente] += totalVenda;
        return acumulador;
    }, {});
}

console.log(agruparVendasPorCliente(vendas));