function ehDataValida(dia, mes, ano) {
    if (typeof dia !== 'number' || typeof mes !== 'number' || typeof ano !== 'number' || dia < 1 || mes < 1 || mes > 12 || ano < 0) {
        return false;
    }

    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if ( mes === 2 && ehAnoBissexto(ano)) {
        diasPorMes[1] = 29;
    }

    return dia <= diasPorMes[mes - 1];
}

function ehAnoBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

console.log(ehDataValida(29, 2, 2020)); 
console.log(ehDataValida(29, 2, 2021)); 
console.log(ehDataValida(31, 4, 2021)); 
console.log(ehDataValida(31, 12, 2021));
console.log(ehDataValida(30, 6, 2021));
console.log(ehDataValida(31, 11, 2021));