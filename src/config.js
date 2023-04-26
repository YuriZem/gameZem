
var botao = document.getElementById("pular")
var personagem = document.getElementById("personagem")

botao.addEventListener('click',pular,'false')

function pular(){
  console.log('pulou')
  
  personagem.classList.add('pulo')
  
  setTimeout(()=>{
    personagem.classList.remove('pulo')
  },1000)
}