let inputCheckbox = document.getElementById('change-theme');
// console.log(inputCheckbox)

let iconesCheckbox = document.getElementsByClassName('bi');

let header = document.querySelector('header')

let artigos = document.querySelector('article')
console.log(artigos)

let body = document.querySelector('body');

let iconesRedesSociais = document.querySelector('.fa-brands')
console.log(iconesRedesSociais)

let nomeFundadores = document.querySelectorAll('.container-photo-fundadores')
console.log(nomeFundadores)

let footer = document.querySelector('footer')
console.log(footer)



inputCheckbox.addEventListener('change', function(){
  for (var i = 0; i < nomeFundadores.length; i++) {
    var h3 = nomeFundadores[i].getElementsByTagName("h3");
    nomeFundadores[i].classList.toggle('nova-cor');
  }
  // console.log(inputCheckbox.checked)
  if (inputCheckbox.checked){
    iconesCheckbox[1].style.display = 'block';
    iconesCheckbox[0].style.display = 'none';
    header.classList.toggle("cabecalho-dark")
    body.classList.toggle("body-dark")
    artigos.classList.toggle("artigo-segunda-opcao")
    footer.classList.toggle('menu-rodape2')
  }else{
    iconesCheckbox[1].style.display = 'none';
    iconesCheckbox[0].style.display = 'block';
    header.classList.toggle("cabecalho-dark")
    body.classList.toggle("body-dark")
    artigos.classList.toggle("artigo-segunda-opcao")
    footer.classList.toggle('menu-rodape2')
  }
})

//? O evento "change" em JavaScript é acionado quando um elemento HTML, como um campo de entrada de texto, uma caixa de seleção (checkbox), um botão de opção (radio button) ou um menu suspenso (select), tem seu valor alterado pelo usuário.




