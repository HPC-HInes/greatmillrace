(function () {
  const hamburger = document.getElementById("hamburger");
  const drawer = document.getElementById("drawer");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("drawerClose");

  function openDrawer() {
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    hamburger && hamburger.setAttribute("aria-expanded", "true");
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    hamburger && hamburger.setAttribute("aria-expanded", "false");
    overlay.hidden = true;
    document.body.style.overflow = "";
  }

  hamburger && hamburger.addEventListener("click", openDrawer);
  closeBtn && closeBtn.addEventListener("click", closeDrawer);
  overlay && overlay.addEventListener("click", closeDrawer);

  if (drawer) drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeDrawer));

  const raceDate = new Date("2026-06-06T08:00:00");
  const out = document.getElementById("countdownTime");

  function tick() {
    if (!out) return;
    const now = new Date();
    const diff = raceDate.getTime() - now.getTime();
    if (isNaN(raceDate.getTime())) { out.textContent = "Set race date in js/site.js"; return; }
    if (diff <= 0) { out.textContent = "Race day is here!"; return; }

    const s = Math.floor(diff / 1000);
    const d = Math.floor(s / 86400);
    const h = Math.floor((s % 86400) / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    out.textContent = `${d}d ${h}h ${m}m ${sec}s`;
  }

  tick();
  setInterval(tick, 1000);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay && !overlay.hidden) closeDrawer();
  });
})();