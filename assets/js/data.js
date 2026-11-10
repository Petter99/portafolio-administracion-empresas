// Datos del portafolio. Para agregar un trabajo, añade un objeto a WORKS.
window.COMPETENCIAS = [
  { id: "hist", nombre: "Evolución del pensamiento administrativo",
    desc: "Comprendo cómo las teorías clásicas y humanistas explican la administración actual y las aplico a casos de TI." },
  { id: "proceso", nombre: "Proceso administrativo",
    desc: "Identifico y aplico planear, organizar, integrar, dirigir y controlar en actividades reales." },
  { id: "plan", nombre: "Planeación estratégica",
    desc: "Diagnostico una organización con FODA y defino visión, misión y metas verificables." },
  { id: "org", nombre: "Estructura y cultura organizacional",
    desc: "Diseño estructuras (cadena de mando, tramo de control) y estrategias para transmitir la cultura." },
  { id: "rrhh", nombre: "Gestión del talento humano",
    desc: "Planifico necesidades de personal y comparo perfiles de candidatos según el puesto." },
  { id: "decision", nombre: "Toma de decisiones con datos",
    desc: "Evalúo alternativas con matrices, métodos cuantitativos e indicadores antes de decidir." },
  { id: "rse", nombre: "Responsabilidad social e innovación",
    desc: "Analizo dilemas éticos de la industria tecnológica y propongo ideas con impacto." }
];

window.WORKS = [
  { id: "venecia", comp: "hist", tipo: "Investigación", fecha: "6 ago 2026",
    titulo: "Venecia en el siglo XV",
    desc: "El Arsenal de Venecia como antecedente de la organización industrial: planificación, división del trabajo y control, comparado con proyectos de software.",
    tags: ["Historia", "Arsenal", "Eficiencia"], file: "venecia-siglo-xv.pdf", equipo: "Grupal" },
  { id: "taylor-pdf", comp: "hist", tipo: "Caso", fecha: "19 ago 2026",
    titulo: "Administración Científica: Taylor entra al Departamento de TI",
    desc: "Preparación de 20 computadoras aplicando estudio de tiempos, estandarización y trabajo en paralelo con 4 técnicos y Q2,500.",
    tags: ["Taylor", "Productividad", "Procesos"], file: "administracion-cientifica.pdf", equipo: "Grupal" },
  { id: "taylor-ppt", comp: "hist", tipo: "Presentación", fecha: "Ago 2026",
    titulo: "Taylor en TI (presentación)",
    desc: "Versión en diapositivas: el proceso baja de 35 a 22 minutos por equipo con automatización y división del trabajo.",
    tags: ["Taylor", "Presentación"], file: "taylor-ti-presentacion.pptx", equipo: "Grupal" },
  { id: "hawthorne", comp: "hist", tipo: "Análisis y foro", fecha: "26 ago 2026",
    titulo: "Análisis y foro: Estudios de Hawthorne",
    desc: "Por qué la iluminación no explicaba la productividad y qué aportó el efecto Hawthorne a la escuela de relaciones humanas.",
    tags: ["Relaciones humanas", "Foro"], file: "caso-hawthorne.pdf", equipo: "Grupal" },

  { id: "funciones", comp: "proceso", tipo: "Infografía", fecha: "2025",
    titulo: "Funciones administrativas: comisión de merch y recuerdos",
    desc: "Las cinco funciones (planear, organizar, integrar, dirigir y controlar) aplicadas a mi participación en la comisión del congreso 2025.",
    tags: ["Proceso administrativo", "Experiencia propia"], file: "funciones-administrativas.pdf", equipo: "Individual" },

  { id: "foda", comp: "plan", tipo: "Caso", fecha: "",
    titulo: "Planeación estratégica: matriz FODA de tecnoIA",
    desc: "FODA de una startup de IA, con visión, misión y metas para los próximos 12 meses.",
    tags: ["FODA", "Visión y misión", "Startup"], file: "foda-tecnoia.pdf", equipo: "" },

  { id: "techsolutions", comp: "org", tipo: "Caso práctico", fecha: "",
    titulo: "TechSolutions: rediseño de la estructura organizacional",
    desc: "Propuesta de consultoría para una empresa de 250 colaboradores: cadena de mando, tramo de control, organigrama y protocolo de QA.",
    tags: ["Organigrama", "Cadena de mando", "Consultoría"], file: "techsolutions-estructura.pdf", equipo: "" },
  { id: "bytenova", comp: "org", tipo: "Presentación", fecha: "",
    titulo: "ByteNova: plan de integración cultural de 30 días",
    desc: "Culture Sprint de cuatro misiones (conectar, decidir, experimentar, demostrar) para que el nuevo colaborador viva la cultura.",
    tags: ["Cultura", "Onboarding"], file: "bytenova-cultura-30-dias.pptx", equipo: "" },

  { id: "nato", comp: "rrhh", tipo: "Formato", fecha: "21 oct 2026",
    titulo: "Planeación de recursos humanos: proyecto Nató",
    desc: "Identificación de necesidades de personal, habilidades técnicas y perfiles requeridos para el proyecto.",
    tags: ["Planeación de RR. HH.", "Proyecto Nató"], file: "planeacion-rrhh-nato.docx", equipo: "Equipo 2" },
  { id: "perfiles", comp: "rrhh", tipo: "Documento", fecha: "",
    titulo: "Perfiles de candidatos: backend developer",
    desc: "Comparación de candidatos según experiencia, habilidades técnicas y blandas, certificaciones, idiomas y disponibilidad.",
    tags: ["Reclutamiento", "Selección"], file: "perfiles-candidatos.docx", equipo: "" },

  { id: "ti", comp: "decision", tipo: "Caso de análisis", fecha: "",
    titulo: "¿El sistema está lento o el problema es otro?",
    desc: "Diagnóstico del Departamento de TI de una universidad: los datos apuntan a sobrecarga humana, no al servidor.",
    tags: ["Indicadores", "Diagnóstico"], file: "practica-departamento-ti.pptx", equipo: "Grupal" },
  { id: "matriz", comp: "decision", tipo: "Hoja de cálculo", fecha: "",
    titulo: "Matriz de evaluación de proveedores en 3 escenarios",
    desc: "ProjectFlow, TaskPro y NexusPM comparados con criterios ponderados bajo presupuesto Q150,000, Q120,000 y crecimiento a 300 usuarios.",
    tags: ["Matriz ponderada", "Excel"], file: "matriz-evaluacion-3-escenarios.xlsx", equipo: "" },
  { id: "hungaro", comp: "decision", tipo: "Hoja de cálculo", fecha: "",
    titulo: "Método húngaro de asignación",
    desc: "Asignación de personas a actividades de TI minimizando las horas totales.",
    tags: ["Asignación", "Excel"], file: "metodo-hungaro.xlsx", equipo: "" },

  { id: "rse", comp: "rse", tipo: "Caso", fecha: "",
    titulo: "Gestión irresponsable de datos personales",
    desc: "Privacidad, seguridad y confianza en la industria tecnológica: qué pasa cuando una empresa comparte datos sin consentimiento.",
    tags: ["Ética", "Privacidad", "RSE"], file: "rse-datos-personales.pdf", equipo: "Grupo 2" },
  { id: "aquaguard", comp: "rse", tipo: "Proyecto", fecha: "",
    titulo: "AquaGuard: patenta tu idea",
    desc: "Sistema IoT que detecta fugas de agua y corta el suministro automáticamente.",
    tags: ["Innovación", "IoT", "Patente"], file: "aquaguard.pdf", equipo: "Grupal" }
];

// Comentarios de compañeros (cortos y genéricos, a propósito).
window.PARES = [
  { nombre: "Juan Ixcamparic", texto: "Mucho éxito después de la U, Pedro. ¡Gracias por el trabajo en equipo!" },
  { nombre: "Samuel Citalan", texto: "Te deseo lo mejor en lo que viene. Fue un gusto trabajar contigo." },
  { nombre: "Pablo Aleman", texto: "Éxitos en tu vida profesional. ¡Nos vemos pronto!" }
];
