const funcoesMatematicas = require('./funcoes_matematicas');
const calculaIdade = require('./calcula_idade');

// Exemplo de uso das funções
console.log('Soma:', funcoesMatematicas.somar(2, 3));
console.log('Subtração:', funcoesMatematicas.subtrair(5, 2));
console.log('Multiplicação:', funcoesMatematicas.multiplicar(4, 6));
console.log('Divisão:', funcoesMatematicas.dividir(10, 2));
console.log('Ano em que a pessoa nasceu:', funcoesMatematicas.idade(17));
console.log('Idade calculada:', calculaIdade(2008));