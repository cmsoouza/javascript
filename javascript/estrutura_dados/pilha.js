var pilha = [];
pilha.push("Livro 1")
pilha.push("Livro 2")
pilha.push("Livro 3")//ultimo a entrar na (stack) é o primeiro a ser executado.

console.log(pilha);

pilha.pop();//remove o ultimo elemento (livro 1)
pilha.push("Livro 4");

console.log(pilha);

pilha.pop()
pilha.push('Livro 5')
pilha.pop()

//console.log(pilha);

/**
 * anotações;
 * 1.   o mesmo exemplo porem agora substituindo o " shift() " por " pop() " sempre
 *      com definindo o conceito de pilha.
 * 
 * 2.   Conceito de pilha (stack ou filo) "Last-out First-in". ultimo a ser inserido
 *      é o primeiro a ser executado.
 */