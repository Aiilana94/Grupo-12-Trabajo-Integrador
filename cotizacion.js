function verResumen() {
  if (document.getElementById("nombre").checkValidity() && document.getElementById("email").checkValidity() && document.getElementById("direccion").checkValidity()
  && document.getElementById("ciudad").checkValidity() && document.getElementById("provincia").checkValidity() && document.getElementById("codigo-postal").checkValidity()
  && document.getElementById("valor-declarado").checkValidity() && document.getElementById("tipo-servicio").checkValidity() && document.getElementById("observaciones").checkValidity()) {
    alert("Mensaje enviado");
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("ciudad").value = "";
    document.getElementById("provincia").value = "";
    document.getElementById("codigo-postal").value = "";
    document.getElementById("valor-declarado").value = "";
    document.getElementById("tipo-servicio").value = "";
    document.getElementById("observaciones").value = "";
    
  } else {
    alert("Por favor completa los campos obligatorios");
  }
}

//Funcion para ver resumen del formulario

function verResumen() {
  let nombr = document.getElementById("nombre").value;
  let correo = document.getElementById("email").value;
  let direccion = document.getElementById("direccion").value;
  let ciudad = document.getElementById("ciudad").value;
  let provincia = document.getElementById("provincia").value;
  let codigoPostal = document.getElementById("codigo-postal").value;
  let valorDeclarado = document.getElementById("valor-declarado").value;
  let tipoDeServicio = document.getElementById("tipo-servicio").value;
  let observacione = document.getElementById("observaciones").value;

  let nombreResumen = document.getElementById("nombre-resumen");
  let emailResumen = document.getElementById("email-resumen");
  let direccionResumen = document.getElementById("direccion-resumen");
  let ciudadResumen = document.getElementById("ciudad-resumen");
  let provinciaResumen = document.getElementById("provincia-resumen");
  let codigoPostalResumen = document.getElementById("codigo-postal-resumen");
  let valorDeclaradoResumen = document.getElementById(
    "valor-declarado-resumen"
  );
  let tipoDeServicioResumen = document.getElementById("tipo-servicio-resumen");
  let observacionesResumen = document.getElementById("observaciones-resumen");
  let cotizacionResumen = document.getElementById("total-cotizacion");

  let cotizacionDelServicioR =(" reparacion es de $5000");
  let cotizacionDeServicioM = ("Mantenimiento es de $2000");
  let cotizacionDeServicioI = ("Instalacion es de $6000");

  nombreResumen.innerHTML = nombr;
  emailResumen.innerHTML = correo;
  direccionResumen.innerHTML = direccion;
  ciudadResumen.innerHTML = ciudad;
  provinciaResumen.innerHTML = provincia;
  codigoPostalResumen.innerHTML = codigoPostal;
  valorDeclaradoResumen.innerHTML = valorDeclarado;
  tipoDeServicioResumen.innerHTML = tipoDeServicio;

  if (tipoDeServicio == "reparacion") {
    cotizacionResumen.innerHTML = cotizacionDelServicioR;
  } else if (tipoDeServicio == "mantenimiento") {
    cotizacionResumen.innerHTML = cotizacionDeServicioM;
  }
  else if (tipoDeServicio == "instalacion") {
    cotizacionResumen.innerHTML = cotizacionDeServicioI;
  }

  if (observacione == "") {
    observacionesResumen.innerHTML = "Ninguna";
  } else {
    observacionesResumen.innerHTML = observacione;
  }

  //pongo el visible el resumen y oculto el formulario mediante remove y add

  let formulario = document.getElementById("cotizacion-form");
  let resumen = document.getElementById("resumen");
  formulario.classList.add("oculto");
  formulario.classList.remove("visible");
  resumen.classList.add("visible");
  resumen.classList.remove("oculto");
}

//Funcion para volver al formulario
function volverForm() {
  let formulario = document.getElementById("cotizacion-form");
  let resumen = document.getElementById("resumen");
  formulario.classList.add("visible");
  formulario.classList.remove("oculto");
  resumen.classList.add("oculto");
  resumen.classList.remove("visible");
}

//Funcion para guardar en pdf
function guardarPDF() {
  var html = document.getElementById("resumen").innerHTML;
  const options = {
    margin: [50, 50],
    filename: "cotizacion.pdf",
    jsPDF: { unit: "mm", format: "a4" },
  };
  // Convertir el HTML a PDF
  html2pdf().set(options).from(html).save();
}

