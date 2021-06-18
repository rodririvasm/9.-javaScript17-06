const  meses=['enero','febrero','marzo','abril','mayo','juio','julio'];
console.log(meses[0]);

document.write('el mes es: '+ meses[0]);

for(let i=0; i<=6;i++){
    document.write(' ',meses[i] + ', ');
    console.log(meses[i]);
}


/*
const multiplicar= (numero) =>{
    for(let i=0;i<=10;i++){
        console.log( numero + 'x' + i +'='+ numero*i);
    }

}
*/

const multiplicar= (numero) =>{
    for(let i=0;i<=10;i++){
        console.log(`${numero} x ${i}=${i*numero}`);
    }

}

multiplicar(7);
