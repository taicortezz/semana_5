// questão 8
class animal { // criando a classe
    constructor(nome, idade) { // definindo atributos
        this.nome = nome
        this.idade = idade
    }
    descrever() { //criando um método para descrever o animal
        console.log('o nome é ' + this.nome + ' e a idade ' + this.idade) // o que o código vai imprimir
    }
}

class Gato extends animal { // criando a classe gato que é uma herança da classe animal.
    constructor(nome, idade, cor) { // definindo os atributos
        super(nome, idade) //atributos herdados da classe animal
        this.cor = cor // novo atributo

    }

    miar() {
        console.log('o gato mia') // criando um método para o gato

    }

    descrever() { //criando um método para descrever o animal
        console.log('o nome é ' + this.nome + ' a idade ' + this.idade + ' e a cor ' + this.cor)
    }
    
}
// criando o objeto
const gato = new Gato('gato', 2, 'preta' )
const cachorro = new animal('cachorro', 5)

// chamando o método descrever do objeto
gato.descrever();
cachorro.descrever();
gato.miar();



