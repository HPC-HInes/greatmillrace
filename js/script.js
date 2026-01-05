(function () {
  const hamburger = document.getElementById("hamburger");
  const drawer = document.getElementById("drawer");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("drawerClose");

  function openDrawer() {
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    hamburger?.setAttribute("aria-expanded", "true");
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    hamburger?.setAttribute("aria-expanded", "false");
    overlay.hidden = true;
    document.body.style.overflow = "";
  }

  hamburger?.addEventListener("click", openDrawer);
  closeBtn?.addEventListener("click", closeDrawer);
  overlay?.addEventListener("click", closeDrawer);

  // Close drawer when a link is clicked
  drawer?.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", closeDrawer);
  });

  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // Countdown timer
  // Set your race date/time here (local time).
  // Example: 2026-06-06T08:00:00
  const raceDate = new Date("2026-06-06T08:00:00");
  const out = document.getElementById("countdownTime");

  function tick() {
    if (!out) return;

    const now = new Date();
    const diff = raceDate.getTime() - now.getTime();

    if (isNaN(raceDate.getTime())) {
      out.textContent = "Set a race date in script.js";
      return;
    }

    if (diff <= 0) {
      out.textContent = "Race day is here!";
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    out.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  tick();
  setInterval(tick, 1000);

  // Escape key closes drawer
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.hidden) closeDrawer();
  });
})();
