const tabuleiro = function(){
    for(let j = 0 ; j<3 ; j++){
      let linha = document.createElement('div');
      linha.setAttribute('id', `linha${j}`);
      linha.setAttribute('class', 'linha');
      for(let i = 0 ; i<3 ; i++){
        let casa = document.createElement('p');
        casa.setAttribute('id', `casa${j}-${i}`);  
        casa.setAttribute('class', 'casa branca');
        linha.appendChild(casa);
      }
      document.querySelector('#tabuleiro').appendChild(linha);
    }
}



export default tabuleiro;