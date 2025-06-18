document.querySelectorAll(".drum-pad").forEach((drumPad) => {
  drumPad.addEventListener("click", () => {
    let audio = drumPad.querySelector("audio");
    if (audio) {
      audio.play();
      let display = document.getElementById("display");
      display.textContent = drumPad.id;
      display.style.display = "flex";
    } else {
      display.textContent = "couldn't play";
      display.style.display = "flex";
      console.log("couldn't play");
    }
  });
});

const display = document.getElementById("display");

window.addEventListener("keydown", (event) => {
  let chr = event.key.toUpperCase();
  const audio = document.querySelector(`audio[id="${chr}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  display.textContent = audio.parentNode.id;
  display.style.display = "flex";
});
