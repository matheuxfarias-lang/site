document.addEventListener("DOMContentLoaded", () => {
  // Ano no rodapé
  const ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

  // Menu mobile
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Cabeçalho com sombra ao rolar
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    if (header) header.style.boxShadow = window.scrollY > 8 ? "0 4px 18px rgba(10,25,41,0.08)" : "none";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Animação de revelação ao rolar
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // Formulário de contato -> abre WhatsApp com a mensagem preenchida
  const form = document.getElementById("contatoForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const dados = new FormData(form);
      const nome = dados.get("nome") || "";
      const telefone = dados.get("telefone") || "";
      const area = dados.get("area") || "";
      const mensagem = dados.get("mensagem") || "";

      const texto =
        `Olá, meu nome é ${nome}.\n` +
        `Telefone: ${telefone}\n` +
        `Área de interesse: ${area}\n` +
        `Mensagem: ${mensagem}`;

      const numeroWhatsApp = "5549999122820";
      const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
      window.open(url, "_blank", "noopener");
    });
  }
});
