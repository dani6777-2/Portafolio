// i18n utility for Astro — no React context needed.
// Astro pages call getLangFromUrl() and t() directly.
// React islands receive translations as props.

export type Lang = 'es' | 'en';

export function getLangFromUrl(): Lang {
  if (typeof window === 'undefined') return 'es';
  const saved = localStorage.getItem('lang') as Lang | null;
  if (saved === 'es' || saved === 'en') return saved;
  return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es';
}

export function t(lang: Lang, key: string): string {
  return translations[lang][key] ?? translations.es[key] ?? key;
}

export function createT(lang: Lang) {
  return (key: string) => t(lang, key);
}

const es: Record<string, string> = {
  'nav.title': 'Daniel Morales | Ingeniero de Software — Golang, GCP, React',
  'loader.line1': '[BOOT] Cargando sistema...',
  'loader.line2': '[OK] Módulos cargados',
  'loader.line3': '[OK] Conectando servicios...',
  'loader.line4': '[OK] Sistema listo.',
  'loader.tag': 'daniel.dev — v6.0',
  'nav.menu': 'menú',
  'nav.close': 'cerrar',
  'nav.top': 'Volver arriba',
  'nav.home': '~/',
  'nav.about': '~/about',
  'nav.journey': '~/exp',
  'nav.projects': '~/projects',
  'nav.skills': '~/skills',
  'nav.certs': '~/certs',
  'nav.faq': '~/faq',
  'nav.services': '~/services',
  'nav.contact': '~/connect',

  'hero.whoami': '$ whoami',
  'hero.arrow': '→',
  'hero.name': 'Daniel Morales',
  'hero.role': 'Ingeniero de Software Semi Senior',
  'hero.current': '@ Starken',
  'hero.location': 'Santiago, Chile',
  'hero.lead': 'Enfocado en aplicaciones cloud-native con Golang sobre Google Cloud. Experiencia full stack en Java, React y Node.js.',
  'hero.stack': 'go · gcp · java · react · node',
  'hero.scroll': '↓ scroll',
  'hero.stat.years': 'años exp',
  'hero.stat.companies': 'empresas',
  'hero.stat.certs': 'certs',
  'hero.stat.projects': 'proyectos',

  'about.cmd': '$ cat about.md',
  'about.title': 'Sobre mí',
  'about.statement': 'Diseño aplicaciones cloud-native que convierten problemas de negocio en resultados medibles: menos latencia, más cobertura de pruebas y mejor uptime.',
  'about.p1': 'Ingeniero de Software con 4 años de experiencia construyendo soluciones end-to-end para logística, seguros y consultoría. Foco actual: Golang y Google Cloud Platform.',
  'about.p2': 'Creo en el ciclo completo del software: diseñar la arquitectura, escribir pruebas, desplegar y operar. Y en documentar decisiones, no repetir código.',
  'about.data.role': 'cargo',
  'about.data.location': 'ubicación',
  'about.data.email': 'email',
  'about.data.phone': 'teléfono',
  'about.data.studies': 'estudios',
  'about.data.langs': 'idiomas',
  'about.data.langs.value': 'Español (nativo) · Inglés (técnico)',
  'about.data.studies.value': 'Ingeniería en Informática — INACAP',

  'exp.cmd': '$ git log --oneline',
  'exp.title': 'Experiencia',
  'exp.present': 'HEAD',
  'exp.edu': 'Formación',

  'exp.starken.title': 'Ingeniero de Software Semi Senior',
  'exp.starken.period': 'dic 2024 · actualidad',
  'exp.starken.1': 'Aplicaciones cloud en Google Cloud Platform (GKE, Cloud Storage), integradas con eventos y webhooks.',
  'exp.starken.2': 'Backend en Golang, con integración de la API de Google Maps para geolocalización y optimización de rutas.',
  'exp.starken.3': 'Flujo ágil con Jira (Scrum/Kanban): -25% tiempo de entrega y +30% eficiencia del equipo.',
  'exp.starken.4': 'Análisis de calidad y detección temprana de vulnerabilidades con SonarQube.',

  'exp.vrg.title': 'Analista Desarrollador',
  'exp.vrg.period': 'feb 2024 · ene 2025',
  'exp.vrg.1': 'Microservicios con Quarkus y Panache, incluyendo migración a Quarkus 3.10.1.',
  'exp.vrg.2': 'Pruebas unitarias con 86% de cobertura y servicios REST con Spring Boot e Hibernate.',
  'exp.vrg.3': 'Plataforma de gestión de archivos sobre AWS S3 con AWS Lambda: +40% eficiencia de carga.',

  'exp.zurich.title': 'Analista de Sistemas',
  'exp.zurich.period': 'jul 2023 · dic 2023',
  'exp.zurich.1': 'Backend con Spring Boot y microservicios con Spring Cloud: +30% eficiencia de consultas.',
  'exp.zurich.2': 'Gestión de repositorios en GitLab y administración de proyectos con Maven.',

  'exp.inacap.title': 'Ingeniería en Informática',
  'exp.inacap.org': 'INACAP',
  'exp.inacap.period': '2021 · actualidad',
  'exp.inacap.1': 'Formación en análisis, diseño, construcción, pruebas e implementación de soluciones informáticas.',
  'exp.forge.1': 'Bootcamp de formación en habilidades laborales y tecnológicas.',

  'certs.cmd': '$ ls ~/certs/',
  'certs.title': 'Certificaciones',
  'certs.subtitle': 'Formación continua y certificaciones oficiales',
  'certs.cisco': 'Certificado Cisco',
  'certs.cisco.meta': 'Seguridad y redes',
  'certs.forge': 'Fundación Forge',
  'certs.forge.meta': 'Bootcamp de habilidades laborales y desarrollo profesional',
  'certs.frontend': 'Desarrollo Frontend',
  'certs.frontend.meta': 'React, JavaScript y buenas prácticas de UI',
  'certs.java': 'Java Developer',
  'certs.java.meta': 'Programación orientada a objetos y desarrollo de aplicaciones en Java',
  'certs.sence': 'Certificado SENCE',
  'certs.sence.meta': 'Formación técnica profesional acreditada',
  'certs.view': 'ver →',

  'skills.cmd': '$ cat skills.json',
  'skills.title': 'Competencias',
  'skills.frontend': 'frontend',
  'skills.backend': 'backend',
  'skills.db': 'databases',
  'skills.cloud': 'cloud/devops',
  'skills.testing': 'testing',
  'skills.data.frontend': 'React, Angular, TypeScript, JavaScript, Tailwind CSS, HTML/CSS',
  'skills.data.backend': 'Golang, Java (Spring Boot, Quarkus), Node.js (Express), Python (Django)',
  'skills.data.db': 'PostgreSQL, MySQL, Redis (caché), modelado relacional',
  'skills.data.cloud': 'Google Cloud (GKE, Cloud Run, Storage), AWS (S3, Lambda), Docker, Kubernetes, GitLab/GitHub CI',
  'skills.data.testing': 'JUnit, Jest, Go testing, JaCoCo, JMeter, SonarQube',
  'skills.soft': 'soft_skills',
  'skills.soft.items': 'Scrum/Agile (Jira) · Liderazgo de equipo · Gestión de conflictos · Comunicación efectiva · Aprendizaje continuo',
  'skills.more': '10+ tecnologías en producción',

  'projects.cmd': '$ ls ~/projects/',
  'projects.title': 'Proyectos',
  'projects.subtitle': 'trabajo seleccionado — resultados medibles',
  'projects.logistics.name': 'Plataforma Cloud Logística',
  'projects.logistics.role': 'Starken · 2024-2025',
  'projects.logistics.desc': 'Aplicación en Golang sobre GCP para el despacho y trazabilidad: APIs con JWT, eventos, webhooks y despliegue continuo con Cloud Build.',
  'projects.logistics.tags': 'go · gcp/gke · cloud-run · postgresql · react',
  'projects.logistics.m1': '+30% eficiencia operativa',
  'projects.logistics.m2': '99.9% uptime',
  'projects.logistics.m3': '40+ deploys/mes',

  'projects.insurance.name': 'Microservicios de Seguros',
  'projects.insurance.role': 'Zurich Santander · 2023',
  'projects.insurance.desc': 'Arquitectura de microservicios con Spring Cloud: service discovery, circuit breakers y configuración distribuida para emisión de pólizas.',
  'projects.insurance.tags': 'java · spring-boot · spring-cloud · mysql · docker',
  'projects.insurance.m1': '+30% eficiencia consultas',
  'projects.insurance.m2': '88% cobertura',
  'projects.insurance.m3': '12 microservicios',

  'projects.files.name': 'Gestión de Archivos Cloud',
  'projects.files.role': 'VR Group · 2024',
  'projects.files.desc': 'Plataforma de gestión de documentos sobre AWS S3 y Lambda, con Quarkus y pruebas unitarias de alta cobertura.',
  'projects.files.tags': 'quarkus · panache · aws-s3 · lambda · angular',
  'projects.files.m1': '+40% eficiencia carga',
  'projects.files.m2': '86% cobertura',
  'projects.files.m3': 'serverless',

  'projects.quarkus.name': 'Migración Quarkus 3.10.1',
  'projects.quarkus.role': 'VR Group · 2024',
  'projects.quarkus.desc': 'Migración completa de microservicios a Quarkus con Panache: arranque más rápido, menor footprint y mayor productividad del equipo backend.',
  'projects.quarkus.tags': 'quarkus · panache · jpa · java-17',
  'projects.quarkus.m1': '3.10.1',
  'projects.quarkus.m2': 'menor footprint',
  'projects.quarkus.m3': 'arranque nativo',

  'svc.cmd': '$ cat services.json',
  'svc.title': 'Servicios Técnicos',
  'svc.subtitle': 'mantenimiento profesional de equipos con informe técnico incluido',
  'svc.cta': 'Agenda tu servicio',
  'svc.includes': 'incluye',
  'svc.from': 'desde',

  'svc.1.name': 'Limpieza Básica PC',
  'svc.1.price': '$20.000–$25.000',
  'svc.1.icon': '🟢',
  'svc.1.items': 'Limpieza exterior e interior · Ventiladores y filtros · Eliminación de polvo · Organización de cables · Inspección visual',

  'svc.2.name': 'Mantenimiento Completo PC',
  'svc.2.price': '$35.000–$45.000',
  'svc.2.icon': '🔵',
  'svc.2.items': 'Desmontaje parcial · Limpieza profunda (ventiladores, disipador, GPU) · Limpieza de fuente (externa/interna según diseño) · Cambio de pasta térmica CPU · Optimización de flujo de aire · Test de temperaturas',

  'svc.3.name': 'Mantenimiento Notebook',
  'svc.3.price': '$40.000–$55.000',
  'svc.3.icon': '💻',
  'svc.3.items': 'Desarme completo · Limpieza interna (ventilador, disipador) · Cambio de pasta térmica · Limpieza de pantalla, teclado y puertos · Diagnóstico térmico · Test final',

  'svc.4.name': 'Mantenimiento Consola',
  'svc.4.price': '$35.000–$55.000',
  'svc.4.icon': '🎮',
  'svc.4.desc': 'PS4 / PS5 / Xbox / Nintendo',
  'svc.4.items': 'Desarme · Limpieza profunda (ventilación, ventilador, disipador) · Cambio de pasta térmica · Test de funcionamiento',
  'svc.4.note': 'PS5 con metal líquido: servicio no disponible hasta tener capacitación y herramientas específicas',

  'svc.5.name': 'Diagnóstico',
  'svc.5.price': '$10.000–$15.000',
  'svc.5.icon': '🔎',
  'svc.5.items': 'Temperaturas · SMART · RAM · CPU · GPU · Ventiladores · Estado general · Pruebas de estabilidad',
  'svc.5.note': 'Descontable si contrata mantenimiento posterior',

  'svc.diff.title': 'Tu informe técnico',
  'svc.diff.desc': 'No entrego simplemente "equipo limpio". Entrego un informe técnico profesional con datos medibles.',
  'svc.diff.before': 'antes',
  'svc.diff.after': 'después',
  'svc.diff.result': 'resultado',

  'svc.process.title': 'Proceso de atención',
  'svc.process.steps': 'Contacto · Agenda · Recepción · Fotografías del equipo · Registro de estado · Diagnóstico inicial · Presupuesto · Autorización · Mantenimiento · Pruebas · Informe · Fotografías finales · Entrega · Garantía',

  'svc.warranty.title': 'Garantía del servicio',
  'svc.warranty.yes': 'Garantizo: limpieza correcta, trabajos contratados realizados, componentes intervenidos correctamente instalados.',
  'svc.warranty.no': 'No cubre: fallas previas, baterías degradadas, discos dañados, pantallas defectuosas, problemas de placa, fallas no relacionadas al servicio.',

  'svc.delivery.title': 'Entrega profesional',
  'svc.delivery.items': 'Equipo limpio · Microfibra · Cableado ordenado · Informe PDF · Temperaturas antes/después · Recomendaciones · Fecha del próximo mantenimiento (6–12 meses)',

  'connect.cmd': '$ ping daniel',
  'connect.headline': 'Conectemos',
  'connect.subtitle': 'Siempre abierto a conversaciones sobre ingeniería, colaboración open source o simplemente compartir ideas.',
  'connect.cv': '$ download cv.pdf',
  'connect.location': 'Santiago, Chile',
  'connect.email.label': 'email',
  'connect.phone.label': 'teléfono',
  'connect.location.label': 'ubicación',

  'faq.cmd': '$ ./faq --interactive',
  'faq.title': 'Preguntas frecuentes',
  'faq.subtitle': 'respuestas reales a las preguntas que más me hacen',

  'footer.rights': 'Todos los derechos reservados',
  'footer.built': 'diseñado y construido por daniel morales',
  'footer.version': 'v6.0 — go test ./... ✓',
};

const en: Record<string, string> = {
  'nav.title': 'Daniel Morales | Software Engineer — Golang, GCP, React',
  'loader.line1': '[BOOT] Loading system...',
  'loader.line2': '[OK] Modules loaded',
  'loader.line3': '[OK] Connecting services...',
  'loader.line4': '[OK] System ready.',
  'loader.tag': 'daniel.dev — v6.0',
  'nav.menu': 'menu',
  'nav.close': 'close',
  'nav.top': 'Back to top',
  'nav.home': '~/',
  'nav.about': '~/about',
  'nav.journey': '~/exp',
  'nav.projects': '~/projects',
  'nav.skills': '~/skills',
  'nav.certs': '~/certs',
  'nav.faq': '~/faq',
  'nav.services': '~/services',
  'nav.contact': '~/connect',

  'hero.whoami': '$ whoami',
  'hero.arrow': '→',
  'hero.name': 'Daniel Morales',
  'hero.role': 'Mid-Senior Software Engineer',
  'hero.current': '@ Starken',
  'hero.location': 'Santiago, Chile',
  'hero.lead': 'Focused on cloud-native applications in Golang on Google Cloud, with full stack experience in Java, React and Node.js.',
  'hero.stack': 'go · gcp · java · react · node',
  'hero.scroll': '↓ scroll',
  'hero.stat.years': 'years exp',
  'hero.stat.companies': 'companies',
  'hero.stat.certs': 'certs',
  'hero.stat.projects': 'projects',

  'about.cmd': '$ cat about.md',
  'about.title': 'About me',
  'about.statement': 'I design cloud-native applications that turn business problems into measurable outcomes: less latency, higher test coverage and better uptime.',
  'about.p1': 'Software Engineer with 4 years of experience building end-to-end solutions for logistics, insurance and consulting. Current focus: Golang and Google Cloud Platform.',
  'about.p2': 'I believe in the full software lifecycle: designing architecture, writing tests, deploying and operating. And in documenting decisions, not repeating code.',
  'about.data.role': 'role',
  'about.data.location': 'location',
  'about.data.email': 'email',
  'about.data.phone': 'phone',
  'about.data.studies': 'studies',
  'about.data.langs': 'languages',
  'about.data.langs.value': 'Spanish (native) · English (technical)',
  'about.data.studies.value': 'Computer Engineering — INACAP',

  'exp.cmd': '$ git log --oneline',
  'exp.title': 'Experience',
  'exp.present': 'HEAD',
  'exp.edu': 'Education',

  'exp.starken.title': 'Mid-Senior Software Engineer',
  'exp.starken.period': 'dec 2024 · present',
  'exp.starken.1': 'Cloud applications on Google Cloud Platform (GKE, Cloud Storage), integrated via events and webhooks.',
  'exp.starken.2': 'Backend in Golang, including Google Maps API integration for geolocation and route optimization.',
  'exp.starken.3': 'Agile workflow with Jira (Scrum/Kanban): -25% delivery time and +30% team efficiency.',
  'exp.starken.4': 'Quality analysis and early vulnerability detection with SonarQube.',

  'exp.vrg.title': 'Developer Analyst',
  'exp.vrg.period': 'feb 2024 · jan 2025',
  'exp.vrg.1': 'Microservices with Quarkus and Panache, including migration to Quarkus 3.10.1.',
  'exp.vrg.2': 'Unit tests with 86% coverage and REST services with Spring Boot and Hibernate.',
  'exp.vrg.3': 'File management platform on AWS S3 with AWS Lambda: +40% upload efficiency.',

  'exp.zurich.title': 'Systems Analyst',
  'exp.zurich.period': 'jul 2023 · dec 2023',
  'exp.zurich.1': 'Backend with Spring Boot and microservices with Spring Cloud: +30% query efficiency.',
  'exp.zurich.2': 'GitLab repository management and Maven project administration.',

  'exp.inacap.title': 'Computer Engineering',
  'exp.inacap.org': 'INACAP',
  'exp.inacap.period': '2021 · present',
  'exp.inacap.1': 'Training in analysis, design, development, testing and implementation of IT solutions.',
  'exp.forge.1': 'Bootcamp on professional and technical skills.',

  'certs.cmd': '$ ls ~/certs/',
  'certs.title': 'Certifications',
  'certs.subtitle': 'Continuous learning and official certifications',
  'certs.cisco': 'Cisco Certificate',
  'certs.cisco.meta': 'Security and networks',
  'certs.forge': 'Fundación Forge',
  'certs.forge.meta': 'Bootcamp on soft skills and professional development',
  'certs.frontend': 'Frontend Development',
  'certs.frontend.meta': 'React, JavaScript and UI best practices',
  'certs.java': 'Java Developer',
  'certs.java.meta': 'Object-oriented programming and Java application development',
  'certs.sence': 'SENCE Certificate',
  'certs.sence.meta': 'Accredited professional technical training',
  'certs.view': 'view →',

  'skills.cmd': '$ cat skills.json',
  'skills.title': 'Competencies',
  'skills.frontend': 'frontend',
  'skills.backend': 'backend',
  'skills.db': 'databases',
  'skills.cloud': 'cloud/devops',
  'skills.testing': 'testing',
  'skills.data.frontend': 'React, Angular, TypeScript, JavaScript, Tailwind CSS, HTML/CSS',
  'skills.data.backend': 'Golang, Java (Spring Boot, Quarkus), Node.js (Express), Python (Django)',
  'skills.data.db': 'PostgreSQL, MySQL, Redis (cache), relational modeling',
  'skills.data.cloud': 'Google Cloud (GKE, Cloud Run, Storage), AWS (S3, Lambda), Docker, Kubernetes, GitLab/GitHub CI',
  'skills.data.testing': 'JUnit, Jest, Go testing, JaCoCo, JMeter, SonarQube',
  'skills.soft': 'soft_skills',
  'skills.soft.items': 'Scrum/Agile (Jira) · Team leadership · Conflict management · Effective communication · Continuous learning',
  'skills.more': '10+ technologies in production',

  'projects.cmd': '$ ls ~/projects/',
  'projects.title': 'Projects',
  'projects.subtitle': 'selected work — measurable results',
  'projects.logistics.name': 'Cloud Logistics Platform',
  'projects.logistics.role': 'Starken · 2024-2025',
  'projects.logistics.desc': 'Golang application on GCP for dispatch and tracking: JWT-secured APIs, events, webhooks and continuous deployment with Cloud Build.',
  'projects.logistics.tags': 'go · gcp/gke · cloud-run · postgresql · react',
  'projects.logistics.m1': '+30% operational efficiency',
  'projects.logistics.m2': '99.9% uptime',
  'projects.logistics.m3': '40+ deploys/month',

  'projects.insurance.name': 'Insurance Microservices',
  'projects.insurance.role': 'Zurich Santander · 2023',
  'projects.insurance.desc': 'Microservice architecture with Spring Cloud: service discovery, circuit breakers and distributed config for policy issuance.',
  'projects.insurance.tags': 'java · spring-boot · spring-cloud · mysql · docker',
  'projects.insurance.m1': '+30% query efficiency',
  'projects.insurance.m2': '88% coverage',
  'projects.insurance.m3': '12 microservices',

  'projects.files.name': 'Cloud File Management',
  'projects.files.role': 'VR Group · 2024',
  'projects.files.desc': 'Document management platform on AWS S3 and Lambda, built with Quarkus and high-coverage unit tests.',
  'projects.files.tags': 'quarkus · panache · aws-s3 · lambda · angular',
  'projects.files.m1': '+40% upload efficiency',
  'projects.files.m2': '86% coverage',
  'projects.files.m3': 'serverless',

  'projects.quarkus.name': 'Quarkus 3.10.1 Migration',
  'projects.quarkus.role': 'VR Group · 2024',
  'projects.quarkus.desc': 'Full microservice migration to Quarkus with Panache: faster startup, smaller footprint and higher backend team productivity.',
  'projects.quarkus.tags': 'quarkus · panache · jpa · java-17',
  'projects.quarkus.m1': '3.10.1',
  'projects.quarkus.m2': 'smaller footprint',
  'projects.quarkus.m3': 'native startup',

  'svc.cmd': '$ cat services.json',
  'svc.title': 'Tech Services',
  'svc.subtitle': 'professional hardware maintenance with technical report included',
  'svc.cta': 'Book your service',
  'svc.includes': 'includes',
  'svc.from': 'from',

  'svc.1.name': 'Basic PC Cleaning',
  'svc.1.price': '$20.000–$25.000 CLP',
  'svc.1.icon': '🟢',
  'svc.1.items': 'Exterior & interior cleaning · Fans and filters · Dust removal · Cable management · Visual inspection',

  'svc.2.name': 'Full PC Maintenance',
  'svc.2.price': '$35.000–$45.000 CLP',
  'svc.2.icon': '🔵',
  'svc.2.items': 'Partial disassembly · Deep cleaning (fans, heatsink, GPU) · PSU cleaning (external/internal if safe) · CPU thermal paste replacement · Airflow optimization · Temperature testing',

  'svc.3.name': 'Notebook Maintenance',
  'svc.3.price': '$40.000–$55.000 CLP',
  'svc.3.icon': '💻',
  'svc.3.items': 'Full disassembly · Internal cleaning (fan, heatsink) · Thermal paste replacement · Screen, keyboard and port cleaning · Thermal diagnostics · Final testing',

  'svc.4.name': 'Console Maintenance',
  'svc.4.price': '$35.000–$55.000 CLP',
  'svc.4.icon': '🎮',
  'svc.4.desc': 'PS4 / PS5 / Xbox / Nintendo',
  'svc.4.items': 'Disassembly · Deep cleaning (ventilation, fan, heatsink) · Thermal paste replacement · Function testing',
  'svc.4.note': 'PS5 with liquid metal: service not available until specific training and tools are acquired',

  'svc.5.name': 'Diagnostics',
  'svc.5.price': '$10.000–$15.000 CLP',
  'svc.5.icon': '🔎',
  'svc.5.items': 'Temperatures · SMART · RAM · CPU · GPU · Fans · Overall condition · Stability testing',
  'svc.5.note': 'Deductible if you book maintenance afterwards',

  'svc.diff.title': 'Your technical report',
  'svc.diff.desc': 'I don\'t just deliver "clean equipment". I deliver a professional technical report with measurable data.',
  'svc.diff.before': 'before',
  'svc.diff.after': 'after',
  'svc.diff.result': 'result',

  'svc.process.title': 'Service process',
  'svc.process.steps': 'Contact · Schedule · Reception · Equipment photos · Condition log · Initial diagnostics · Quote · Authorization · Maintenance · Testing · Report · Final photos · Delivery · Warranty',

  'svc.warranty.title': 'Service warranty',
  'svc.warranty.yes': 'Guaranteed: proper cleaning, contracted work completed, intervened components correctly installed.',
  'svc.warranty.no': 'Not covered: pre-existing faults, degraded batteries, damaged disks, defective screens, board issues, unrelated failures.',

  'svc.delivery.title': 'Professional delivery',
  'svc.delivery.items': 'Clean equipment · Microfiber cloth · Organized cabling · PDF report · Before/after temperatures · Recommendations · Next maintenance date (6–12 months)',

  'connect.cmd': '$ ping daniel',
  'connect.headline': "Let's connect",
  'connect.subtitle': 'Always open to conversations about engineering, open source collaboration, or simply sharing ideas.',
  'connect.cv': '$ download cv.pdf',
  'connect.location': 'Santiago, Chile',
  'connect.email.label': 'email',
  'connect.phone.label': 'phone',
  'connect.location.label': 'location',

  'faq.cmd': '$ ./faq --interactive',
  'faq.title': 'FAQ',
  'faq.subtitle': 'real answers to the questions I get asked the most',

  'footer.rights': 'All rights reserved',
  'footer.built': 'designed and built by daniel morales',
  'footer.version': 'v6.0 — go test ./... ✓',
};

export const translations: Record<Lang, Record<string, string>> = { es, en };

// FAQ data (bilingual, used by FaqAccordion island)
export interface FaqItem {
  q: Record<Lang, string>;
  a: Record<Lang, string>;
}

export const faqs: FaqItem[] = [
  {
    q: { es: '¿Cómo has utilizado Go en tus proyectos?', en: 'How have you used Go in your projects?' },
    a: { es: 'En Starken desarrollo aplicaciones cloud con Golang: goroutines para concurrencia, APIs con net/http y chi, binarios estáticos que simplifican el despliegue en GKE, y testing con la librería estándar más testify.', en: 'At Starken I build cloud applications in Go: goroutines for concurrency, APIs with net/http and chi, static binaries that simplify GKE deployment, and testing with the standard library plus testify.' },
  },
  {
    q: { es: '¿Cómo abordas la seguridad en tus aplicaciones?', en: 'How do you approach application security?' },
    a: { es: 'Seguridad en capas: JWT/OAuth2, autorización por roles, validación de entradas y dependencias escaneadas con SonarQube. En la nube aplico IAM con mínimo privilegio, VPC con subredes privadas y secretos gestionados.', en: 'Security in layers: JWT/OAuth2, role-based authorization, input validation and dependencies scanned with SonarQube. In the cloud I apply least-privilege IAM, VPCs with private subnets and managed secrets.' },
  },
  {
    q: { es: '¿Cómo manejas el testing y la calidad?', en: 'How do you handle testing and quality?' },
    a: { es: 'Estrategia piramidal: unit tests (86-90% de cobertura con JUnit/Jest/Go testing), tests de integración, análisis con JaCoCo y pruebas de carga con JMeter antes de producción.', en: 'Pyramid strategy: unit tests (86-90% coverage with JUnit/Jest/Go testing), integration tests, JaCoCo analysis and JMeter load tests before production.' },
  },
  {
    q: { es: '¿Qué experiencia tienes con microservicios?', en: 'What is your microservices experience?' },
    a: { es: 'En Zurich Santander construí microservicios con Spring Boot y Spring Cloud (service discovery, circuit breakers, config distribuida) mejorando la eficiencia de consultas un 30%. En VR Group con Quarkus y Panache, y en Starken con Go sobre GKE.', en: 'At Zurich Santander I built microservices with Spring Boot and Spring Cloud (discovery, circuit breakers, distributed config), improving query efficiency by 30%. At VR Group with Quarkus and Panache, and at Starken with Go on GKE.' },
  },
  {
    q: { es: '¿Cómo implementas CI/CD?', en: 'How do you implement CI/CD?' },
    a: { es: 'Pipelines con GitLab CI y GitHub Actions: build, tests, SonarQube y despliegue automatizado. Uso trunk-based development y feature flags para entregas continuas seguras.', en: 'Pipelines with GitLab CI and GitHub Actions: build, tests, SonarQube and automated deployment. I use trunk-based development and feature flags for safe continuous delivery.' },
  },
  {
    q: { es: '¿Cuál ha sido tu mayor desafío técnico?', en: 'What has been your biggest technical challenge?' },
    a: { es: 'En Zurich Santander, consultas que tardaban minutos. Implementé caché distribuido, índices optimizados y queries asíncronas, reduciendo los tiempos en 40%. Aprendí a medir antes de optimizar.', en: 'At Zurich Santander, queries that took minutes. I implemented distributed caching, optimized indexes and async queries, cutting response times by 40%. I learned to measure before optimizing.' },
  },
  {
    q: { es: '¿Cuál es tu filosofía de desarrollo?', en: 'What is your development philosophy?' },
    a: { es: 'Código que se entiende sin comentarios, arquitectura que escala sin reescribir y decisiones documentadas. Prefiero soluciones simples que funcionen a abstracciones elegantes que nadie mantiene.', en: "Code that reads without comments, architecture that scales without rewriting, and documented decisions. I prefer simple solutions that work over elegant abstractions nobody maintains." },
  },
  {
    q: { es: '¿Qué aprendizaje te ha marcado más?', en: 'What learning has shaped you the most?' },
    a: { es: 'Pasar de Java a Golang me enseñó que la simplicidad es una feature. Go me forzó a pensar en composición sobre herencia, en interfaces pequeñas y en no sobre-diseñar.', en: "Moving from Java to Golang taught me that simplicity is a feature. Go forced me to think in composition over inheritance, small interfaces and not over-engineering." },
  },
  {
    q: { es: '¿En qué estás enfocado ahora?', en: 'What are you focused on right now?' },
    a: { es: 'Profundizar en arquitectura cloud-native con Golang y GCP: patrones de resiliencia en GKE, observabilidad con OpenTelemetry, y construir herramientas internas que mejoren la productividad del equipo en Starken.', en: 'Going deeper into cloud-native architecture with Golang and GCP: resilience patterns on GKE, observability with OpenTelemetry, and building internal tools that improve team productivity at Starken.' },
  },
];
