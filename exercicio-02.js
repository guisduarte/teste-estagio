function verificarLetraA(string) {
  let contador = 0;

  // Loop para verificar cada caractere na string
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === 'a') {
      contador++;
    }
  }

  if (contador > 0) {
    return `A letra 'a' aparece ${contador} vezes na string.`;
  } else {
    return `A letra 'a' não aparece na string.`;
  }
}

// Teste
const texto = "Aprender JavaScript é uma ótima atividade!";
console.log(verificarLetraA(texto));
