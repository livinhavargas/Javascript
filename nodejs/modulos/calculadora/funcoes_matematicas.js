export function somar(a, b) {
    return a + b;
}

export unction subtrair(a, b) {
    return a - b;
}

export function multiplicar(a, b) {
    return a * b;
}

export function dividir(a, b) {
    if (b === 0) throw new Error('Divisão por zero');
    return a / b;
}

export function idade(anos) {
    return 2025 - anos;
}
