const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2));
console.log(media);
console.log(media.toString(2));
console.log(typeof media);
console.log(typeof Number);



/**
 * anotações;
 * 1.   Metodos em numbers;
 *          1.1 "isInterger" determina se o valor passado é um inteiro (true/false)
 *          1.2 "toFixed" formata um numero utilizando notação ponto fixo.
 * 
 * 4.   caracteristicas de math;
 *          4.1 Um objeto que defini operações matematicas
 *          4.2 Math.PI relação entre circuferencia de um circulo e seu diametro
 *          4.3 Math.pow metodo que retorna a base e eleva a potencia (x,y)
 * 
 */

