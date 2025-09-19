
import fs from 'fs;'
// Lê o conteúdo de um arquivo de forma assíncrona
fs.readFile('exemplo.txt', 'utf8', (erro, dados) => {
    // Verifica se houve um erro na leitura do arquivo
    if (erro) {
        console.error('Erro ao ler o arquivo:', erro);
        return;
    }
    // Exibe o conteúdo do arquivo no console
    console.log('Conteúdo do arquivo:', dados);
});
// Esta mensagem é exibida antes da leitura do arquivo ser concluída
console.log('Esta mensagem aparece primeiro.');