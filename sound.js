function playBeep() {}
function playBeep() {
  const ctx = new AudioContext();
  const osc = ctx.createOscillator();
  osc.frequency.value = 880; // Hz
  osc.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.4); // 0,4 Sekunden
}
