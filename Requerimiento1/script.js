// Función para crear elementos y agregarlos al contenedor

function GeneraForm() {
    // Obtener el div con el ID "cabecera"
    let cabecera = document.getElementById("cabecera");
  
    // Crear campos de texto para DNI, nombre, apellidos, dirección y teléfono
    let dni = document.createElement("input");
    dni.setAttribute("type", "text");
    dni.setAttribute("placeholder", "DNI");
    cabecera.appendChild(dni);
  
    let nombre = document.createElement("input");
    nombre.setAttribute("type", "text");
    nombre.setAttribute("placeholder", "Nombre");
    cabecera.appendChild(nombre);
  
    let apellidos = document.createElement("input");
    apellidos.setAttribute("type", "text");
    apellidos.setAttribute("placeholder", "Apellidos");
    cabecera.appendChild(apellidos);
  
    let direccion = document.createElement("input");
    direccion.setAttribute("type", "text");
    direccion.setAttribute("placeholder", "Dirección");
    cabecera.appendChild(direccion);
  
    let telefono = document.createElement("input");
    telefono.setAttribute("type", "text");
    telefono.setAttribute("placeholder", "Teléfono");
    cabecera.appendChild(telefono);
  
    // Crear dos grupos de radio buttons con 4 opciones en total
    let radioGrupo1 = document.createElement("div");
    let radioGrupo2 = document.createElement("div");
  
    let opciones1 = ["Opción 1", "Opción 2", "Opción 3", "Opción 4"];
    let opciones2 = ["Opción A", "Opción B", "Opción C", "Opción D"];
  
    opciones1.forEach(function (optionText) {
      let radioBoton = document.createElement("input");
      radioBoton.setAttribute("type", "radio");
      radioBoton.setAttribute("name", "group1");
      let label = document.createElement("label");
      label.textContent = optionText;
  
      radioGrupo1.appendChild(radioBoton);
      radioGrupo1.appendChild(label);
    });
  
    opciones2.forEach(function (optionText) {
      let radioBtn = document.createElement("input");
      radioBtn.setAttribute("type", "radio");
      radioBtn.setAttribute("name", "group2");
      let label = document.createElement("label");
      label.textContent = optionText;
  
      radioGrupo2.appendChild(radioBtn);
      radioGrupo2.appendChild(label);
    });
  
    cabecera.appendChild(radioGrupo1);
    cabecera.appendChild(radioGrupo2);
  
    // Crear cinco checkboxes diferentes
    let checkboxes = ["Opción 1", "Opción 2", "Opción 3", "Opción 4", "Opción 5"];
  
    checkboxes.forEach(function (checkboxText) {
      let checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      let label = document.createElement("label");
      label.textContent = checkboxText;
  
      cabecera.appendChild(checkbox);
      cabecera.appendChild(label);
    });
  
    // Agregar dos imágenes
    let img1 = document.createElement("img");
    img1.setAttribute("src", "/img/img1.jpg"); 
    cabecera.appendChild(img1);
  
    let img2 = document.createElement("img");
    img2.setAttribute("src", "/img/img2.jpg"); 
    cabecera.appendChild(img2);
  
    let espacio1 = document.createElement("br");
    cabecera.appendChild(espacio1);
  
    // Crear un campo select (lista desplegable)
    let select = document.createElement("select");
  
    // Crear opciones para el select
    let opciones = ["Opción 1", "Opción 2", "Opción 3", "Opción 4", "Opción 5"];
  
    opciones.forEach(function (opcionText) {
      let opcion = document.createElement("option");
      opcion.textContent = opcionText;
      select.appendChild(opcion);
    });
  
    cabecera.appendChild(select);
  
    let espacio2 = document.createElement("br");
    cabecera.appendChild(espacio2);
  
    // Crear un campo de texto de área (textarea)
    let textarea = document.createElement("textarea");
    textarea.setAttribute("rows", "5"); 
    textarea.setAttribute("cols", "60"); 
    textarea.setAttribute(
      "placeholder",
      "Area de texto, por favor escriba aquí..."
    );
  
    cabecera.appendChild(textarea);
  }
  
  // Llama a la función GeneraForm al cargar la página
  window.onload = GeneraForm;
  