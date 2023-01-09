import tabuleiro from './tabuleiro.js';


const enviar = document.querySelector('#enviar');

enviar.addEventListener('click', ()=>{
    const divTabuleiro = document.querySelector('#tabuleiro');
    divTabuleiro.style = 'display:flex;';
    tabuleiro();
    const form = document.querySelector('form');
    form.style = 'display:none;';
});
