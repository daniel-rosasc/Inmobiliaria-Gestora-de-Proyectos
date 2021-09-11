function abrirMensajeConfirmacion() {

    var mensajeConfirmacion = document.getElementById('mensaje-confirmacion')
    var name = document.getElementById('name')
    var correo = document.getElementById('correo')
    var Celular = document.getElementById('Celular')

  console.log(name.value.length)

    if (name.value.length <= 0 || correo.value.length <= 0 || Celular.value.length <= 0) {
      
       document.getElementById('name').style.border = ' 2px solid red ';
       document.getElementById('correo').style.border = ' 2px solid red ';
       document.getElementById('Celular').style.border = ' 2px solid red ';
    }
    else {
        console.log('Acá llegó!')
        mensajeConfirmacion.classList.remove('d-none')

       document.getElementById('name').style.border = ' 2px solid white ';
       document.getElementById('correo').style.border = ' 2px solid white ';
       document.getElementById('Celular').style.border = ' 2px solid white ';

       document.getElementById('name').value = "";
       
    }

  
}

function cerrarMensajeConfirmacion() {
    var mensajeConfirmacion = document.getElementById('mensaje-confirmacion')


    mensajeConfirmacion.classList.add('d-none')
}


