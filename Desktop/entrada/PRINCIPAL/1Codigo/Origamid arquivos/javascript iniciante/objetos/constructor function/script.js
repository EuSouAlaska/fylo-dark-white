// Transforme o objeto abaixo em uma Constructor Function
/*    const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
      console.log(this.nome + ' andou');
    }
  }; */


  function Pessoa(name,idade) {
    this.name = name;
    this.idade= idade;
   this.andar = function(){
      console.log(this.name + ' andou')
    }
  
  }

 
  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos
  const maria = new Pessoa('maria',25);
  const joao = new Pessoa('joao', 20);
  const bruno = new Pessoa('Bruno', 15);
  
  
  
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados

  // addClass(classe), adiciona a classe a todos os elementos

  // removeClass(classe), remove a classe a todos os elementos
  
  function Dom (elementos){
    const elements = document.querySelectorAll(elementos);
    this.listaItens = elements;

    this.addClass = function(classe) {
      elements.forEach((i)=>
      i.classList.add(classe)
    )};

    this.removeClass = function(classe){
    elements.forEach((i)=> i.classList.remove(classe)
    )};

  }

  const li = new Dom('li')

  li.addClass('aaa', 'ativo')
  li.removeClass('ativo')

  