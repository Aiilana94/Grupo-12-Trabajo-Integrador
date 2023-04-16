      function enviar() {
        if (document.getElementById("nombre").checkValidity() && document.getElementById("email").checkValidity() && document.getElementById("telefono").checkValidity() 
        && document.getElementById("assunto").checkValidity() && document.getElementById("mensaje").checkValidity()) {
          alert("Mensaje enviado");
          document.getElementById("nombre").value = "";
          document.getElementById("email").value = "";
          document.getElementById("telefono").value = "";
          document.getElementById("assunto").value = "";
          document.getElementById("mensaje").value = "";
        } else {
          alert("Por favor completa los campos obligatorios");
        }
      }


   