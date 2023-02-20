
let nombreyapellido = false
let nombreApellidoBuscado =""

for(let i = 0; i< 100 && nombreyapellido == false; i++){

    nombreApellidoBuscado = prompt("Ingrese su nombre y apellido")
    if(nombreApellidoBuscado == "Enrique Diaz"){
    nombreyapellido = true
    alert("Nombre y apellido encontrado en base de datos")
    }else{
        alert("Nombre y apellido no encontrado, vuelva a intentar")
}
}

let tipoInsumo = prompt("Ingrese tipo de insumo")
let insumo = ""

if (insumo == "Escritura"){
    console.log("Tenemos en existencias, idique que es ,o que esta buscando");
    alert("Tenemos, ingrese tipo de insumo")
}else{
    console.log("No tenemos en existencia. ")
    alert("No tenemos, disculpe las molestias.")
}

/* 
Lapicera
Lapiz
Marcadores
*/

let_buscarEscritura = false
let_tipoDeInsumo = ""

for (let i = 0; i < 10 && let_buscarEscritura == false;i++){
    tipoDeInsumo = prompt("Ingrese insumo de escritura buscado")
    if(tipoDeInsumo == "Marcadores"){
        let_buscarEscritura = true
        console.log("Marcadores encontrado")
    }else{
        console.log("El insumo "+tipoDeInsumo+ " no es Marcadores")
    }
}


