// Validación del formulario en contacto.html
const form = document.getElementById("formularioContacto");
if (form) {
  form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      alert("Gracias por contactarnos. ¡Te responderemos pronto! 🌟");
    }
    form.classList.add("was-validated");
  });
}
// Botón "Volver arriba"
// Botón "Volver arriba"
const btnUp = document.getElementById("btnVolverArriba");

if (btnUp) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btnUp.style.display = "block";
    } else {
      btnUp.style.display = "none";
    }
  });

  btnUp.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

console.log("Script cargado");
console.log(btnUp); // ¿Lo detecta?
// Efecto de aparición con scroll (fade-in)
const elementos = document.querySelectorAll(".fade-in-on-scroll");

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
    }
  });
});

elementos.forEach((el) => observador.observe(el));
