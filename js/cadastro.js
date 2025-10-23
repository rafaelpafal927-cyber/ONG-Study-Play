function enviarFormulario(event) {
    event.preventDefault();
    document.getElementById("mensagemRetorno").textContent = "Mensagem enviada com sucesso! Obrigado pelo contato.";
}

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