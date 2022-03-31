
// variáveis
let cep_insert = document.querySelector('#intp--cep');
let cep = cep_insert.value;
let url = `https://viacep.com.br/ws/${cep}/json`;


function searchCep() {

  // criando uma instância do objeto
  const xhr = new XMLHttpRequest();

  // utilizando o método open para começar a criar a requisição
  xhr.open('GET', url, true);

  // implementando o onreadysatechange para listar alterações no estado do objeto
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200){
      console.log(xhr.responseText);
    }
    else{
      console.log('erro');
    };
  };
  xhr.send();
};