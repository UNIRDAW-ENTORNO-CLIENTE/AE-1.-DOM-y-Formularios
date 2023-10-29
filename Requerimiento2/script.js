// Función que se ejecutará cuando la ventana esté completamente cargada
window.onload = function () {
    // Obtén los elementos del formulario
    let nombreInput = document.getElementById("nombre");
    let direccionInput = document.getElementById("direccion");
    let movilInput = document.getElementById("movil");
    let emailInput = document.getElementById("email");
    let pizzaRadios = document.querySelectorAll('input[type="radio"][name="Pizza"]');
    let ingredientCheckboxes = document.querySelectorAll('input[type="checkbox"][name="Condiciones"]    ');
    let botonProcesarPedido = document.querySelector('.boton');

    // Agrega un evento al botón para procesar el pedido
    botonProcesarPedido.addEventListener("click", function () {
        // Verifica que los campos obligatorios estén completos
        if (nombreInput.value.trim() === "" || direccionInput.value.trim() === "" || movilInput.value.trim() === "" || emailInput.value.trim() === "") {
            alert("Por favor, complete los campos obligatorios: Nombre, Dirección, Número de móvil y Email.");
            return;
        }

        // Verifica que se haya seleccionado un tamaño de pizza
        let pizzaSeleccionada = false;
        for (let i = 0; i < pizzaRadios.length; i++) {
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
        let ingredientesSeleccionados = false;
        for (let i = 0; i < ingredientCheckboxes.length; i++) {
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
        let precioPizza = 0;
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
        let precioTotal = precioPizza + precioIngredientes; 
        
        // Muestra el precio total al usuario
        alert("El precio total del pedido es: " + precioTotal + "€");
    });
};