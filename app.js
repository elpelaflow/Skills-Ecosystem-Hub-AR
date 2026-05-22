const skills = [
  {
    id: "trademark-registration",
    name: "Trademark Registration",
    tagline: "Prepara solicitudes de marca ante INPI con clases, antecedentes y borradores por clase.",
    category: "Propiedad Intelectual",
    agency: "INPI",
    law: "Ley de Marcas / INPI",
    maturity: "v2",
    repo: "file:///home/dev-flow/Trademark-Registration-Skill-AR",
    outputs: ["Clases sugeridas", "Búsqueda base de antecedentes", "Solicitud por clase"],
    inputs: ["Nombre de marca", "Productos/servicios", "Uso previsto"],
    tags: ["marca", "niza", "clases", "antecedentes"],
    related: ["software-copyright-registration", "patent-application-preparation"],
    type: "registro",
  },
  {
    id: "personal-data-registry",
    name: "Personal Data Registry",
    tagline: "Ordena cumplimiento AAIP: responsable, bases, seguridad, derechos y transferencias.",
    category: "Compliance y Datos",
    agency: "AAIP",
    law: "Ley 25.326",
    maturity: "v2",
    repo: "file:///home/dev-flow/Personal-Data-Registry-Skill-AR",
    outputs: ["Mapa de tratamientos", "Fichas por base", "Plan de seguridad", "Checklist de inspección"],
    inputs: ["Sistemas", "Datos tratados", "Vendors", "Responsable"],
    tags: ["aaip", "bases", "seguridad", "derechos"],
    related: ["terms-privacy", "legal-documentation-validation"],
    type: "compliance",
  },
  {
    id: "software-development-contract",
    name: "Software Development Contract",
    tagline: "Genera contratos de desarrollo a medida con alcance, pagos, aceptación e IP.",
    category: "Contratos",
    agency: "Privado / CCCN",
    law: "CCCN + práctica contractual",
    maturity: "base",
    repo: "file:///home/dev-flow/Software-Development-Contract-Skill-AR",
    outputs: ["Matriz de alcance", "Esquema de pagos", "Matriz de PI", "Borrador contractual"],
    inputs: ["Partes", "Proyecto", "Entregables", "Plazo", "Pago"],
    tags: ["contrato", "desarrollo", "ip", "alcance"],
    related: ["nda", "smart-contracts"],
    type: "contrato",
  },
  {
    id: "terms-privacy",
    name: "Terms + Privacy",
    tagline: "Produce Términos y Política de Privacidad coordinados para apps y servicios digitales.",
    category: "Compliance y Datos",
    agency: "AAIP",
    law: "Ley 25.326",
    maturity: "v2",
    repo: "file:///home/dev-flow/Terms-Privacy-Skill-AR",
    outputs: ["Mapa del servicio", "Matriz de privacidad", "Matriz de términos", "Documentos finales"],
    inputs: ["Producto", "Datos", "Trackers", "Pagos", "Permisos"],
    tags: ["privacidad", "terminos", "cookies", "mobile"],
    related: ["personal-data-registry", "legal-documentation-validation"],
    type: "documentacion",
  },
  {
    id: "nda",
    name: "NDA",
    tagline: "Prepara acuerdos de confidencialidad unilaterales o mutuos con paquete de firma.",
    category: "Contratos",
    agency: "Privado / Firma",
    law: "Ley 25.506 + CCCN",
    maturity: "v2",
    repo: "file:///home/dev-flow/NDA-Skill-AR",
    outputs: ["Matriz de confidencialidad", "Paquete de firma", "NDA listo para circular"],
    inputs: ["Partes", "Tipo de NDA", "Información a cubrir", "Plazo"],
    tags: ["nda", "confidencialidad", "firma", "due-diligence"],
    related: ["software-development-contract", "legal-documentation-validation"],
    type: "contrato",
  },
  {
    id: "smart-contracts",
    name: "Smart Contracts",
    tagline: "Modela la lógica jurídico-técnica previa a un smart contract y sus límites regulatorios.",
    category: "Contratos",
    agency: "Privado / BCRA",
    law: "CCCN + entorno cripto",
    maturity: "v2",
    repo: "file:///home/dev-flow/Smart-Contracts-Skill-AR",
    outputs: ["Matriz legal", "Mapa on-chain/off-chain", "Matriz de riesgo", "Spec técnica"],
    inputs: ["Lógica del acuerdo", "Eventos", "Pagos", "Oráculos"],
    tags: ["blockchain", "escrow", "risk", "onchain"],
    related: ["software-development-contract", "nda"],
    type: "contrato",
  },
  {
    id: "knowledge-economy-law",
    name: "Knowledge Economy Law",
    tagline: "Arma elegibilidad, evidencia técnica y permanencia para el régimen de Economía del Conocimiento.",
    category: "Beneficios y Promoción",
    agency: "Registro EDC",
    law: "Ley 27.506",
    maturity: "v2",
    repo: "file:///home/dev-flow/Knowledge-Economy-Law-Skill-AR",
    outputs: ["Señales elegibles", "Evidencia técnica", "Solicitud", "Checklist de permanencia"],
    inputs: ["Proyecto", "Actividad", "Documentación técnica", "Indicadores"],
    tags: ["economia", "beneficios", "promocion", "elegibilidad"],
    related: ["service-export-invoicing", "legal-documentation-validation"],
    type: "promocion",
  },
  {
    id: "service-export-invoicing",
    name: "Service Export Invoicing",
    tagline: "Ordena factura E, semáforo fiscal y checklist cambiario para exportación de servicios.",
    category: "Fiscal y Comercio Exterior",
    agency: "ARCA / BCRA",
    law: "Factura E + exterior y cambios",
    maturity: "v2",
    repo: "file:///home/dev-flow/Service-Export-Invoicing-Skill-AR",
    outputs: ["Matriz de factura", "Matriz fiscal", "Checklist cambiario", "Guía operativa"],
    inputs: ["Contrato", "Cliente exterior", "Canal de cobro", "Régimen fiscal"],
    tags: ["factura e", "exportacion", "arca", "bcra"],
    related: ["knowledge-economy-law", "legal-documentation-validation"],
    type: "fiscal",
  },
  {
    id: "software-copyright-registration",
    name: "Software Copyright Registration",
    tagline: "Prepara el expediente de registro de software ante DNDA con código y contexto funcional.",
    category: "Propiedad Intelectual",
    agency: "DNDA",
    law: "Ley 11.723",
    maturity: "base",
    repo: "file:///home/dev-flow/Software-Copyright-Registration-Skill-AR",
    outputs: ["Borrador de campos", "Dossier de código", "Descripción funcional"],
    inputs: ["Proyecto", "Autores", "Titularidad", "Código fuente"],
    tags: ["dnda", "software", "autor", "expediente"],
    related: ["trademark-registration", "patent-application-preparation"],
    type: "registro",
  },
  {
    id: "patent-application-preparation",
    name: "Patent Application Preparation",
    tagline: "Construye una divulgación técnica inicial de patente para Argentina orientada a INPI.",
    category: "Propiedad Intelectual",
    agency: "INPI",
    law: "Ley 24.481",
    maturity: "base",
    repo: "file:///home/dev-flow/Patent-Application-Preparation-Skill-AR",
    outputs: ["Problema técnico", "Puntos inventivos", "Antecedentes", "Borrador base"],
    inputs: ["Tecnología", "Material técnico", "Arquitectura", "Diferencial"],
    tags: ["patente", "invencion", "inpi", "arte previo"],
    related: ["software-copyright-registration", "trademark-registration"],
    type: "registro",
  },
  {
    id: "legal-documentation-validation",
    name: "Legal Documentation Validation",
    tagline: "Valida localización argentina, referencias legales, formato y PDFs de todas las demás skills.",
    category: "Meta-Skills",
    agency: "Transversal",
    law: "QA documental",
    maturity: "base",
    repo: "file:///home/dev-flow/Legal-Documentation-Validation-Skill-AR",
    outputs: ["Inventario documental", "Señales de referencia", "Matriz de validación", "Reporte final"],
    inputs: ["Carpeta de borradores", "Contexto esperado", "PDFs"],
    tags: ["qa", "validacion", "meta", "documental"],
    related: ["personal-data-registry", "terms-privacy", "nda", "service-export-invoicing", "knowledge-economy-law"],
    type: "meta",
  },
];

const categorySummaries = {
  "Propiedad Intelectual": "Protección registral y documental de software, marcas e invenciones.",
  "Compliance y Datos": "Cumplimiento documental y operativo frente a datos personales y documentos de producto.",
  Contratos: "Instrumentos privados para desarrollo, confidencialidad y automatización contractual.",
  "Fiscal y Comercio Exterior": "Facturación, divisas y operación de servicios hacia el exterior.",
  "Beneficios y Promoción": "Aprovechamiento de regímenes de incentivo y continuidad documental.",
  "Meta-Skills": "Capa transversal de control de calidad y validación final.",
};

const mapColumns = [
  {
    title: "Producto y Documentación",
    nodes: ["Terms + Privacy", "Personal Data Registry", "Legal Documentation Validation"],
  },
  {
    title: "Contratos y Operación",
    nodes: ["Software Development Contract", "NDA", "Smart Contracts"],
  },
  {
    title: "Registro y Expansión",
    nodes: [
      "Software Copyright Registration",
      "Patent Application Preparation",
      "Trademark Registration",
      "Knowledge Economy Law",
      "Service Export Invoicing",
    ],
  },
];

const state = {
  search: "",
  category: "Todas",
  agency: "Todos",
  view: "grid",
  selectedId: skills[0].id,
};

const skillMap = new Map(skills.map((skill) => [skill.id, skill]));

const categoryFilters = document.getElementById("categoryFilters");
const agencyFilters = document.getElementById("agencyFilters");
const skillsGrid = document.getElementById("skillsGrid");
const searchInput = document.getElementById("searchInput");
const resultsCount = document.getElementById("resultsCount");
const activeFilters = document.getElementById("activeFilters");
const detailPanel = document.getElementById("detailPanel");
const relatedSkills = document.getElementById("relatedSkills");
const detailMeta = document.getElementById("detailMeta");
const categoryGrid = document.getElementById("categoryGrid");
const mapShell = document.getElementById("mapShell");
const repoTable = document.getElementById("repoTable");
const heroMetrics = document.getElementById("heroMetrics");
const signalStack = document.getElementById("signalStack");

function unique(values) {
  return [...new Set(values)];
}

function createFilterButtons(container, items, allLabel, stateKey) {
  const values = [allLabel, ...items];
  container.innerHTML = "";
  values.forEach((value) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip ${state[stateKey] === value ? "active" : ""}`;
    button.textContent = value;
    button.addEventListener("click", () => {
      state[stateKey] = value;
      render();
    });
    container.appendChild(button);
  });
}

function filteredSkills() {
  return skills.filter((skill) => {
    const matchesCategory = state.category === "Todas" || skill.category === state.category;
    const matchesAgency = state.agency === "Todos" || skill.agency === state.agency;
    const haystack = [
      skill.name,
      skill.tagline,
      skill.category,
      skill.agency,
      skill.law,
      ...skill.tags,
      ...skill.outputs,
    ]
      .join(" ")
      .toLowerCase();
    const matchesSearch = !state.search || haystack.includes(state.search.toLowerCase());
    return matchesCategory && matchesAgency && matchesSearch;
  });
}

function renderHero() {
  heroMetrics.innerHTML = "";
  [
    { label: "skills activas", value: String(skills.length) },
    { label: "categorías", value: String(unique(skills.map((s) => s.category)).length) },
    { label: "organismos / marcos", value: String(unique(skills.map((s) => s.agency)).length) },
  ].forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.value}</strong><span>${item.label}</span>`;
    heroMetrics.appendChild(li);
  });

  signalStack.innerHTML = "";
  [
    { title: "Base modular", body: "Repos independientes con una misma arquitectura operacional." },
    { title: "Foco Argentina", body: "Leyes, organismos, formatos y flujos alineados al contexto local." },
    { title: "Escalabilidad", body: "Cada skill puede expandirse a v2 o especializarse como v3." },
  ].forEach((item) => {
    const card = document.createElement("div");
    card.className = "signal-pill";
    card.innerHTML = `<strong>${item.title}</strong><span>${item.body}</span>`;
    signalStack.appendChild(card);
  });
}

function renderCards(list) {
  const template = document.getElementById("skillCardTemplate");
  skillsGrid.className = `skills-grid ${state.view === "lane" ? "lane" : ""}`;
  skillsGrid.innerHTML = "";

  list.forEach((skill) => {
    const fragment = template.content.cloneNode(true);
    const button = fragment.querySelector(".skill-card");
    button.classList.toggle("selected", state.selectedId === skill.id);
    fragment.querySelector(".skill-category").textContent = skill.category;
    fragment.querySelector(".skill-agency").textContent = skill.agency;
    fragment.querySelector(".skill-title").textContent = skill.name;
    fragment.querySelector(".skill-tagline").textContent = skill.tagline;
    const tagsWrap = fragment.querySelector(".skill-tags");
    skill.tags.slice(0, 4).forEach((tag) => {
      const span = document.createElement("span");
      span.className = "tag";
      span.textContent = tag;
      tagsWrap.appendChild(span);
    });
    button.addEventListener("click", () => {
      state.selectedId = skill.id;
      render();
      document.getElementById("skill-detail").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    skillsGrid.appendChild(fragment);
  });
}

function renderToolbar(list) {
  resultsCount.textContent = `${list.length} skill${list.length === 1 ? "" : "s"} visibles`;
  activeFilters.innerHTML = "";
  [
    state.category !== "Todas" ? state.category : null,
    state.agency !== "Todos" ? state.agency : null,
    state.search ? `buscar: ${state.search}` : null,
  ]
    .filter(Boolean)
    .forEach((item) => {
      const span = document.createElement("span");
      span.className = "tag";
      span.textContent = item;
      activeFilters.appendChild(span);
    });
}

function renderDetail() {
  const selected = skillMap.get(state.selectedId) ?? skills[0];
  detailPanel.innerHTML = `
    <div class="detail-kicker">${selected.category} · ${selected.agency}</div>
    <h3>${selected.name}</h3>
    <p>${selected.tagline}</p>
    <div class="detail-columns">
      <section class="detail-block">
        <h4>Inputs esperados</h4>
        <ul>${selected.inputs.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
      <section class="detail-block">
        <h4>Outputs principales</h4>
        <ul>${selected.outputs.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
    </div>
    <div class="detail-columns">
      <section class="detail-block">
        <h4>Marco / ley</h4>
        <p>${selected.law}</p>
      </section>
      <section class="detail-block">
        <h4>Repo</h4>
        <p><a class="repo-link" href="${selected.repo}">${selected.repo}</a></p>
      </section>
    </div>
  `;

  detailMeta.innerHTML = "";
  [
    ["Madurez", selected.maturity],
    ["Organismo", selected.agency],
    ["Tipo", selected.type],
    ["Tags", selected.tags.join(", ")],
  ].forEach(([label, value]) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${label}</span><span>${value}</span>`;
    detailMeta.appendChild(li);
  });

  relatedSkills.innerHTML = "";
  selected.related
    .map((id) => skillMap.get(id))
    .filter(Boolean)
    .forEach((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "related-chip";
      button.textContent = item.name;
      button.addEventListener("click", () => {
        state.selectedId = item.id;
        render();
      });
      relatedSkills.appendChild(button);
    });
}

function renderCategories() {
  categoryGrid.innerHTML = "";
  Object.entries(categorySummaries).forEach(([name, summary]) => {
    const card = document.createElement("article");
    card.className = "category-card";
    const categorySkills = skills.filter((skill) => skill.category === name);
    card.innerHTML = `
      <span class="panel-label">${categorySkills.length} skills</span>
      <h3>${name}</h3>
      <p>${summary}</p>
      <ul>${categorySkills.map((skill) => `<li>${skill.name}</li>`).join("")}</ul>
    `;
    categoryGrid.appendChild(card);
  });
}

function renderMap() {
  mapShell.innerHTML = "";
  mapColumns.forEach((column) => {
    const wrapper = document.createElement("article");
    wrapper.className = "map-column";
    const flow = document.createElement("div");
    flow.className = "map-flow";
    column.nodes.forEach((node, index) => {
      const nodeCard = document.createElement("div");
      nodeCard.className = "map-node";
      nodeCard.textContent = node;
      flow.appendChild(nodeCard);
      if (index < column.nodes.length - 1) {
        const arrow = document.createElement("div");
        arrow.className = "map-arrow";
        arrow.textContent = "↓";
        flow.appendChild(arrow);
      }
    });
    wrapper.innerHTML = `<h3>${column.title}</h3>`;
    wrapper.appendChild(flow);
    mapShell.appendChild(wrapper);
  });
}

function renderRepos() {
  repoTable.innerHTML = "";
  skills.forEach((skill) => {
    const row = document.createElement("article");
    row.className = "repo-row";
    row.innerHTML = `
      <div>
        <strong>${skill.name}</strong>
        <p>${skill.tagline}</p>
      </div>
      <div>${skill.category}</div>
      <div><span class="repo-pill">${skill.maturity}</span></div>
      <div><a class="repo-link" href="${skill.repo}">Abrir repo</a></div>
    `;
    repoTable.appendChild(row);
  });
}

function render() {
  createFilterButtons(categoryFilters, unique(skills.map((skill) => skill.category)), "Todas", "category");
  createFilterButtons(agencyFilters, unique(skills.map((skill) => skill.agency)), "Todos", "agency");
  const list = filteredSkills();
  if (!list.some((skill) => skill.id === state.selectedId) && list.length > 0) {
    state.selectedId = list[0].id;
  }
  renderToolbar(list);
  renderCards(list);
  renderDetail();
  renderCategories();
  renderMap();
  renderRepos();
  renderHero();
}

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value.trim();
  render();
});

document.querySelectorAll(".toggle").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".toggle").forEach((node) => node.classList.remove("active"));
    button.classList.add("active");
    state.view = button.dataset.view;
    render();
  });
});

render();
