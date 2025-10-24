module.exports = {
    verificaLogin: (email, senha ) => {
    let emailSenha;

    if (email === "livialinda@gmail.com" && senha === "livia17") {
    emailSenha = "Válido";
    } else {
      emailSenha = "Inválido";
    }

    return emailSenha `Olá! Seu login está ${emailSenha}`;
  }

};
