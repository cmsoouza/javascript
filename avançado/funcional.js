const alunos = [
    {nome: 'Ana', nota: 9.5},
    {nome: 'Bia', nota: 7.3},
    {nome: 'Gil', nota: 5.8},
    {nome: 'Leo', nota: 7.6},
    {nome: 'Gui', nota: 9.1},
    {nome: 'Lia', nota: 4.9},
    {nome: 'Rui', nota: 7.0},
]

const estaAprovado = alunos => alunos.nota <= 7
const aprovados = alunos.filter(estaAprovado)
console.log(aprovados);


/**
 * anotaçoes;
 * 1.   Essa estrutura é (funcional) pois passamos uma função que adota os paramentros
 *      usando um metodo (filter) para filtrar as informações que necessitamos no console.
 * 
 * 2.   caracteristicas principais da programação funcional;
 *          2.1 imutabilidade;
 *          2.2 ausencia de efeitos colaterais
 * 
 * 3.   conceitos;
 *          3.1 "imutabilidade" uso de funções e nao se usa declarações de (var/let) para evitar
 *              modificações de valores usando (const) defini a nao alteração dos dados.
 *          3.2 "ausencia de efeitos colaterais" indica que nao podemos espera alterações nos resu
 *              tados das declarações nos codigos que possui o efeito de "imutabilidade".
 * 
 * 4.   Percebemos tambem como caracteristica de nao passar "interações" e o codigo é menor. Passando
 *      'o que eu quero que cada funçao' possa executa com cada resposanbilidade.
 *          
 */