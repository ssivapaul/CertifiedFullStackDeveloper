let matBtn = document.getElementById("mat");
let brushBtn = document.getElementById("brush");
let palletBtn = document.getElementById("pallete");

function toggleFavorite(btn) {
  if (btn.classList.contains("filled")) {
    btn.classList.remove("filled");
    btn.innerHTML = "&#9825;";
  } else {
    btn.classList.add("filled");
    btn.innerHTML = "&#10084;";
  }
}

matBtn.addEventListener("click", () => toggleFavorite(matBtn));
brushBtn.addEventListener("click", () => toggleFavorite(brushBtn));
palletBtn.addEventListener("click", () => toggleFavorite(palletBtn));
