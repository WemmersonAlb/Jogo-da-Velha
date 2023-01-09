const tabuleiro = function(){
    for(let j = 0 ; j<3 ; j++){
      let linha = document.createElement('div');
      linha.setAttribute('id', `linha${j}`);
      linha.setAttribute('class', 'linha');
      for(let i = 0 ; i<3 ; i++){
        let casa = document.createElement('div');
        casa.setAttribute('id', `casa${i}`);  
        casa.setAttribute('class', 'casa');
        linha.appendChild(casa);
      }
      document.querySelector('#tabuleiro').appendChild(linha);
    }
}
export default tabuleiro;