
//function Resumen() {
    let nombre = document.getElementById("nom-bre").value;
    let apellido = document.getElementById("ape-llido").value;
    let correo = document.getElementById("co-rreo").value;
    let telefono = document.getElementById("te-lefono").value;
    let servicio = document.getElementById("ser-vicio").value;
    let mensaje = document.getElementById("men-saje").value;

    let nombreresumen = document.getElementById("nombre-resumen").value;
    let apellidoresumen = document.getElementById("apellido-resumen").value;
    let correoresumen = document.getElementById("correo-resumen").value;
    let telefonoresumen = document.getElementById("telefono-resumen").value;
    let servicioresumen = document.getElementById("servicio-resumen").value;
    let mensajeresumen = document.getElementById("mensaje-resumen").value;

    nombreresumen.innerHTML = nombre;
    apellidoresumen.innerHTML = apellido;
    correoresumen.innerHTML = correo;
    telefonoresumen.innerHTML = telefono;
    servicioresumen.innerHTML = servicio;
    mensajeresumen.innerHTML = mensaje;
    
    let formulario = document.getElementById("cotizare");
    let Resumen = document.getElementById("Resumen");
    formulario.classList.add("oculto");
    formulario.classList.remove("visible");
    Resumen.classList.add("visible");
    Resumen.classList.remove("oculto");
//}

const input
function submit() {
  if (document.getElementById("nom-bre").checkValidity() && document.getElementById("ape-llido").checkValidity() && document.getElementById("co-rreo").checkValidity() && document.getElementById("te-lefono").checkValidity() 
    && document.getElementById("ser-vicio").checkValidity() && document.getElementById("men-saje").checkValidity()){
    alert("¡Su mensaje fue enviado exitosamente!");
      document.getElementById("nom-bre").value = "";
      document.getElementById("ape-llido").value = "";
      document.getElementById("co-rreo").value = "";
      document.getElementById("te-lefono").value = "";
      document.getElementById("ser-vicio").value = "";
      document.getElementById("men-saje").value = "";
    } else {
      alert("Por favor, completa los campos obligatorios");
  }

}