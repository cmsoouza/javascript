function produto(a) {
    return function (b) {
        return a * b;
    }
}
var dobro = produto(2);
console.log(dobro(8));
console.log(produto(2)(8));

//outra forma de escrita
const produto2 = a => b => a * b;
var dobro = produto2(10);
console.log(dobro(2));
console.log(produto2(10)(2));
/**
 * anotações;
 * 1. (linha '7) quebra com um chamada dentro de variavel
 * 2. (linha '8) aqui é direto, produto passando o primeiro e o segundo
 * paramentro referente a "a" e "b".
 */