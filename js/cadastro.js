function enviarFormulario(event) {
    event.preventDefault();
    document.getElementById("mensagemRetorno").textContent = "Mensagem enviada com sucesso! Obrigado pelo contato.";
}

// Utilitários mostrar/ocultar
function show(el){ el.hidden = false; }
function hide(el){ el.hidden = true; }

// Alertas
function showAlert(type = "success", message = "Ação realizada com sucesso!") {
  const alert = document.getElementById("alertGlobal");
  if (!alert) return;

  alert.classList.remove("alert--success","alert--error");
  alert.classList.add(type === "error" ? "alert--error" : "alert--success");
  alert.textContent = message;
  show(alert);
  alert.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Toast
let toastTimeout;
function showToast(message = "Tudo certo! ✅", duration = 3000) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  show(toast);
  void toast.offsetWidth;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => hide(toast), 250);
  }, duration);
}

// Modal
const modal = document.getElementById("confirmModal");
const backdrop = document.getElementById("modalBackdrop");
const modalCloseBtn = document.getElementById("modalClose");
const modalNameSpan = document.getElementById("modalNome");

function openModal(nome = "visitante") {
  if (!modal || !backdrop) return;
  if (modalNameSpan) modalNameSpan.textContent = nome;
  show(backdrop); show(modal);
  backdrop.classList.add("open"); modal.classList.add("open");
  // foco acessível
  modal.setAttribute("tabindex","-1");
  modal.focus();
}

function closeModal() {
  if (!modal || !backdrop) return;
  backdrop.classList.remove("open");
  modal.classList.remove("open");
  setTimeout(() => { hide(backdrop); hide(modal); }, 200);
}

// Fechar no ESC e ao clicar fora
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
backdrop?.addEventListener("click", closeModal);
modalCloseBtn?.addEventListener("click", closeModal);

// Envio do formulário
const form = document.getElementById("formCadastro");
form?.addEventListener("submit", (e) => {
  e.preventDefault();

  // Leitura do nome
  const nome = (document.getElementById("nomeCompleto")?.value || "visitante").trim();

  // Simulando sucesso
  showAlert("success", "Cadastro enviado com sucesso!");
  showToast("Cadastro registrado! ✅");
  openModal(nome);

  // Limpar o formulário
  form.reset();
});

// Validação visual
const formCadastro = document.getElementById("formCadastro");

if (formCadastro) {
  const campos = formCadastro.querySelectorAll("input[required], select[required]");

  campos.forEach(campo => {
    campo.addEventListener("blur", () => validarCampo(campo));
    campo.addEventListener("input", () => limparErro(campo));
  });

  formCadastro.addEventListener("submit", (e) => {
    let valido = true;
    campos.forEach(campo => {
      if (!validarCampo(campo)) valido = false;
    });
    if (!valido) {
      e.preventDefault();
      showAlert("error", "Por favor, corrija os campos destacados.");
      showToast("Existem campos inválidos ⚠️");
    }
  });
}

function validarCampo(campo) {
  limparErro(campo);

  if (campo.validity.valueMissing) {
    mostrarErro(campo, "Este campo é obrigatório.");
    return false;
  }

  if (campo.type === "email" && !campo.value.includes("@")) {
    mostrarErro(campo, "Digite um e-mail válido (ex: usuario@dominio.com).");
    return false;
  }

  if (campo.id === "cpf" && campo.value.replace(/\D/g, "").length < 11) {
    mostrarErro(campo, "CPF incompleto.");
    return false;
  }

  if (campo.id === "telefone" && campo.value.replace(/\D/g, "").length < 10) {
    mostrarErro(campo, "Telefone incompleto.");
    return false;
  }

  return true;
}

function mostrarErro(campo, mensagem) {
  campo.classList.add("input-error");
  const erro = document.createElement("div");
  erro.className = "error-message";
  erro.textContent = mensagem;
  campo.insertAdjacentElement("afterend", erro);
}

function limparErro(campo) {
  campo.classList.remove("input-error");
  const proximo = campo.nextElementSibling;
  if (proximo && proximo.classList.contains("error-message")) {
    proximo.remove();
  }
}
