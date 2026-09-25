let paginas=document.querySelectorAll('.pagina');
let atual=0;

paginas[0].classList.add('ativa');

function mostrarAlbum(){
 if(atual < paginas.length-1){
   paginas[atual].classList.remove('ativa');
   atual++;
   paginas[atual].classList.add('ativa');
 }
}
