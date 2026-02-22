// Nav scroll
const nav = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.1 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Form
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector(".btn-submit");
  btn.textContent = "✓ Sent! I'll be in touch soon 🌸";
  btn.style.background = "linear-gradient(135deg, #7a9470, #b8c5b0)";
  setTimeout(() => {
    btn.textContent = "Send with Love 💌";
    btn.style.background = "";
  }, 4000);
}
