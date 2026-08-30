/*const botonTema = document.getElementById("theme-toggle");

const temaGuardado = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light');

document.documentElement.setAttribute("data-theme", temaGuardado);
actualizarTextoBotones(temaGuardado);

botonTema.addEventListener('click', () => {
    const temaActual = document.documentElement.getAttribute("data-theme");
    let nuevoTema = "dark";
    if (temaActual === "light") {
        nuevoTema = "dark";
    }

    document.documentElement.setAttribute("data-theme", nuevoTema);
    localStorage.setItem("theme", nuevoTema);
    actualizarTextoBotones(nuevoTema);
});

function actualizarTextoBotones(tema) {
    botonTema.textContent = tema === "dark" ? "Modo Claro" : "Modo Oscuro";
}*/

const botonTema = document.getElementById("theme-toggle");
const iconoTema = document.getElementById("theme-icon");
 
function aplicarTema(tema) {
  document.documentElement.setAttribute("data-theme", tema);
  iconoTema.textContent = tema === "dark" ? "dark_mode" : "light_mode";
}
 
const temaGuardado =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
 
aplicarTema(temaGuardado);
 
botonTema.addEventListener("click", () => {
  const temaActual = document.documentElement.getAttribute("data-theme");
  const nuevoTema = temaActual === "dark" ? "light" : "dark";
  aplicarTema(nuevoTema);
  localStorage.setItem("theme", nuevoTema);
});