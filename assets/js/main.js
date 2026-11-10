(function () {
  const NAME = "Pedro Canil";
  const pages = [
    ["index.html", "inicio"],
    ["presentacion.html", "presentación"],
    ["competencias.html", "competencias"],
    ["reflexion.html", "reflexión"],
    ["valoracion.html", "valoración"]
  ];
  const here = location.pathname.split("/").pop() || "index.html";

  // Tema
  const saved = (() => { try { return localStorage.getItem("theme"); } catch (e) { return null; } })();
  if (saved) document.documentElement.dataset.theme = saved;

  const header = document.getElementById("site-header");
  if (header) {
    header.innerHTML = `
      <a class="logo" href="index.html" aria-label="Inicio">${NAME.split(" ")[0]}<span>.</span>${NAME.split(" ")[1]}</a>
      <button class="menu-btn" aria-label="Menú" aria-expanded="false">☰</button>
      <nav id="nav">
        ${pages.map(([h, l]) => `<a href="${h}" class="${h === here ? "active" : ""}">// ${l}</a>`).join("")}
        <button class="theme-btn" aria-label="Cambiar tema">◐</button>
      </nav>`;
    const btn = header.querySelector(".menu-btn");
    btn.addEventListener("click", () => {
      const open = header.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
    });
    header.querySelector(".theme-btn").addEventListener("click", () => {
      const cur = document.documentElement.dataset.theme ||
        (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
      const next = cur === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML = `<p>© 2026 ${NAME} · Administración de Empresas · UVG Altiplano</p>`;
  }

  // Helpers de render
  const ext = f => f.split(".").pop().toUpperCase();
  const card = w => `
    <article class="card" data-comp="${w.comp}">
      <div class="thumb"><span class="ext">${ext(w.file)}</span><span class="tipo">${w.tipo}</span></div>
      <div class="body">
        <h3>${w.titulo}</h3>
        <p>${w.desc}</p>
        <div class="tags">${w.tags.map(t => `<span>${t}</span>`).join("")}</div>
        <div class="meta">${[w.fecha, w.equipo].filter(Boolean).join(" · ")}</div>
        <a class="link" href="assets/trabajos/${w.file}" ${ext(w.file) === "PDF" ? 'target="_blank" rel="noopener"' : "download"}>
          ${ext(w.file) === "PDF" ? "Ver trabajo" : "Descargar"} →</a>
      </div>
    </article>`;

  // Competencias: filtro + tarjetas
  const grid = document.getElementById("works-grid");
  if (grid) {
    const filters = document.getElementById("filters");
    const comps = window.COMPETENCIAS, works = window.WORKS;
    const count = id => works.filter(w => w.comp === id).length;
    filters.innerHTML =
      `<button class="active" data-f="all">Todos <sup>${String(works.length).padStart(2, "0")}</sup></button>` +
      comps.map(c => `<button data-f="${c.id}">${c.nombre} <sup>${String(count(c.id)).padStart(2, "0")}</sup></button>`).join("");
    const info = document.getElementById("comp-info");
    const render = f => {
      const list = f === "all" ? works : works.filter(w => w.comp === f);
      grid.innerHTML = list.map(card).join("");
      const c = comps.find(x => x.id === f);
      info.textContent = c ? c.desc : "Elige una competencia para ver su descripción y las evidencias que la respaldan.";
    };
    filters.addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b) return;
      filters.querySelectorAll("button").forEach(x => x.classList.toggle("active", x === b));
      render(b.dataset.f);
    });
    const h = location.hash.slice(1);
    if (h && comps.some(c => c.id === h)) filters.querySelector(`[data-f="${h}"]`).click();
    else render("all");
  }

  // Inicio: resumen de competencias
  const cl = document.getElementById("comp-list");
  if (cl) {
    cl.innerHTML = window.COMPETENCIAS.map((c, i) => {
      const n = window.WORKS.filter(w => w.comp === c.id).length;
      return `<a class="service" href="competencias.html#${c.id}">
        <span class="num">0${i + 1}</span><h3>${c.nombre}</h3><p>${c.desc}</p>
        <span class="count">${n} evidencia${n === 1 ? "" : "s"} →</span></a>`;
    }).join("");
  }

  // Valoración de pares
  const pares = document.getElementById("pares");
  if (pares) {
    pares.innerHTML = window.PARES.map(p =>
      `<blockquote><p>“${p.texto}”</p><cite>— ${p.nombre}</cite></blockquote>`).join("");
  }
})();
