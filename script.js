// ============================
// CARRUSEL AUTOMÁTICO
// ============================
const slides = document.querySelectorAll(".slide");
let indice = 0;
function mostrarSlide() {
    slides.forEach(slide => {
        slide.style.display = "none"; });
    slides[indice].style.display = "block";
    indice++;
    if (indice >= slides.length) {
        indice = 0;  }}
if (slides.length > 0) {
    mostrarSlide();
    setInterval(mostrarSlide, 5000);}
// ============================
// FORMULARIO DE CONTACTO
// ============================
const formulario = document.getElementById("encuestaJoyeria");
if (formulario) {
    formulario.addEventListener("submit", function(e){
        e.preventDefault();
        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const edad = document.getElementById("edad").value.trim();
        const joya = document.getElementById("joya").value;
        const material = document.getElementById("material").value;
        const mensaje = document.getElementById("mensaje").value.trim();
        if (
            nombre === "" ||
            correo === "" ||
            edad === "" ||
            joya === "" ||
            material === "" ||
            mensaje === ""
        ) {
            alert("Por favor complete todos los campos.");
            return;}
        if (edad < 1 || edad > 120) {
            alert("Ingrese una edad válida.");
            return;}
        alert(
` Gracias ${nombre}.
Hemos recibido tu mensaje correctamente.
Correo: ${correo}
Edad: ${edad}
Joyería favorita: ${joya}
Material preferido: ${material}
Mensaje:
${mensaje}`
        );
        formulario.reset(); });}
// ============================
// BOTÓN VOLVER ARRIBA
// ============================
const boton = document.createElement("button");
boton.innerHTML = "⬆️";
boton.id = "btnArriba";
boton.title = "Volver arriba";
document.body.appendChild(boton);
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        boton.style.display = "block";
    } else {
        boton.style.display = "none";}});
boton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" });});
// ============================
// EFECTO ACTIVO EN EL MENÚ
// ============================
const enlaces = document.querySelectorAll("nav a");
enlaces.forEach(enlace => {
    enlace.addEventListener("click", () => {
        enlaces.forEach(item => {
            item.style.background = "";
            item.style.color = "";});
        enlace.style.background = "#8b5cf6";
        enlace.style.color = "white"; });});
// ============================
// MENSAJE DE BIENVENIDA
// ============================
window.addEventListener("load", () => {
    console.log("✨ Bienvenido a El Mundo de la Joyería ✨");});

    if (!correo.includes("@")) {
    alert("Ingrese un correo válido.");
    return;}