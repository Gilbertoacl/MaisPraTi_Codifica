function debounce(fn, delay) {
    let timeoutId;

    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

function sayHello(name) {
    console.log(`Olá, ${name}!`);
}

const debouncedSayHello = debounce(sayHello, 2000);


debouncedSayHello("Alice");
debouncedSayHello("Bob"); // Esta chamada será ignorada, pois é feita dentro do intervalo de 2 segundos
