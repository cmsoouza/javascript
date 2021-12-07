function Bolo(nome) {
    this.nome = nome
    this.sabor = function () {
        return 'Que bolo gostoso!'
    }
}

let bolo1 = new Bolo("Formigueiro")
let bolo2 = new Bolo("Chocolate")

console.log(bolo1.nome);
console.log(bolo2.nome);
console.log(bolo1 == bolo2);

/**
 * anotações;
 * 1. Bolos sao objetos diferentes, mesmo na sintaxe de JS
 * 
 * 2. Com a reutilização do codigos, do operador (new) novo objetos como "BOLO" podem ser 
 *    criados. Isso quer dizer;
 *      2.1 caracteristicas como nome (atributos)
 *      2.2 sabor que é (metodo)
 * 
 * 3. Referencia dessa "função construtora" podem reusar o codigo ou fazer qualquer
 *    manutenção no reuso da estrutura.
 */