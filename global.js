// Menu Hambúrguer
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");
    navToggle.setAttribute("aria-expanded", isOpen);
  });
}

// Dropdown
document.querySelectorAll('.dropbtn').forEach(button => {
  button.addEventListener('click', (e) => {
    const dropdown = button.parentElement;
    const menu = dropdown.querySelector('.dropdown-content');
    const isOpen = dropdown.classList.toggle('open');
    
    // Atualiza atributo ARIA
    button.setAttribute('aria-expanded', isOpen);

    // Fecha outros dropdowns abertos
    document.querySelectorAll('.dropdown').forEach(other => {
      if (other !== dropdown) {
        other.classList.remove('open');
        const btn = other.querySelector('.dropbtn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
});

// Fecha o dropdown se clicar fora
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown').forEach(drop => {
      drop.classList.remove('open');
      const btn = drop.querySelector('.dropbtn');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  }
});

// Alterna entre modo claro e escuro
const toggleButton = document.getElementById('toggleMode');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = '☀️';
  } else {
    toggleButton.textContent = '🌙';
  }
});