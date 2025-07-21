const typingText = [
  "Pelajar & Web Enthusiast",
  "Belajar HTML, CSS, JavaScript",
  "Membangun website modern"
];

let idx = 0, charIdx = 0, isDeleting = false;

function typeEffect() {
  const el = document.getElementById("typing");
  if (!el) return;
  let current = typingText[idx];
  let display = isDeleting ? current.substring(0, charIdx--) : current.substring(0, charIdx++);

  el.textContent = display;

  if (!isDeleting && charIdx === current.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    idx = (idx + 1) % typingText.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

window.onload = typeEffect;