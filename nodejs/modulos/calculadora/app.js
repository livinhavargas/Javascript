 import {somar, subtrair, multiplicar, dividir} from './modulos/calculadora/operacoes.js';
 import * as  calculaIdade from '.modulos/calculadora/idade.js'
// Exemplo de uso das funções
console.log('Soma:',somar(2, 3));
console.log('Subtração:', subtrair(5, 2));
console.log('Multiplicação:', multiplicar(4, 6));
console.log('Divisão:', dividir(10, 2));
console.log('Ano em que a pessoa nasceu:',idade(17));
console.log('Idade calculada:', calculaIdade(2008));