function fatorial(n) {
    if (n < 0) {
        throw new Error("O número deve ser maior ou igual a zero.");
    }

    if (n === 0) {
        return 1;
    }
    
    return n * fatorial(n - 1);
}

try {
    console.log(fatorial(5)); 
    console.log(fatorial(0)); 
    console.log(fatorial(-3)); 
} catch (error) {
    console.error(error.message);
}