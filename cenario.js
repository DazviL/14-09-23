// Cenário 1: Uso do for para deixar em ordem alfabética uma matriz com nomes
let nomes = ["Maria", "João", "Carlos", "Ana", "Pedro"];
nomes.sort();
console.log("Cenário 1: Nomes em ordem alfabética:", nomes);

// Cenário 2: Uso do while para classificar uma matriz em ordem decrescente
let numeros = [5, 2, 9, 1, 7];
let i = 0;

while (i < numeros.length) {
  let j = i + 1;
  while (j < numeros.length) {
    if (numeros[i] < numeros[j]) {
      let temp = numeros[i];
      numeros[i] = numeros[j];
      numeros[j] = temp;
    }
    j++;
  }
  i++;
}
console.log("Cenário 2: Números em ordem decrescente:", numeros);

// Cenário 3: Uso do switch/case para realizar uma busca no banco de dados
let frutas = ["maçã", "banana", "abacaxi", "laranja", "uva"];
let busca = "abacaxi";

switch (busca) {
  case "abacaxi":
    console.log("Cenário 3: Abacaxi encontrado no banco de dados.");
    break;
  default:
    console.log("Cenário 3: Fruta não encontrada no banco de dados.");
}

// Cenário 4: Uso do try/catch para personalizar uma mensagem de erro
function buscarNoBancoDeDados() {
  throw new Error("Erro ao buscar no banco de dados");
}

try {
  buscarNoBancoDeDados();
} catch (error) {
  console.log("Cenário 4: Ocorreu um erro ao buscar no banco de dados: " + error.message);
}

// Cenário 5: Uso do algoritmo IF para validar a entrada de um usuário
let usuario = {
  nome: "João",
  idade: 25,
  email: "joao@email.com",
  senha: "senha123"
};

let entradaUsuario = {
  email: "joao@email.com",
  senha: "senha1234"
};

if (entradaUsuario.email === usuario.email && entradaUsuario.senha === usuario.senha) {
  console.log("Cenário 5: Login bem-sucedido. Bem-vindo, " + usuario.nome + "!");
} else {
  console.log("Cenário 5: Credenciais inválidas. Por favor, verifique seu email e senha.");
}
