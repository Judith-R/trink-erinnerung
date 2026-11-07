function startTimer(onTenMinutes) {}
function startTimer(onTenMinutes) {
  const INTERVAL = 10 * 60 * 1000; // 10 Minuten in Millisekunden
  setInterval(onTenMinutes, INTERVAL);
}
