const pares = [['nome', 'Alice'], ['idade', 30], ['cidade', 'São Paulo']];

function paresParaObjeto(pares) {
    return pares.reduce((objeto, [chave, valor]) => {
        objeto[chave] = valor;
        return objeto;
    }, {});
}

function objetoParaPares(obj) {
    return Object.entries(obj);
}

const objeto = paresParaObjeto(pares);
const paresConvertidos = objetoParaPares(objeto);

console.log(objeto); 
console.log(paresConvertidos); 

