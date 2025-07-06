const form = document.getElementById("formularioContacto");
if (form) {
  form.addEventListener("submit", function (event) {
  event.preventDefault();
  event.stopPropagation();

  if (form.checkValidity()) {
    const mensaje = document.getElementById("mensajeExito");
    mensaje.style.display = "block";

    setTimeout(() => {
      mensaje.style.display = "none";
    }, 4000);

    form.reset();
    form.classList.remove("was-validated");
  } else {
    form.classList.add("was-validated");
  }
});

}

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


const elementos = document.querySelectorAll(".fade-in-on-scroll");

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
    }
  });
});

elementos.forEach((el) => observador.observe(el));
