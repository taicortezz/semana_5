class funcionarios { //definindo a classe funcionários
  constructor(nome, idade, salario_base) { // definindo atributos
    this.nome = nome
    this.idade = idade
    this.salario_base = salario_base
  };
}

class professor extends funcionarios { // criando a classe professor que é uma herança da classe funcionarios.
  constructor(nome, idade, disciplina, salario_base, horasdeaulaporsemana, valordahora) {// definindo os atributos
    super(nome, idade, salario_base); //atributos herdados da funcionarios
    this.disciplina = disciplina; //novos atributo
    this.horasdeaulaporsemana = horasdeaulaporsemana; // novo atributo
    this.valordahora = valordahora;
  }
  calcularSalario() { // criando um método para calcular o salário
    this.salarioT = (this.valordahora * this.horasdeaulaporsemana) + this.salario_base
    console.log(this.salarioT) //o que o código vai imprimir
  }
}
//criando objetos da classe professor
const prof_mat = new professor('marina', 46,'matematica', 4500, 10, 25)
const prof_port = new professor('Nilson', 53,'portugues',3500, 12, 20)

//chamando o método calcular salario para os objetos criados.
prof_mat.calcularSalario() 
prof_port.calcularSalario()

