class SomadorNotas{ // criando a classe somador de notas
    constructor() { // definindo o atributo soma
        this.soma = 0
    }

    adicionarNota(nota){ // criando um método para adicionar as notas
        this.soma += nota
        console.log(this.soma)
    }
    versoma() {
        console.log( 'total da soma: ', (this.soma))
      }
}

const somador = new SomadorNotas()

somador.adicionarNota(10);
somador.adicionarNota(8);
somador.adicionarNota(5);

somador.versoma();
