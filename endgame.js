const endgame = ()=>{
    let casax = [[0,0,0],[0,0,0],[0,0,0]];
    let casao = [[0,0,0],[0,0,0],[0,0,0]];

    for(let i = 0; i<3 ; i++){
        for(let j = 0; j<3; j++){
            let aux = document.querySelector(`#casa${i}-${j}`).classList.contains('usax');
            
            if(aux){
                casax[i][j] = 1;
            } 
            aux = document.querySelector(`#casa${i}-${j}`).classList.contains('usao');         
            if(aux){
                casao[i][j] = 1;
            }

        }
    }
    
    if(casax[0][0]==1&&casax[0][1]==1&&casax[0][2]==1){
        return 'x';
    }else if(casax[0][0]==1&&casax[1][0]==1&&casax[2][0]==1){
        return 'x';
    }else if(casax[2][0]==1&&casax[2][1]==1&&casax[2][2]==1){
        return 'x';
    }else if(casax[0][2]==1&&casax[1][2]==1&&casax[2][2]==1){
        return 'x';
    }else if(casax[0][0]==1&&casax[1][1]==1&&casax[2][2]==1){
        return 'x';
    }else if(casax[0][2]==1&&casax[1][1]==1&&casax[2][0]==1){
        return 'x';
    }else if(casax[0][1]==1&&casax[1][1]==1&&casax[2][1]==1){
        return 'x';
    }else if(casax[1][0]==1&&casax[1][1]==1&&casax[1][2]==1){
        return 'x';
    }else if(casao[0][0]==1&&casao[0][1]==1&&casao[0][2]==1){//começa bola
        return 'o';
    }else if(casao[0][0]==1&&casao[1][0]==1&&casao[2][0]==1){
        return 'o';
    }else if(casao[2][0]==1&&casao[2][1]==1&&casao[2][2]==1){
        return 'o';
    }else if(casao[0][2]==1&&casao[1][2]==1&&casao[2][2]==1){
        return 'o';
    }else if(casao[0][0]==1&&casao[1][1]==1&&casao[2][2]==1){
        return 'o';
    }else if(casao[0][2]==1&&casao[1][1]==1&&casao[2][0]==1){
        return 'o';
    }else if(casao[0][1]==1&&casao[1][1]==1&&casao[2][1]==1){
        return 'o';
    }else if(casao[1][0]==1&&casao[1][1]==1&&casao[1][2]==1){
        return 'o';
    }
    
}

export default endgame;