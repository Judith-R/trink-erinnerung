function startTimer(onTenMinutes, onTick) {
  const INTERVAL = 10 * 60; // Sekunden
  let remaining = INTERVAL;
  onTick(remaining);

  setInterval(() => {
    remaining--;
    if (remaining <= 0) {
      onTenMinutes();
      remaining = INTERVAL;
    }
    onTick(remaining);
  }, 1000);
}
