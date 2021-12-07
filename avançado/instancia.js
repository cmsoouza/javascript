//funcao define a estrutura do objeto gerando um new
function funcionario(nome, cargo, salario) {
    this.nome = nome
    this.cargo = cargo
    this.salario = salario
}

const funcionario1 = new funcionario(`${'Ana', 'Analista de TI', 'R$8200'}`)
const funcionario2 = new funcionario('Pedro', 'Gerente de TI', 15200)
const funcionario3 = new funcionario('Cristian', 'Contador', 10500)

console.log(funcionario1);
console.log(funcionario2);
console.log(funcionario3);

/**
 * anotações:
 * 1. Quando possuimos uma (funcao) que possui esses "atributos" passados e criamos
 *    a palavra operador (new) para criar um (objeto), isso é chamado de "instancia"
 *    pois o novo (objeto) obece a estrutura criada pela (funcao).
 * 
 * 2. "Construtor" é quando passamos o "new" para uma função criando um (objeto).
 *     o conceito chave e chamar uma "funcao construtora" para criar um (objeto).
 * 
 * 3. Nessa estrutura (objeto) criado aparti de uma (class)
 */