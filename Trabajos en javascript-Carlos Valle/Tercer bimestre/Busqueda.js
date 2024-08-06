const formulario = document.getElementById("botonbuscar"); //Declaramos cual es el formulario

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const busqueda = document.getElementById("busqueda").value; //Declaramos cual es el espacio en el que se escribe

    //Definicom que pasa si el espacio esta vacio

    if (busqueda === ""){
        alert("Por favor completa todos los campos.");
    }
    else{
        alert("Formulario enviado exitosamente.");
        formulario.reset();
    }
});