// Comportamentos de movimento do Elementor, sem dependências:
// - [data-anim]: animação de entrada quando o elemento entra na tela (uma vez só);
// - [data-count-to]: contador que sobe de 0 até o valor em 2s (widget Counter).
// O HTML já sai com o estado final, então sem JS a página fica completa.

const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Atalho para animar filhos de um bloco Markdown: data-anim-children="h2|fadeInUp|350;p:first-of-type|fadeInRight|350". */
function expandChildren() {
  document.querySelectorAll<HTMLElement>("[data-anim-children]").forEach((root) => {
    for (const rule of root.dataset.animChildren!.split(";")) {
      const [selector, anim, delay] = rule.split("|");
      root.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        el.dataset.anim ??= anim;
        if (delay) el.dataset.delay ??= delay;
      });
    }
  });
}

function countUp(el: HTMLElement) {
  const to = Number(el.dataset.countTo);
  const duration = Number(el.dataset.duration ?? 2000);
  const start = performance.now();
  const fmt = (n: number) => Math.round(n).toLocaleString("pt-BR");
  const tick = (now: number) => {
    const p = Math.min(1, (now - start) / duration);
    const eased = 0.5 - Math.cos(p * Math.PI) / 2; // "swing", como o numerator do Elementor
    el.textContent = fmt(to * eased);
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function init() {
  expandChildren();
  const anims = [...document.querySelectorAll<HTMLElement>("[data-anim]")];
  const counters = [...document.querySelectorAll<HTMLElement>("[data-count-to]")];
  if (reduced || !("IntersectionObserver" in window)) {
    anims.forEach((el) => el.classList.add("is-in"));
    return;
  }
  anims.forEach((el) => el.dataset.delay && el.style.setProperty("--vt-delay", `${el.dataset.delay}ms`));
  counters.forEach((el) => (el.textContent = "0"));

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        io.unobserve(el);
        if (el.dataset.countTo) countUp(el);
        else el.classList.add("is-in");
      }
    },
    { threshold: 0 },
  );
  [...anims, ...counters].forEach((el) => io.observe(el));
}

init();
