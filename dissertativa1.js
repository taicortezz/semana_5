// questão 7
class animal{ // criando a classe
constructor(nome, idade){ // definindo atributos
    this.nome = nome 
    this.idade = idade
}
descrever() { //criando um método para descrever o animal
console.log('o nome é ' + this.nome + ' e a idade ' + this.idade) // o que o código vai imprimir
}
}
// criando o objeto
const gato = new animal('gato', 2) 
const cachorro = new animal( 'cachorro', 5)
// chamando o método descrever do objeto.
gato.descrever();
cachorro.descrever();



