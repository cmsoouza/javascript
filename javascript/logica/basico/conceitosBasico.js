/**
 * Escreva um programa que leia as notas das duas avaliações normais
 * e a nota da avaliação optativa.
 * 
 * Caso o aluno não tenha feito a nota optativa deve ser fornecido o valor
 * -1.
 * 
 * Calcular a media do semestre considerando que a prova optativa substitui a nota
 * mais baixa entre as duas primeiras avaliações, se a nota optativa for maior que
 * uma das duas notas.
 * 
 * Escrever a média e mensagens que indiquem se o aluno foi aprovado, ou reprovado
 * ou está em exame, de acordo com as informações abaixo;
 * 
 *      Se a média for maior igual a 6
 *      aprovado
 *      Se a média for menor que 3
 *      Reprovado
 *      Se média for maior igual a 3 e menor que 6
 *      exame.
 * 
 */

console.log('Inicio da Aplicação')
const avaliacao1 = 9
const avaliacao2 = 8
let avaliacaoOptativa = 2

console.log(avaliacao1, avaliacao2, avaliacaoOptativa);

if (avaliacaoOptativa == undefined) {
    avaliacaoOptativa = -1
    console.log(avaliacaoOptativa)
}

function calcularMedia(nota1, nota2, notaOptativa) {
    if (nota1 < nota2) {
        nota1 = notaOptativa
    } else if (nota2 < nota1) {
        nota2 = notaOptativa
    }
    console.log(nota1, nota2, notaOptativa)
}
calcularMedia(avaliacao1, avaliacao2, avaliacaoOptativa);


/**
 * anotaçoes;
 * 1.   Quando passamos argumentos sem valores, os paramentros anexados na chamada da
 *      função atribui valores para os argumentos. Assim a instrução passada para 
 *      função executa o algoritmo da aplicação.
 * 
 * 2.   Passando uma estrutura condicional if/else para calcular a media entre as
 *      avaliações na chamada da função.
 */