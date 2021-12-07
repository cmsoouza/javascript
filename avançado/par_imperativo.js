const notas = [8.7, 6.8, 7.7, 7.7, 9.2, 5.3, 8.0]

function media(notas) {
    let total = 0
    for (let i = 0; i < notas.length; i++) {
        total += notas[i]
    }
    return total / notas.length
}

const mediaTurma = media(notas)
console.log(`Média é ${mediaTurma}`);


/**
 * anotações;
 * 1.   Estrutura de codigo imperativo;
 *          1.1 foco no fluxo
 *          1.2 estados mutaveis
 *          1.3 O "como" é exemplo de um codigo "imperativo"
 *          1.4 Maior quantidade de codigo
 *          1.5 baixo nivel de escalabilidade
 *          1.6 mais conhecido
 *          1.7 mais explícito  
 * 
 * 2.   Para esse codigo temos uma paradigma imperativo que mostra
 *      "como deve ser feito".   
 * 
 */