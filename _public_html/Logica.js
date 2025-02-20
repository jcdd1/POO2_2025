//Inicialización de variables
let tarjetas_destapadas = 0;
let tarjeta1 = null; 
let tarjeta2 = null;    
let primerResultado = null;
let segundoResultado = null;
let movimiento = 0;
let aciertos = 0;
let temporizador = false;
let timer = 60;
let tiemporestante = null;
let timerInicial = 60;

//Apuntado a documento HTML
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('tiempo');
//Generación de números aleatorios
let numbers = ['😲','😲','😖','😖','🤯','🤯','🤑','🤑','🖤','🖤','🤍','🤍','⛴','⛴','✈','✈']
numbers = numbers.sort(()=>{return Math.random()-0.5})
console.log(numbers);


//Función tiempo
function contarTiempo(){
   tiemporestante = setInterval(() => {
        timer--;
        mostrarTiempo.innerHTML = 'Tiempo restante: ' + timer + ' Seg';
        if(timer == 0){
            clearInterval(tiemporestante);
            bloquearTarjetas();
        }
        
    }, 1000);
}

//Función de bloqueo de tarjetas
function bloquearTarjetas(){
    for (let i = 0; i<=15; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = numbers[i];
        tarjetaBloqueada.disabled = true; 
    }
}


//Función principal
function destapar(id){

    if(temporizador == false){
        contarTiempo();
        temporizador = true;
    }


    
    tarjetas_destapadas++;
    console.log(tarjetas_destapadas);

    if(tarjetas_destapadas == 1 ){
        //Se destapa el primer número para mostrarlo
        tarjeta1 = document.getElementById(id);
        primerResultado = numbers[id];
        tarjeta1.innerHTML = primerResultado;

        //Deshabilitar el primer botón
        tarjeta1.disabled = true;
    }else if(tarjetas_destapadas == 2){
        //Se destapa el segundo número y se muestra 
        tarjeta2 = document.getElementById(id);
        segundoResultado = numbers[id];
        tarjeta2.innerHTML = segundoResultado;

        //Deshabilitar el segundo botón
        tarjeta2.disabled = true;

        //Se incrementan los movimientos
        movimiento ++;
        mostrarMovimientos.innerHTML = 'Movimientos: ' + movimiento;

        if(primerResultado == segundoResultado){
            //Se encierra el contador de tarjetas destapadas
            tarjetas_destapadas = 0;

            //Aciertos
            aciertos ++;
            mostrarAciertos.innerHTML = 'Aciertos: ' + aciertos;
            if(aciertos == 8)
            {
                clearInterval(tiemporestante);
                mostrarAciertos.innerHTML = 'Aciertos: ' + aciertos + ' Felicidades👌';
                mostrarTiempo.innerHTML = 'Felicidades te demoraste: ' + (timerInicial - timer) + ' segundos';
            }

        }
        else{
            //Mostrar los valores y volver a tapar
            setTimeout(() => {
                tarjeta1.innerHTML = '';
                tarjeta2.innerHTML = '';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetas_destapadas = 0;
            }, 850);
        }
    }
} 