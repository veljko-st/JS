var izbor = document.getElementById("cars");
izbor.addEventListener("change", displayMessage);

function displayMessage(e) {
    var display = document.getElementById("stampa");
    display.innerHTML= "Izabrali ste: " + e.target.value;
}