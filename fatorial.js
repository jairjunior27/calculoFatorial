let botao = document.getElementById('btn').addEventListener('click',ok)


 function ok(){
    let numero = document.getElementById('num').value;
    let resultado = document.getElementById('mensagem');
     
    if(numero<0){
        resultado.textContent ='Fatorial não admite numero negativo. ';
    }
    
   resultado.textContent = 'O Valor de '+ numero + '! fatorial' + ' é ' + fatorial(numero) ;
 }

 function fatorial(n){
    
 
    if(n==0){
        return 1;
    }

    if(n==1){
        return 1;
    }

   return n* fatorial(n-1)
    
}
 
 


   

