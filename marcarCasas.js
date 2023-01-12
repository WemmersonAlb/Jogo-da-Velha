import endgame from './endgame.js';

let placarX = 0;
let placarO = 0;
let placarAUX;
let ultimaJogada = 0;

const marcarCasas = function(){
    for(let i = 0 ; i<3 ; i++){
      for(let j = 0 ; j<3 ; j++){
        let casa = document.querySelector(`#casa${i}-${j}`);
        casa.addEventListener('click', ()=>{
          ultimaJogada++;
          let estadoDaCasa = casa.classList.contains('branca');    
          if(estadoDaCasa){
            let jogador1 = document.querySelector('#jogador1').classList.contains('usax');
            
            if(jogador1){
                casa.innerHTML = 'X';
                document.querySelector('#jogador1').setAttribute('class', 'usao');
                casa.setAttribute('class', 'casa usax');
                casa.style = 'color:#F820CA;';
                document.querySelector('#mensagem').innerHTML = 'É a vez da Bola!!!'
              }else{
                casa.innerHTML = 'O';
                casa.setAttribute('class', 'casa usao');
                document.querySelector('#jogador1').setAttribute('class', 'usax');
                casa.style = 'color:#68F820;';
                document.querySelector('#mensagem').innerHTML = 'É a vez do Xis!!!'
            }
            
          }
          placar();
        });
      }
    }
}

function placar(){
  placarAUX = endgame();
  console.log(endgame())
  if(placarAUX == 'x'){
      mensagem.innerHTML = 'O Xis ganhou essa!!!<br>Vamos mais uma? =D';
      placarX = placarX+1;
      document.querySelector('#placar-x').innerHTML = `${placarX}`;
      travar();
  }else if(placarAUX == 'o'){
      placarO = placarO +1;
      mensagem.innerHTML = 'A bola ganhou essa!!!<br>Vamos mais uma? =D';
      document.querySelector('#placar-o').innerHTML = `${placarO}`;
      travar();
  }else if(ultimaJogada==9){
      mensagem.innerHTML = 'Deu empate!!!<br>Que tal mais uma? ^^';
  }
}

function travar(){
  for(let i= 0; i<3;i++){
    for(let j=0;j<3;j++){
      let casa = document.querySelector(`#casa${i}-${j}`);
      casa.setAttribute('class', 'casa');
    }
  }
}

export default marcarCasas;