// Función para crear elementos y agregarlos al contenedor

function GeneraForm(){
    ////Crear el objeto formulario
    let formulario = document.createElement("form");

    ////Crear el objeto label de titulo
    let titulo = document.createElement("label");

    ////Crear el objeto campo de texto DNI
    let cajaTextDNI = document.createElement("input");

    ////Crear el objeto campo de texto Nombres
    let cajaTextNombre = document.createElement("input");

    ////Crear el objeto campo de texto Apellidos
    let cajaTextApellidos = document.createElement("input");

    ////Crear el objeto campo de texto Direccion
    let cajaTextDireccion = document.createElement("input");

    ////Crear el objeto campo de texto Telefono
    let cajaTextTelefono = document.createElement("input");
    

    
    ////Asignar atributos al objeto formulario
        formulario.setAttribute('method', "post");//Asignar el atributo method
        formulario.setAttribute('action', "");//Asignar el atributo action
        formulario.setAttribute('style', "width:300px;margin: 0px auto");//Asignar el atributo style

        ////Asignar atributos al objeto campo de texto de DNI
        cajaTextDNI.setAttribute('type', "text");//Asignar el atributo type
        cajaTextDNI.setAttribute('placeholder', "DNI");//Asignar el atributo placeholder
        cajaTextDNI.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style

        ////Asignar atributos al objeto campo de texto de Nombres
        cajaTextNombre.setAttribute('type', "text");//Asignar el atributo type
        cajaTextNombre.setAttribute('placeholder', "Nombre");//Asignar el atributo placeholder
        cajaTextNombre.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style

        ////Asignar atributos al objeto campo de texto de Apellidos
        cajaTextApellidos.setAttribute('type', "text");//Asignar el atributo type
        cajaTextApellidos.setAttribute('placeholder', "Apellidos");//Asignar el atributo placeholder
        cajaTextApellidos.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style

        ////Asignar atributos al objeto campo de texto de Direccion
        cajaTextDireccion.setAttribute('type', "text");//Asignar el atributo type
        cajaTextDireccion.setAttribute('placeholder', "Direccion");//Asignar el atributo placeholder
        cajaTextDireccion.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style

        ////Asignar atributos al objeto campo de texto de Telefono
        cajaTextTelefono.setAttribute('type', "text");//Asignar el atributo type
        cajaTextTelefono.setAttribute('placeholder', "Telefono");//Asignar el atributo placeholder
        cajaTextTelefono.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style

        formulario.appendChild(titulo);//Agregar el objeto titulo al objeto formulario
        formulario.appendChild(cajaTextDNI);//Agregar el objeto campo de texto Nombres al objeto formulario
        formulario.appendChild(cajaTextNombre);//Agregar el objeto campo de texto Apellidos al objeto formulario
        formulario.appendChild(cajaTextApellidos);//Agregar el objeto campo de texto Email al objeto formulario
        formulario.appendChild(cajaTextDireccion);//Agregar el objeto campo de texto Asunto al objeto formulario
        formulario.appendChild(cajaTextTelefono);//Agregar el objeto campo de texto del Mensaje al objeto formulario

        //formulario.appendChild(radioButton1);//Agregar el objeto campo de texto del Mensaje al objeto formulario
        //formulario.appendChild(radioButton2);//Agregar el objeto campo de texto del Mensaje al objeto formulario
        //formulario.appendChild(radioButton3);//Agregar el objeto campo de texto del Mensaje al objeto formulario
        //formulario.appendChild(radioButton4);//Agregar el objeto campo de texto del Mensaje al objeto formulario
        
        
        document.getElementById('cabecera').appendChild(formulario);//Agregar el formulario a la etiqueta con el ID	
        
        


        //-----RADIO BOXES-----
        //-----Primera casilla------
        // Crear un botón de radio
        var radiobox = document.createElement('input');
        radiobox.type = 'radio';
        radiobox.id = 'pais';
        radiobox.name = 'pais';
        radiobox.value = 'españa';
        
        

        // Crear una etiqueta para el botón de radio
        var label = document.createElement('label');
        label.htmlFor = 'contact';
        var description = document.createTextNode('España');
        label.appendChild(description);
        


        // Agregar el botón de radio y la etiqueta a un contenedor
        var container = document.getElementById('cabecera');
        container.appendChild(radiobox);
        container.appendChild(label);
        


        //2o botón
        // Crear un botón de radio
        var radiobox2 = document.createElement('input');
        radiobox2.type = 'radio';
        radiobox2.id = 'pais';
        radiobox2.name = 'pais';
        radiobox2.value = 'portugal';



        // Crear una etiqueta para el botón de radio
        var label = document.createElement('label');
        label.htmlFor = 'contact';
        var description = document.createTextNode('Portugal');
        label.appendChild(description);


        // Agregar el botón de radio y la etiqueta a un contenedor
        var container = document.getElementById('cabecera');
        container.appendChild(radiobox2);
        container.appendChild(label);


        //3r botón
        // Crear un botón de radio
        var radiobox3 = document.createElement('input');
        radiobox3.type = 'radio';
        radiobox3.id = 'pais';
        radiobox3.name = 'pais';
        radiobox3.value = 'alemania';



        // Crear una etiqueta para el botón de radio
        var label = document.createElement('label');
        label.htmlFor = 'contact';
        var description = document.createTextNode('Alemania');
        label.appendChild(description);


        // Agregar el botón de radio y la etiqueta a un contenedor
        var container = document.getElementById('cabecera');
        container.appendChild(radiobox3);
        container.appendChild(label);

        //4o botón
        // Crear un botón de radio
        var radiobox4 = document.createElement('input');
        radiobox4.type = 'radio';
        radiobox4.id = 'pais';
        radiobox4.name = 'pais';
        radiobox4.value = 'francia';



        // Crear una etiqueta para el botón de radio
        var label = document.createElement('label');
        label.htmlFor = 'contact';
        var description = document.createTextNode('Francia');
        label.appendChild(description);


        // Agregar el botón de radio y la etiqueta a un contenedor
        var container = document.getElementById('cabecera');
        container.appendChild(radiobox4);
        container.appendChild(label);



        //------2a casilla------
        // Crear un botón de radio
        var radiobox5 = document.createElement('input');
        radiobox5.type = 'radio';
        radiobox5.id = 'edad';
        radiobox5.name = 'edad';
        radiobox5.value = 'menos18';



        // Crear una etiqueta para el botón de radio
        var label = document.createElement('label');
        label.htmlFor = 'contact';
        var description = document.createTextNode('0-18 años');
        label.appendChild(description);


        // Agregar el botón de radio y la etiqueta a un contenedor
        var container = document.getElementById('cabecera');
        container.appendChild(radiobox5);
        container.appendChild(label);


        //2o botón
        // Crear un botón de radio
        var radiobox6 = document.createElement('input');
        radiobox6.type = 'radio';
        radiobox6.id = 'edad';
        radiobox6.name = 'edad';
        radiobox6.value = '19-30';



        // Crear una etiqueta para el botón de radio
        var label = document.createElement('label');
        label.htmlFor = 'contact';
        var description = document.createTextNode('19-30 años');
        label.appendChild(description);


        // Agregar el botón de radio y la etiqueta a un contenedor
        var container = document.getElementById('cabecera');
        container.appendChild(radiobox6);
        container.appendChild(label);


        //3r botón
        // Crear un botón de radio
        var radiobox7 = document.createElement('input');
        radiobox7.type = 'radio';
        radiobox7.id = 'edad';
        radiobox7.name = 'edad';
        radiobox7.value = '31-40';



        // Crear una etiqueta para el botón de radio
        var label = document.createElement('label');
        label.htmlFor = 'contact';
        var description = document.createTextNode('31-40 años');
        label.appendChild(description);


        // Agregar el botón de radio y la etiqueta a un contenedor
        var container = document.getElementById('cabecera');
        container.appendChild(radiobox7);
        container.appendChild(label);

        //4o botón
        // Crear un botón de radio
        var radiobox8 = document.createElement('input');
        radiobox8.type = 'radio';
        radiobox8.id = 'edad';
        radiobox8.name = 'edad';
        radiobox8.value = '41-50';



        // Crear una etiqueta para el botón de radio
        var label = document.createElement('label');
        label.htmlFor = 'contact';
        var description = document.createTextNode('41-50 años');
        label.appendChild(description);


        // Agregar el botón de radio y la etiqueta a un contenedor
        var container = document.getElementById('cabecera');
        container.appendChild(radiobox8);
        container.appendChild(label);



        ///----CHECKBOX-------
        // Crear 1r checkbox
        var checkbox1 = document.createElement('input');
        checkbox1.type = 'checkbox';
        checkbox1.id = 'estudios';
        checkbox1.name = 'estudios';
        checkbox1.value = 'educacion secundaria';



        // Crear una etiqueta para el checkbox1
        var label1 = document.createElement('label');
        label1.htmlFor = 'contac';
        var description = document.createTextNode('Educacion secundaria');
        label1.appendChild(description);


        // Agregar el botón de checkbox1 y la etiqueta a un contenedor
        var container1 = document.getElementById('cabecera');
        container1.appendChild(checkbox1);
        container1.appendChild(label1);

        // Crear 2o checkbox
        var checkbox2 = document.createElement('input');
        checkbox2.type = 'checkbox';
        checkbox2.id = 'estudios';
        checkbox2.name = 'estudios';
        checkbox2.value = 'bachillerato';



        // Crear una etiqueta para el checkbox1
        var label2 = document.createElement('label');
        label2.htmlFor = 'contac';
        var description = document.createTextNode('Bachillerato');
        label2.appendChild(description);


        // Agregar el botón de checkbox1 y la etiqueta a un contenedor
        var container1 = document.getElementById('cabecera');
        container1.appendChild(checkbox2);
        container1.appendChild(label2);



        // Crear 3r checkbox
        var checkbox3 = document.createElement('input');
        checkbox3.type = 'checkbox';
        checkbox3.id = 'estudios';
        checkbox3.name = 'estudios';
        checkbox3.value = 'grado medio';



        // Crear una etiqueta para el checkbox1
        var label3 = document.createElement('label');
        label3.htmlFor = 'contac';
        var description = document.createTextNode('Grado medio');
        label3.appendChild(description);


        // Agregar el botón de checkbox1 y la etiqueta a un contenedor
        var container1 = document.getElementById('cabecera');
        container1.appendChild(checkbox3);
        container1.appendChild(label3);




        // Crear 4o checkbox
        var checkbox4 = document.createElement('input');
        checkbox4.type = 'checkbox';
        checkbox4.id = 'estudios';
        checkbox4.name = 'estudios';
        checkbox4.value = 'grado superior';



        // Crear una etiqueta para el checkbox1
        var label4 = document.createElement('label');
        label4.htmlFor = 'contac';
        var description = document.createTextNode('Grado superior');
        label4.appendChild(description);


        // Agregar el botón de checkbox1 y la etiqueta a un contenedor
        var container1 = document.getElementById('cabecera');
        container1.appendChild(checkbox4);
        container1.appendChild(label4);




        // Crear 5o checkbox
        var checkbox5 = document.createElement('input');
        checkbox5.type = 'checkbox';
        checkbox5.id = 'estudios';
        checkbox5.name = 'estudios';
        checkbox5.value = 'universidad';



        // Crear una etiqueta para el checkbox1
        var label5 = document.createElement('label');
        label5.htmlFor = 'contac';
        var description = document.createTextNode('Universidad');
        label5.appendChild(description);


        // Agregar el botón de checkbox1 y la etiqueta a un contenedor
        var container1 = document.getElementById('cabecera');
        container1.appendChild(checkbox5);
        container1.appendChild(label5);


        //------IMAGEN----
        // Crear 1a imagen
        var imagen = document.createElement('img');
        imagen.src ='/Requerimiento1/img/img1.jpg';
        



        // Crear una etiqueta para la imagen
        var label6 = document.createElement('label');
        label6.htmlFor = 'contac';
        


        // Agregar la imagen y la etiqueta a un contenedor
        var container1 = document.getElementById('cabecera');
        container1.appendChild(imagen);
        container1.appendChild(label6);



        // Crear 2a imagen
        var imagen2 = document.createElement('img');
        imagen2.src ='/Requerimiento1/img/img2.jpg';
        



        // Crear una etiqueta para la imagen
        var label7 = document.createElement('label');
        label7.htmlFor = 'contac';
        


        // Agregar la imagen y la etiqueta a un contenedor
        var container2 = document.getElementById('cabecera');
        container2.appendChild(imagen2);
        container2.appendChild(label7);

        //-----FALTA------
        // Un campo select
        // Un text area



}