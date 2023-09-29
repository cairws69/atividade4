const listaValores = [10, 12, 15, 35, 40];

// Função para calcular a média
function calcularMedia(lista) {
  const soma = lista.reduce((acumulador, valor) => acumulador + valor, 0);
  return soma / lista.length;
}

// Função que devolve os valores maiores que a média
function valoresMaioresQueMedia(lista) {
  const media = calcularMedia(lista);
  return lista.filter(valor => valor > media);
}

// Função que devolve o menor valor da lista
function menorValor(lista) {
  return Math.min(...lista);
}

// Função que devolve a soma dos itens da lista
function somaItens(lista) {
  return lista.reduce((acumulador, valor) => acumulador + valor, 0);
}

// Função que devolve os valores menores que 20
function valoresMenoresQueVinte(lista) {
  return lista.filter(valor => valor < 20);
}

// Exemplos de uso das funções
console.log("Valores maiores que a média:", valoresMaioresQueMedia(listaValores));
console.log("Menor valor da lista:", menorValor(listaValores));
console.log("Soma dos itens da lista:", somaItens(listaValores));
console.log("Valores menores que 20:", valoresMenoresQueVinte(listaValores));
