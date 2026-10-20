const stage = document.querySelector(".journey-stage");
const steps = Array.from(document.querySelectorAll(".step"));
const screens = Array.from(document.querySelectorAll(".stage-screen")); // اضافه کن
const badge = document.getElementById("walkerBadge");
const walkerFace = document.getElementById("walkerFace"); // اضافه شده برای تغییر ایموجی وسط

// آرایه ایموجی‌ها برای هر ۳ مرحله
const stageFaces = ['🗣️', '💡', '🚀']; 

function clamp(n, min, max){ return Math.max(min, Math.min(max, n)); }

window.addEventListener("scroll", () => {
  if (!stage) return;
  const rect = stage.getBoundingClientRect();
  const total = stage.offsetHeight - window.innerHeight;
  const passed = clamp(-rect.top, 0, total);
  const progress = total === 0 ? 0 : (passed / total); // 0..1

  let current = 0;
  if (progress > 0.66) current = 2;
  else if (progress > 0.33) current = 1;

  steps.forEach((el, i) => el.classList.toggle("active", i === current));
   // 👈 این خط رو اینجا یعنی درست زیر خط بالا اضافه کن:
  screens.forEach((el, i) => el.classList.toggle("active", i === current));
  // آپدیت متن بدج و ایموجی وسط صفحه
  if (badge) badge.textContent = `مرحله ${current + 1} از ۳`;
  if (walkerFace) walkerFace.textContent = stageFaces[current];
});
