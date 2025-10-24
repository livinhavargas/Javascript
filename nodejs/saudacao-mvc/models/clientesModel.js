module.exports = {

    verificaLogin: (email, senha ) => {
    let acesso;

    if (email === "livialinda@gmail.com" && senha === "livia17") {
    acesso= "Válido";
    } else {
      acesso= "Inválido";
    }

    return `Olá! Seu login está ${acesso}`;
  }

};
