// SISTEMA SINGLE PAGE APPLICATION (SPA)

// Utilitários mostrar/ocultar
function show(el) { el.hidden = false; }
function hide(el) { el.hidden = true; }

// Alertas
function showAlert(type = "success", message = "Ação realizada com sucesso!") {
  const alert = document.getElementById("alertGlobal");
  if (!alert) return;

  alert.classList.remove("alert--success", "alert--error");
  alert.classList.add(type === "error" ? "alert--error" : "alert--success");
  alert.textContent = message;
  show(alert);
  alert.scrollIntoView({ behavior: "smooth", block: "start" });
}

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

// Template Formulário
function getFormularioTemplate() {
  return `
    <h2>Cadastre-se e jogue junto com a gente!</h2>
    <p>
      Faça parte da <strong>Study&Play</strong> e contribua para levar o aprendizado através dos jogos a mais pessoas.
      Preencha o formulário abaixo para se cadastrar como voluntário, doador ou participante.
    </p>

    <!-- Alertas -->
    <div id="alertGlobal" class="alert alert--success" role="alert" hidden>
      ✅ Cadastro enviado com sucesso!
    </div>

    <form id="formCadastro">
      <fieldset>
        <legend>Informações Pessoais</legend>

        <label for="nomeCompleto">Nome Completo:</label>
        <input type="text" id="nomeCompleto" name="nomeCompleto" required placeholder="Ex: Ana Lu">

        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required placeholder="Ex: analu@dominio.com">

        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" name="cpf" required placeholder="000.000.000-00">

        <label for="telefone">Telefone:</label>
        <input type="tel" id="telefone" name="telefone" required placeholder="(00) 00000-0000">

        <label for="nascimento">Data de Nascimento:</label>
        <input type="date" id="nascimento" name="nascimento" required>
      </fieldset>

      <fieldset>
        <legend>Endereço</legend>

        <label for="endereco">Endereço:</label>
        <input type="text" id="endereco" name="endereco" required placeholder="Rua Exemplo, 123">

        <label for="cep">CEP:</label>
        <input type="text" id="cep" name="cep" required placeholder="00000-000">

        <label for="cidade">Cidade:</label>
        <input type="text" id="cidade" name="cidade" required>

        <label for="estado">Estado:</label>
        <input type="text" id="estado" name="estado" required maxlength="2" placeholder="SP">
      </fieldset>

      <fieldset>
        <legend>Participação</legend>
        <label for="tipoParticipacao">Como você gostaria de participar?</label>
        <select id="tipoParticipacao" name="tipoParticipacao" required>
          <option value="">Selecione uma opção</option>
          <option value="voluntario">Voluntário</option>
          <option value="doador">Doador</option>
          <option value="participante">Participante dos projetos</option>
        </select>
      </fieldset>

      <button id="submitButton" type="submit">Enviar Cadastro</button>
    </form>

    <p id="mensagemRetorno"></p>
  `;
}

// Injeta o template
function ensureFormRendered() {
  if (document.getElementById("formCadastro")) return; // já existe no DOM
  const target =
    document.getElementById("conteudoPrincipal") ||
    document.querySelector("main");
  if (!target) return;
  target.innerHTML = getFormularioTemplate();
}

// Modal
let modalEventsBound = false;

function openModal(nome = "visitante") {
  const modal = document.getElementById("confirmModal");
  const backdrop = document.getElementById("modalBackdrop");
  const modalNameSpan = document.getElementById("modalNome");
  if (!modal || !backdrop) return;
  if (modalNameSpan) modalNameSpan.textContent = nome;

  show(backdrop); show(modal);
  backdrop.classList.add("open");
  modal.classList.add("open");

  modal.setAttribute("tabindex", "-1");
  modal.focus();
}

function closeModal() {
  const modal = document.getElementById("confirmModal");
  const backdrop = document.getElementById("modalBackdrop");
  if (!modal || !backdrop) return;
  backdrop.classList.remove("open");
  modal.classList.remove("open");
  setTimeout(() => { hide(backdrop); hide(modal); }, 200);
}

function bindModalOnce() {
  if (modalEventsBound) return;
  const modal = document.getElementById("confirmModal");
  const backdrop = document.getElementById("modalBackdrop");
  const modalCloseBtn = document.getElementById("modalClose");

  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
  backdrop?.addEventListener("click", closeModal);
  modalCloseBtn?.addEventListener("click", closeModal);

  modalEventsBound = true;
}

// Validação
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

// Máscaras
function aplicarMascaras() {
  if (typeof $ === "undefined" || typeof $.fn.mask === "undefined") return;
  $("#cpf").mask("000.000.000-00");
  $("#telefone").mask("(00) 00000-0000");
  $("#cep").mask("00000-000");
}

// Bind do formulário
let formEventsBound = false;

function bindFormulario() {
  if (formEventsBound) return;

  const formCadastro = document.getElementById("formCadastro");
  if (!formCadastro) return;

  const campos = formCadastro.querySelectorAll("input[required], select[required]");

  campos.forEach(campo => {
    campo.addEventListener("blur", () => validarCampo(campo));
    campo.addEventListener("input", () => limparErro(campo));
  });

  formCadastro.addEventListener("submit", (e) => {
    e.preventDefault();

    let valido = true;
    campos.forEach(campo => {
      if (!validarCampo(campo)) valido = false;
    });

    if (!valido) {
      showAlert("error", "Por favor, corrija os campos destacados.");
      showToast("Existem campos inválidos ⚠️");
      return;
    }

    const nome = (document.getElementById("nomeCompleto")?.value || "visitante").trim();
    showAlert("success", "Cadastro enviado com sucesso!");
    showToast("Cadastro registrado! ✅");
    openModal(nome);
    formCadastro.reset();
  });

  formEventsBound = true;
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  ensureFormRendered();
  
  bindModalOnce();
  aplicarMascaras();
  bindFormulario();
});
