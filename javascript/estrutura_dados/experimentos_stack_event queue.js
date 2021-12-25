function fn5() {
    console.log('timeout')
}
function fn4 () {
    fn5()
}

function fn3() {
    setTimeout(() => fn4(), 3000)
    console.log('fn3')
}
function fn2() {
    fn3()
}
function fn1() {
    fn2()
}
function main() {
    fn1()
}

main();
console.log('fim');

/**
 * anotações;
 * 1.   A primeira função main() executará a função fn1() e assim por diante..., quan
 *      do chegar no topo a fn3 exibirá a informação no console.
 * 
 * 2.   Quando declaramos o metodo setTimeout() na função fn3() ele voltará a chamar
 *      as funções abaixo que estao na pilha de execução para depois quando passar
 *      os 3s na fila de execução possa ser executada o console dentro da função fn3.
 */