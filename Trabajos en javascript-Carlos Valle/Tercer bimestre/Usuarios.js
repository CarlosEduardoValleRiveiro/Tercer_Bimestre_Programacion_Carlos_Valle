const form = document.getElementById("usuario"); //Declaramos cual es el formulario

form.addEventListener("submit", function(event) {
    event.preventDefault();

    //Declaramos los espacios para escribir 

    const usuarios = document.getElementById("usuarios").value;
    const clave = document.getElementById("clave").value;

    //Definicom que pasa si el espacio esta vacio

    if (usuarios === "" || clave === ""){
        alert("Por favor completa todos los campos.");
    }
    else{
        alert("Formulario enviado exitosamente.");
        form.reset();
    }
});
