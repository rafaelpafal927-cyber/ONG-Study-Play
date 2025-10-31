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

// Modo Escuro
(function () {
  const STORAGE_KEY = 'sp:dark-mode';
  const btn = document.getElementById('toggleMode');

  if (!btn) return;

  const saved = localStorage.getItem(STORAGE_KEY);
  const enabled = saved === '1';

  if (enabled) {
    document.body.classList.add('dark-mode');
    btn.textContent = '☀️';
    btn.setAttribute('aria-pressed', 'true');
    btn.setAttribute('aria-label', 'Desativar modo escuro');
  } else {
    btn.setAttribute('aria-pressed', 'false');
    btn.setAttribute('aria-label', 'Ativar modo escuro');
  }

  // Alternância
  btn.addEventListener('click', () => {
    // Impede conflito com alto contraste
    if (document.body.classList.contains('high-contrast')) {
      document.body.classList.remove('high-contrast');
      const contrastBtn = document.getElementById('toggleContrast');
      if (contrastBtn) {
        contrastBtn.setAttribute('aria-pressed', 'false');
        contrastBtn.setAttribute('aria-label', 'Ativar alto contraste');
      }
    }

    const isOn = document.body.classList.toggle('dark-mode');
    localStorage.setItem(STORAGE_KEY, isOn ? '1' : '0');

    // Atualiza ícone e acessibilidade
    btn.textContent = isOn ? '☀️' : '🌙';
    btn.setAttribute('aria-pressed', isOn ? 'true' : 'false');
    btn.setAttribute('aria-label', isOn ? 'Desativar modo escuro' : 'Ativar modo escuro');
  });
})();

// Alto Contraste
(function () {
  const STORAGE_KEY = 'sp:high-contrast';
  const btn = document.getElementById('toggleContrast');

  if (!btn) return;

  const saved = localStorage.getItem(STORAGE_KEY);
  const enabled = saved === '1';
  if (enabled) {
    document.body.classList.add('high-contrast');
    btn.setAttribute('aria-pressed', 'true');
    btn.setAttribute('aria-label', 'Desativar alto contraste');
  }

  // Alternância
  btn.addEventListener('click', () => {
    const isOn = document.body.classList.toggle('high-contrast');
    localStorage.setItem(STORAGE_KEY, isOn ? '1' : '0');

    // Atualiza ARIA
    btn.setAttribute('aria-pressed', isOn ? 'true' : 'false');
    btn.setAttribute('aria-label', isOn ? 'Desativar alto contraste' : 'Ativar alto contraste');

    // Impede conflito com modo escuro
    if (isOn) {
      document.body.classList.remove('dark-mode');
      const toggleMode = document.getElementById('toggleMode');
      if (toggleMode) toggleMode.textContent = '🌙';
    }
  });
})();
