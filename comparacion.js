/*
1. Programa que pida dos numeros y nos diga cual es el mayor, el menor y si son iguales
2. PLUS: Si los numeros no son un número o son menores o iguales a cero, nos vuelva a pedir
*/



var funcion_de_comparacion= function(a,b){

    switch(a,b){
        case 1:
            if(a>b){
                 console.log('el numero '+ a + ' es mayor');
                }else{
                    console.log('el numero '+ a + ' es menor');
                }
                break;

        case 2:
            if(b>a){
                console.log('el numero '+ b + ' es mayor');
                }else{
                    console.log('el numero '+ b+ ' es menor');
                }

                break;

        case 3:
            if(a==b){
                console.log('el numero '+ a+ ' y ' + b + ' son igulaes');
            }
            break;
        

    }
    
}

var numero1=20;
var numero2=30;

funcion_de_comparacion(numero1,numero2);