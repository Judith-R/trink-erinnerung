document.getElementById("start").addEventListener("click", (e) => {
  e.target.disabled = true; // verhindert doppelten Start
  startTimer(playBeep, showCountdown);
});
