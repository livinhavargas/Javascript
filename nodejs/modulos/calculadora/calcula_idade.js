function calculaIdade(anonascimento) {
    const anoAtual = new Date().getFullYear();
    return anoAtual - anonascimento;
}

module.exports = calculaIdade;