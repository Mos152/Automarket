const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");
const textarea = document.querySelectorAll("#formulario textarea");
const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  tel: /^\d{7,14}$/, // 7 a 14 numeros.
};

const campos = {
  nombre: false,
  email: false,
  tel: false,
  mensaje: false,
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":
      validarCampo(expresiones.nombre, e.target, "nombre");
      break;
    case "email":
      validarCampo(expresiones.email, e.target, "email");
      break;
    case "tel":
      validarCampo(expresiones.tel, e.target, "tel");
      break;
    case "mensaje":
      validarMensaje(e.target.value.length);
      break;
  }
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    campos[campo] = true;
    document
      .getElementById(`grupo_${campo}`)
      .classList.remove("grupo_incorrecto");
    document.getElementById(`grupo_${campo}`).classList.add("grupo_correcto");
  } else {
    campos[campo] = false;
    document.getElementById(`grupo_${campo}`).classList.add("grupo_incorrecto");
  }
};

const validarMensaje = (e) => {
  if (e !== 0) {
    campos.mensaje = true;
    document
      .getElementById("grupo_mensaje")
      .classList.remove("grupo_incorrecto");
    document.getElementById("grupo_mensaje").classList.add("grupo_correcto");
  } else {
    campos.mensaje = false;
    document.getElementById("grupo_mensaje").classList.add("grupo_incorrecto");
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

textarea.forEach((e) => {
  e.addEventListener("keyup", validarFormulario);
  e.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  if (campos.nombre && campos.email && campos.tel && campos.mensaje) {
    Swal.fire("Mensaje enviado");
  } else {
    Swal.fire({
      title: "<strong>Formulario no valido</strong>",
      icon: "error",
      html: "<strong class='errores_formulario'>Debe llenar todos los espacios</strong>",
      focusConfirm: false,
    });
  }
});
