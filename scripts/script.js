const button = document.getElementById("theme-button");
const body = document.body;

// Persistência do tema
const savedTheme = localStorage.getItem("theme");
toggleTheme(savedTheme === "dark");

// Função para alternar entre tema claro e escuro
function toggleTheme(theme) {
  if (theme == true) {
    body.classList.add("dark");
    button.innerHTML = '<i class="fa-solid fa-circle-half-stroke"></i>';
  } else {
    body.classList.remove("dark");
    button.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

button.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark");
  toggleTheme(isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Scroll suave para links de navegação
const navLinks = document.querySelectorAll("#menu ul a.link");
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerHeight = document.querySelector("header").offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});
