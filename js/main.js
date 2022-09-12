const usuarios = [{

    nombre: "pedro"
},

{
    nombre: "sandra",
},

{
    nombre: "maria",
},

{
    nombre: "juan",
}
];

const mostrarUsuarios = () =>{

    let todosLosUsuarios = usuarios.map((usuario) => usuario.nombre);
    
    alert(todosLosUsuarios.join(" - "));
}

let dividendo = [];

let inicio = prompt("Desea agregar un gasto grupal?: \n si \n no");

while (inicio != "si" && inicio != "no"){
    alert("por favor ingrese si o no");
    inicio = prompt("Desea agregar un gasto grupal?: \n si \n no");
}
let cargarGasto = 0;

if (inicio == "si"){
    alert("Los participantes del grupo son: ")
    mostrarUsuarios();
} else {
    alert("Muchas gracias por usar nuestra app, vuelva pronto!");
}




while(inicio != "no"){
    cargarGasto = parseFloat(prompt("Ingrese gasto a cargar: "));

    while (isNaN(cargarGasto)){
        alert("Por favor ingrese solo un valor numerico!");
        cargarGasto = parseFloat(prompt("Ingrese gasto a cargar: "));
    }

    let comprador = prompt("Indique quien realizo el gasto a dividir: ");

    let gasto = 0;
   
    if (
        comprador == "pedro" ||
        comprador == "sandra" ||
        comprador == "juan" ||
        comprador == "maria"
    ) {
        switch (comprador){
            case "pedro":
                gasto = cargarGasto;
                break;
            case "sandra":
                gasto = cargarGasto;
                break;
            case "maria":
                gasto = cargarGasto;
                break;
            case "juan":
                gasto = cargarGasto;
                break;
            default:
                break;
        }
        dividendo.push({comprador,gasto});

    } else {
        alert("Ingrese un usuario que se encuentre en el grupo");
    }

    inicio = prompt("Desea seguir agregando un gasto?: \n si \n no");

    while (inicio == "no"){
        alert("Aqui tiene un desglose de la cuenta a dividir!");

        dividendo.forEach ((dividendoFinal)=> {
            console.log(`comprador ${dividendoFinal.comprador}, gasto: ${dividendoFinal.gasto}`);
        }); break;
    }
}

const total = dividendo.reduce((acc, item) => acc + item.gasto, 0)
console.log("El gasto total es de: ", total);



