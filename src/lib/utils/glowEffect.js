// src/lib/utils/glowEffect.js

export function initGlowEffect() {
  const glow = document.getElementById("glowEffect");

  document.addEventListener("mousemove", (e) => {
            glow.style.left = e.clientX + "px";  // posisi X mengikuti mouse
            glow.style.top = e.clientY + "px";   // posisi Y mengikuti mouse
            glow.style.opacity = "1";            // tampilkan glow
        });

  document.addEventListener("mouseleave", () => {
            glow.style.opacity = "0";
        });

  document.addEventListener("mouseenter", () => {
            glow.style.opacity = "1";
        });
}