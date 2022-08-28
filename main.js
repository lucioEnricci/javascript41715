//simulador para calcular los multiplos de un numero X pedido al usuario mediante prompt

let x = parseInt(prompt("Ingrese un numero: "));

for (let i = 1; i<= x ; i++) { 
    if ((x % i) == 0){
        console.log(i+" es multiplo de "+x);
    }else{
        console.log(i+" no es multiplo de "+x);
    }
}