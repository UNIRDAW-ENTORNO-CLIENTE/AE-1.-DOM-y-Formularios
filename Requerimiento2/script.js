// Función que se ejecutará cuando la ventana esté completamente cargada
window.onload = function () {
    // Obtén los elementos del formulario
    var nombreInput = document.getElementById("nombre");
    var direccionInput = document.getElementById("direccion");
    var movilInput = document.getElementById("movil");
    var emailInput = document.getElementById("email");
    var pizzaRadios = document.querySelectorAll('input[type="radio"][name="Pizza"]');
    var ingredientCheckboxes = document.querySelectorAll('input[type="checkbox"][name="Condiciones"]    ');
    var botonProcesarPedido = document.querySelector('.boton');

    // Agrega un evento al botón para procesar el pedido
    botonProcesarPedido.addEventListener("click", function () {
        // Verifica que los campos obligatorios estén completos
        if (nombreInput.value.trim() === "" || direccionInput.value.trim() === "" || movilInput.value.trim() === "" || emailInput.value.trim() === "") {
            alert("Por favor, complete los campos obligatorios: Nombre, Dirección, Número de móvil y Email.");
            return;
        }

        // Verifica que se haya seleccionado un tamaño de pizza
        var pizzaSeleccionada = false;
        for (var i = 0; i < pizzaRadios.length; i++) {
            if (pizzaRadios[i].checked) {
                pizzaSeleccionada = true;
                break;
            }
        }
        if (!pizzaSeleccionada) {
            alert("Por favor, seleccione un tamaño de pizza.");
            return;
        }

        // Verifica que se haya seleccionado al menos un ingrediente
        var ingredientesSeleccionados = false;
        for (var i = 0; i < ingredientCheckboxes.length; i++) {
            if (ingredientCheckboxes[i].checked) {
                ingredientesSeleccionados = true;
                break;
            }
        }
        if (!ingredientesSeleccionados) {
            alert("Por favor, seleccione al menos un ingrediente.");
            return;
        }

        // Cálculo del precio de la pizza según el tamaño
        var precioPizza = 0;
        if (pizzaRadios[0].checked) {
            precioPizza = 5;
        } else if (pizzaRadios[1].checked) {
            precioPizza = 10;
        } else if (pizzaRadios[2].checked) {
            precioPizza = 15;
        }

        // Cálculo de añadir 1 euro por cada ingrediente seleccionado
        let precioIngredientes = 0;
        for (let i = 0; i < ingredientCheckboxes.length; i++) {
            if (ingredientCheckboxes[i].checked) {
            precioIngredientes += 1; 
            }
        }


        //Calcula el precio total del pedido
        var precioTotal = precioPizza + precioIngredientes; 
        
        // Muestra el precio total al usuario
        alert("El precio total del pedido es: " + precioTotal + "€");
    });
};