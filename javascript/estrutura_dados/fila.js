var fila = []

fila.push(1)
fila.push(2)
fila.push(3)
console.log(fila);

fila.shift()

fila.push(4)
console.log(fila);

fila.shift()
fila.shift()
console.log(fila);


/**
 * anotações;
 * 1.   Os metodos "push" acrecenta um elemento no final do (arrays) assim aumentando
 *      seu tamanho, ja o "shift()" remove o primeiro elemento no inicio do
 *      arrays.
 * 
 * 2.   O conceito de fila defini que o "primeiro que entra na execução do codigo é
 *      o primeiro a ser executado ou sai". No entanto a fila trabalha nao depende
 *      de como a pilha entende a execução dos processos, isso quer dizer que tanto
 *      na fila ou pilha a ordem é o que entra sai.
 * 
 * 3.   conceito de fila (FIFO) First-in - First-out
 */