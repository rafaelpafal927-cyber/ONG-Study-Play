# ONG Study&Play

O projeto **ONG Study&Play** é uma aplicação web fictícia voltada para educação através de jogos, desenvolvida como atividade acadêmica prática.  
Seu objetivo é aplicar conhecimentos de **HTML5, CSS3, JavaScript**, **Acessibilidade (WCAG)**, **Responsividade** e **Git**.

---

## Sumário
- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Acessibilidade](#acessibilidade)
- [Design System](#design-system)
- [Responsividade](#responsividade)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Otimização](#otimização)
- [Como Executar o Projeto](#como-executar-o-projeto)

---

## Visão Geral

O site da **ONG Study&Play** promove iniciativas de educação inclusiva baseadas em jogos, incentivando o aprendizado criativo e colaborativo.  
O projeto foi construído do zero com estrutura semântica, acessível e totalmente responsiva, incluindo **modo escuro** e **modo alto contraste** com persistência da preferência do usuário.

---

## Funcionalidades

| Recurso | Descrição |
|----------|------------|
| Página Inicial (`index.html`) | Apresenta a ONG e sua missão, com destaques e hashtags temáticas. |
| Projetos (`projetos.html`) | Lista os projetos educacionais com cartões interativos e acessíveis. |
| Cadastro (`cadastro.html`) | SPA com formulário dinâmico, máscaras de input e modal de confirmação. |
| Modo Escuro (Dark Mode) | Alterna entre tema claro e escuro, persistente via `localStorage`. |
| Modo Alto Contraste | Recurso de acessibilidade para usuários com baixa visão, também persistente e exclusivo. |
| Menu Responsivo | Menu hambúrguer com dropdown acessível (ARIA) e navegação por teclado. |
| Feedback Dinâmico | Modal e toast acessíveis com `aria-live` para leitores de tela. |

---

## Acessibilidade

O site segue as diretrizes **WCAG 2.1 nível AA**, aplicando:

- Estrutura semântica com tags `header`, `main`, `nav` e `footer`.  
- Rótulos e estados via atributos ARIA (`aria-label`, `aria-expanded`, `aria-pressed`, `aria-live`).  
- Navegação completa por teclado (TAB / SHIFT + TAB).  
- Foco visível personalizado com pseudo-classe `:focus-visible`.  
- Contraste mínimo de 4.5:1 em todos os textos e botões.  
- Modos **Dark** e **High Contrast** independentes e persistentes entre páginas.  

---

## Design System

### Paleta de Cores

| Variável | Cor | Uso |
|-----------|------|-----|
| `--primary` | `#3a86ff` | Cor principal (azul). |
| `--primary-dark` | `#1262db` | Tons mais escuros e hover. |
| `--secondary` | `#ffbe0b` | Destaques e ícones. |
| `--gray-light` | `#f5f7fa` | Fundo claro. |
| `--gray-dark` | `#1f2937` | Texto principal. |
| `--black` / `--white` | `#000000` / `#ffffff` | Contraste básico. |

### Escala de Espaçamento

Base de 8px para todos os componentes:

| Variável | Valor |
|-----------|--------|
| `--spacing-xs` | 8px |
| `--spacing-sm` | 16px |
| `--spacing-md` | 24px |
| `--spacing-lg` | 32px |
| `--spacing-xl` | 48px |
| `--spacing-xxl` | 64px |

---

## Responsividade

O layout foi construído com **CSS Grid** e **Media Queries**, garantindo adaptabilidade em três níveis principais:

| Dispositivo | Breakpoint | Ajustes |
|--------------|-------------|----------|
| Desktop | ≥ 1024px | Grid de 3 colunas. |
| Tablet | < 1024px | Grid de 2 colunas. |
| Mobile | < 768px | Layout em 1 coluna e menu hambúrguer. |

---

## Estrutura de Pastas

```bash
ONG-StudyPlay/
│
├── index.html
├── projetos.html
├── cadastro.html
│
├── css/
│   ├── layout.css
│   ├── index.css
│   ├── projetos.css
│   ├── cadastro.css
│   └── *.min.css        # versões minificadas
│
├── js/
│   ├── global.js
│   ├── index.js
│   ├── projetos.js
│   ├── cadastro.js
│   └── *.min.js         # versões minificadas
│
├── assets/
│   └── imagens/
│       ├── banner.png
│       ├── GameEducation.jpg
│       ├── VoluntariadoLúdico.jpg
│       ├── Doe.webp
│       └── (imagens otimizadas)
│
└── README.md
```

# Tecnologias Utilizadas

- **HTML5** — Estrutura semântica e landmarks ARIA.  
- **CSS3** — Responsividade, design system, dark mode e alto contraste.  
- **JavaScript (ES6)** — Interatividade, SPA, validações e acessibilidade.  
- **jQuery + jQuery Mask Plugin** — Máscaras de CPF, telefone e CEP.  
- **TinyPNG / Squoosh** — Compressão e otimização de imagens.  
- **MinifyAll (VS Code)** — Minificação de CSS, JS e HTML.  
- **Git / GitHub Pages** — Controle de versão e hospedagem estática.  

---

# Otimização

## Minificação

Todos os arquivos `.html`, `.css` e `.js` foram minificados com a extensão **MinifyAll**, reduzindo significativamente o tempo de carregamento e melhorando a performance geral do site.

## Compressão de Imagens

As imagens em `assets/imagens/` foram otimizadas utilizando **TinyPNG** e **Squoosh**, preservando a qualidade visual e reduzindo o tamanho dos arquivos para carregamento mais rápido.

---

# Como Executar o Projeto

## Executar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/ong-studyplay.git
   cd ong-studyplay
   ```
2. Abra o projeto no Visual Studio Code (VS Code).

3. Execute com o Live Server (extensão recomendada):
- Clique com o botão direito no arquivo index.html.
- Selecione Open with Live Server.

4. Alternativamente, abra diretamente o arquivo index.html no navegador.

---
