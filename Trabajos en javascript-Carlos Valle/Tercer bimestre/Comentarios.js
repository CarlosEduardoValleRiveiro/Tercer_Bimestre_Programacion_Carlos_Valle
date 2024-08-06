const form = document.getElementById("myForm"); //Declaramos cual es el formulario

form.addEventListener("submit", function(event) {
    event.preventDefault();

    //Declaramos los espacios para escribir 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const num = document.getElementById("num").value;

    //Definicom que pasa si el espacio esta vacio

    if (name === "" || email === "" || message === "" || num === ""){
        alert("Por favor completa todos los campos.");
    }
    else{
        alert("Formulario enviado exitosamente.");
        form.reset();
    }
});