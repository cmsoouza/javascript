const x = 'global'

function fora() {
    const x = 'Local'                               
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao());


//Acessando a variavel global
let y = "Global"
 
function meuMetodo() {
    this.y = "Local"
    return console.log(this.y, y)
}
 
meuMetodo();

/**
 * anotações;
 *  1. A funcao "fora()" criar uma (const x = "local"), e depois define uma funcao
 *    "dentro()". A funcao " dentro() " é uma funcao aninhada. ela é
 *     definida dentro da função " fora() " e está definida somente dentro do escopo
 *     daquela funcao. funcao " dentro() " nao possui variavel definida entao a
 *     funcao closure reusa a variavel da funcao pai.
 * 
 * 2. No segundo caso temos um exemplo se quisessemos acessar as duas variaveis
 *    (global e local) referenciando o "this". para local que isolaria as duas varia
 *    veis (var y, y). Neste caso nao é um exemplo de "closure" pois nao possui essa
 *    interação entre "funções".
 * 
 * 3. "Closure" é o escopo criado quando uma função é executada, e permite a função
 *    acessar valores externos a ela.
 * 
 * 4. o "closure" da função dentro é a função " fora() ", ja que a função dentro tem
 *    acesso a tudo que é declarado dentro da função fora, e o closure da função fora
 *    é o escopo global deste arquivo.
 * 
 * 5.   
 */
