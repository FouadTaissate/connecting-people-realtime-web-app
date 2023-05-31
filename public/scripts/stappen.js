// lees meer functie detailpagina
// Dit stuk zoekt de togglebutton en zorgt ervoor dat hij de functie eronder activeerd wanneer erop geklikt wordt
let stappenplan = document.getElementById("stappenplanbutton");
stappenplan.addEventListener("click", toonStappenplan);
// Dit deel toggled de class "toon" waarop display none staat
function toonStappenplan() {
  document.getElementById("stappen").classList.toggle("toon");
}

// stappenplan.addEventListener("click", toonAlert);
// function toonAlert() {
//     alert(het);
// }
