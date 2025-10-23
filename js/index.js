// Alternar entre modo claro e escuro
const toggleButton = document.getElementById('toggleMode');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = '☀️';
  } else {
    toggleButton.textContent = '🌙';
  }
});

// Texto dinâmico (muda automaticamente)
const mensagens = [
    "Você pode fazer a diferença!",
    "Junte-se a nós e transforme vidas.",
    "Doe amor, doe esperança.",
    "Cada gesto conta."
];
let index = 0;
const textElement = document.getElementById("changingText");

function atualizarTexto() {
    textElement.textContent = mensagens[index];
    index = (index + 1) % mensagens.length;
}

atualizarTexto();
setInterval(atualizarTexto, 3000);