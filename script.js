const stage = document.querySelector(".journey-stage");
const steps = Array.from(document.querySelectorAll(".step"));
const badge = document.getElementById("walkerBadge");

function clamp(n, min, max){ return Math.max(min, Math.min(max, n)); }

window.addEventListener("scroll", () => {
  const rect = stage.getBoundingClientRect();
  const total = stage.offsetHeight - window.innerHeight;
  const passed = clamp(-rect.top, 0, total);
  const progress = total === 0 ? 0 : (passed / total); // 0..1

  let current = 0;
  if (progress > 0.66) current = 2;
  else if (progress > 0.33) current = 1;

  steps.forEach((el, i) => el.classList.toggle("active", i === current));
  badge.textContent = `مرحله ${current + 1}`;
});
