function pertenceFibonacci(numero) {
  let a = 0;
  let b = 1;
  
  if (numero === a || numero === b) {
    return `O número ${numero} pertence à sequência de Fibonacci.`;
  }

  for (let i = 2; ; i++) {
    let proximo = a + b;
    
    if (proximo === numero) {
      return `O número ${numero} pertence à sequência de Fibonacci.`;
    }

    else if (proximo > numero) {
      return `O número ${numero} não pertence à sequência de Fibonacci.`;
    }

    a = b;
    b = proximo;
  }
}

// Teste
const numero = 21;
console.log(pertenceFibonacci(numero));

