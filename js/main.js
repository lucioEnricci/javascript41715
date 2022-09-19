let solicitud = [];

let nombre = prompt("Indique su nombre: ")

function inicio(nombre){
    let inicio = prompt("Buenos dias "+nombre+ " desea solicitar un prestamo?: \n si \n no");

    while (inicio != "si" && inicio != "no"){
        alert("por favor "+nombre+ "ingrese si o no");
        inicio = prompt(nombre+" Desea solicitar un prestamo?: \n si \n no");
    }
    
    if (inicio == "si"){
        alert("Buena eleccion "+nombre+"!, tenemos prestamos personales de hasta 18 coutas!!")
    } else {
        alert("Muchas gracias por su consulta "+nombre+", vuelva pronto!");
    }
}

inicio(nombre);


let monto = 0;
let cuotas = 0;
while(inicio != "no"){
    calcularCuotas();
    }

function calcularCuotas (){
    monto = parseFloat(prompt("Ingrese cuanto desea solicitar: \n(monto maximo para monotributista $250.000) "));
    if (monto > 250000){
        alert("El monto no puede ser superior a $250.000, por favor elija otra opcion")
    }else {
        cuotas = parseInt(prompt("Indique en cuantas cuotas desea solicitar su prestamo? \n 1 cuota (5% interes) \n 3 coutas (8% interes) \n 6 cuotas (12% interes) \n 12 cuotas (20% interes) \n 18 cuotas (30% interes)"))
        switch(cuotas){
            case 1:
                let monto5 = monto*1.05;
                let cuota5 = monto5 / cuotas
                console.log("Su prestamo sera de "+monto+" en "+cuotas+" cuotas con un interes del 5%, total a pagar $"+monto5);
                console.log("Debera pagar "+ monto5 + " en "+ cuotas + " cuotas de $" + cuota5);
                break;
            case 3:
                let monto8 = monto*1.08;
                let cuota8 = monto8 / cuotas
                console.log("Su prestamo sera de "+monto+" en "+cuotas+" cuotas con un interes del 8%, total a pagar $"+monto8);
                console.log("Debera pagar "+ monto8 + " en "+ cuotas + " cuotas de $" + cuota8);
                break;
            case 6:
                let monto12 = monto*1.12;
                let cuota12 = monto12 / cuotas
                console.log("Su prestamo sera de "+monto+" en "+cuotas+" cuotas con un interes del 12%, total a pagar $"+monto12);
                console.log("Debera pagar "+ monto12 + " en "+ cuotas + " cuotas de $" + cuota12);
                break;   
            case 12:
                let monto20 = monto*1.20;
                let cuota20 = monto20 / cuotas;
                console.log("Su prestamo sera de "+monto+" en "+cuotas+" cuotas con un interes del 20%, total a pagar $"+monto20);
                console.log("Debera pagar "+ monto20 + " en "+ cuotas + " cuotas de $" + cuota20);
                break;   
            case 18:
                 let monto30 = monto*1.30;
                let cuota30 = monto30 / cuotas;
                console.log("Su prestamo sera de "+monto+" en "+cuotas+" cuotas con un interes del 30%, total a pagar $"+monto30);
                console.log("Debera pagar "+ monto30 + " en "+ cuotas + " cuotas de $" + cuota30);
                break;   
            default:
                alert("Por favor elija una opcion correcta!");
                break;
            } inicio = prompt("Desea consultar otro monto: \n si \n no");
        }
    }


    
    