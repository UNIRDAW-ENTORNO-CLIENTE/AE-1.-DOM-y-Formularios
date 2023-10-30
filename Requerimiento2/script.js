
function checkparam(){
    //COMPROBACION DE LOS INPUT TEXT
    if (nombre.value.trim() == "") {
        alert('Falta rellenar el campo "Nombre"');
        return false;
    } else if(direccion.value.trim() == ""){
        alert('Falta rellenar el campo "Direccion"');
        return false;
    } else if(telefono.value.trim() == ""){
        alert('Falta rellenar el campo "Telefono"');
        return false;
    } else if(email.value.trim() == ""){
        alert('Falta rellenar el campo "Email"');
        return false;
    }
    //COMPROBACION DEL TAMAÑO
    let Tamaño = document.getElementsByName("Tamaño");
    let checked = false
    let tam = ""
    Tamaño.forEach(Value => {
        if(Value.checked){
            //GUARDAMOIS EL TAMAÑO PARA CALCULAR EL PRECIO DESPUES
            tam=Value.value
            //HAY UN TAMAÑO
            checked = true
        }
    });
    //COMPROBAMOS QUE HABIA UN TAMAÑO
    if(!checked){
        alert('Falta elegir un "Tamaño"')
        return false
    }
    //COMPROBACION DE LOS INGREDIENTES
    let ingredientes = document.getElementsByName("ingrediente");
    let cont = 0
    //RECORREMOS EL ARRAY DE LOS INGREDIENTES
    ingredientes.forEach(Value => {
        if(Value.checked){
            //SUMAMOS LOS INGREDIENTES CHEKADOS
            cont++
        }
    });
    //SI NO HAY INGREDIENTES, SALTA EL AVISO
    if(cont==0){
        alert('Falta elegir mínimo un "Ingrediente"')
        return false
    }
    //CALCULA EL PRECIO FINAL
    let price = sumPrice(tam,cont)

    alert("Precio final de la pizza: "+price+"$")
}
//FUNCION CALCULAR EL PRECIO FINAL 
function sumPrice(pizzaSize,numIngre){
    let finalPrice = 0
    //DEPENDE DEL TAMAÑO, SUMA EL PRECIO
    switch(pizzaSize){
        case 'Pequeña':
            finalPrice += 5
            break;
        case 'Mediana':
            finalPrice += 10
            break;    
        case 'Grande':
            finalPrice += 15
            break;
    }
    //RETORNA EL PRECIO FINAL DE LA PIZZA
    return finalPrice+numIngre
}

window.onload = function(){
    //CUANDO SE ENVIA EL FORMULARIO CHEKEA LOS PARAMETROS SOLO SI LA WEB HTML YA HA CARGADO
    formulario.onsubmit = checkparam
}