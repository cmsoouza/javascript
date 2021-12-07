const alunos = [
    {nome: 'Ana', nota: 9.5},
    {nome: 'Bia', nota: 7.3},
    {nome: 'Gil', nota: 5.8},
    {nome: 'Leo', nota: 7.6},
    {nome: 'Gui', nota: 9.1},
    {nome: 'Lia', nota: 4.9},
    {nome: 'Rui', nota: 7.0},
]
const aprovados = []
for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nota >=7) {
        aprovados.push(alunos[i])
    }
}
console.log(aprovados);

/**
 * anotações;
 * 1. Codigo que possui imutabilidade, que aceita o que eu passo pra ser feito. Sendo 
 *    exemplo de codigo no paradigma (procedural).
 * 
 * 2. Alem de possui uma (const) porem o seu conteudo pode ser mudado na execução do 
 *    codigo.
 * 
 * 3. tambem podemos perceber dentro da estrutura a declaração das interações com a
 *    função.
 */