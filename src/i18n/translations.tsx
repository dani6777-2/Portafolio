/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react';

export type Lang = 'es' | 'en';

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'es',
  setLang: () => {},
  t: (key: string) => translations.es[key] ?? key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved === 'es' || saved === 'en') return saved;
    return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.title = translations[lang]['nav.title'];
  }, [lang]);

  const t = (key: string) => translations[lang][key] ?? translations.es[key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);

const es = {
  'nav.title': 'Daniel Morales | Ingeniero de Software — Golang, GCP, React',
  'loader.tag': 'daniel.dev — v4.0',
  'loader.since': 'est. 2026 — Santiago',
  'nav.menu': 'Menú',
  'nav.close': 'Cerrar',
  'nav.top': 'Volver arriba',
  'nav.home': 'Inicio',
  'nav.about': 'Sobre mí',
  'nav.journey': 'Trayectoria',
  'nav.projects': 'Proyectos',
  'nav.skills': 'Skills',
  'nav.certs': 'Certificados',
  'nav.contact': 'Contacto',

  'hero.kicker': 'Ingeniero de Software — Santiago, Chile',
  'hero.role': 'Ingeniero de Software Semi Senior',
  'hero.lead': 'Construyo aplicaciones cloud-native en Golang sobre Google Cloud, con experiencia full stack en Java, React y Node.js.',
  'hero.stack': 'GO · GCP (GKE/Cloud Run) · JAVA · REACT · NODE',
  'hero.available': 'Disponible para nuevos proyectos',
  'hero.cv': 'Descargar CV',
  'hero.scroll': 'scroll para explorar',
  'hero.big.name': 'DANIEL',
  'hero.big.lastname': 'MORALES',
  'hero.stat.years': 'Años de experiencia',
  'hero.stat.companies': 'Empresas',
  'hero.stat.certs': 'Certificaciones',
  'hero.stat.projects': 'Proyectos entregados',

  'manifesto.kicker': 'Manifiesto',
  'manifesto.title': 'Sobre mí',
  'manifesto.statement': 'Creo aplicaciones cloud-native que convierten problemas de negocio en resultados medibles: menos latencia, más cobertura de pruebas y mejor uptime.',
  'manifesto.p1': 'Ingeniero de Software con 4 años de experiencia construyendo soluciones end-to-end para logística, seguros y consultoría. Foco actual: Golang y Google Cloud Platform.',
  'manifesto.p2': 'Creo en el ciclo completo del software: diseñar la arquitectura, escribir pruebas, desplegar y operar. Y en documentar decisiones, no repetir código.',
  'manifesto.cta': 'Descargar CV',
  'manifesto.data.title': 'Información',
  'manifesto.data.role': 'Cargo',
  'manifesto.data.location': 'Ubicación',
  'manifesto.data.email': 'Email',
  'manifesto.data.phone': 'Teléfono',
  'manifesto.data.studies': 'Estudios',
  'manifesto.data.langs': 'Idiomas',
  'manifesto.data.availability': 'Disponibilidad',
  'manifesto.data.langs.value': 'Español (nativo) · Inglés (técnico)',
  'manifesto.data.availability.value': 'Full-time · Remoto / Híbrido',
  'manifesto.data.studies.value': 'Ingeniería en Informática — INACAP',

  'exp.kicker': 'Experiencia y formación',
  'exp.present': 'Actualmente',
  'exp.cv': 'CV completo ↓',
  'exp.work': 'Experiencia',
  'exp.edu': 'Formación y certificados',

  'exp.starken.title': 'Ingeniero de Software Semi Senior',
  'exp.starken.period': 'Dic 2024 · Actualidad',
  'exp.starken.1': 'Aplicaciones cloud en Google Cloud Platform (GKE, Cloud Storage), integradas con eventos y webhooks.',
  'exp.starken.2': 'Backend en Golang, con integración de la API de Google Maps para geolocalización y optimización de rutas.',
  'exp.starken.3': 'Flujo ágil con Jira (Scrum/Kanban): -25% tiempo de entrega y +30% eficiencia del equipo.',
  'exp.starken.4': 'Análisis de calidad y detección temprana de vulnerabilidades con SonarQube.',

  'exp.vrg.title': 'Analista Desarrollador',
  'exp.vrg.period': 'Feb 2024 · Ene 2025',
  'exp.vrg.1': 'Microservicios con Quarkus y Panache, incluyendo migración a Quarkus 3.10.1.',
  'exp.vrg.2': 'Pruebas unitarias con 86% de cobertura y servicios REST con Spring Boot e Hibernate.',
  'exp.vrg.3': 'Plataforma de gestión de archivos sobre AWS S3 con AWS Lambda: +40% eficiencia de carga.',

  'exp.zurich.title': 'Analista de Sistemas',
  'exp.zurich.period': 'Jul 2023 · Dic 2023',
  'exp.zurich.1': 'Backend con Spring Boot y microservicios con Spring Cloud: +30% eficiencia de consultas.',
  'exp.zurich.2': 'Gestión de repositorios en GitLab y administración de proyectos con Maven.',

  'exp.inacap.title': 'Ingeniería en Informática',
  'exp.inacap.org': 'INACAP',
  'exp.inacap.period': '2021 · Actualidad',
  'exp.inacap.1': 'Formación en análisis, diseño, construcción, pruebas e implementación de soluciones informáticas.',
  'exp.forge.1': 'Bootcamp de formación en habilidades laborales y tecnológicas.',

  'certs.kicker': 'Certificaciones',
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
  'certs.view': 'Ver certificado',

  'skills.eyebrow': 'Competencias',
  'skills.frontend': 'Frontend & Interfaces',
  'skills.backend': 'Backend & APIs',
  'skills.db': 'Bases de Datos',
  'skills.cloud': 'Cloud & DevOps',
  'skills.testing': 'Testing & Calidad',
  'skills.data.frontend': 'React, Angular, TypeScript, JavaScript, Tailwind CSS, HTML/CSS',
  'skills.data.backend': 'Golang, Java (Spring Boot, Quarkus), Node.js (Express), Python (Django)',
  'skills.data.db': 'PostgreSQL, MySQL, Redis (caché), modelado relacional',
  'skills.data.cloud': 'Google Cloud (GKE, Cloud Run, Storage), AWS (S3, Lambda), Docker, Kubernetes, GitLab/GitHub CI',
  'skills.data.testing': 'JUnit, Jest, Go testing, JaCoCo, JMeter, SonarQube',
  'skills.soft': 'Habilidades profesionales',
  'skills.soft.items': 'Scrum/Agile (Jira) · Liderazgo de equipo · Gestión de conflictos · Comunicación efectiva · Aprendizaje continuo',
  'skills.more': 'más de 10 tecnologías en producción',

  'projects.kicker': 'Proyectos',
  'projects.subtitle': 'Trabajo seleccionado: resultados medibles en cada stack',
  'projects.logistics.name': 'Plataforma Cloud Logística',
  'projects.logistics.role': 'Starken · 2024 — 2025',
  'projects.logistics.desc': 'Aplicación en Golang sobre GCP para el despacho y trazabilidad: APIs con JWT, eventos, webhooks y despliegue continuo con Cloud Build.',
  'projects.logistics.tags': 'Go · GCP/GKE · Cloud Run · PostgreSQL · React',
  'projects.logistics.m1': '+30% eficiencia operativa',
  'projects.logistics.m2': '99.9% uptime',
  'projects.logistics.m3': '40+ deploys/mes',

  'projects.insurance.name': 'Microservicios de Seguros',
  'projects.insurance.role': 'Zurich Santander · 2023',
  'projects.insurance.desc': 'Arquitectura de microservicios con Spring Cloud en Zurich Santander: service discovery, circuit breakers y configuración distribuida para emisión de pólizas.',
  'projects.insurance.tags': 'Java · Spring Boot · Spring Cloud · MySQL · Docker',
  'projects.insurance.m1': '+30% eficiencia consultas',
  'projects.insurance.m2': '88% cobertura',
  'projects.insurance.m3': '12 microservicios',

  'projects.files.name': 'Gestión de Archivos en la Nube',
  'projects.files.role': 'VR Group · 2024',
  'projects.files.desc': 'Plataforma de gestión de documentos para VR Group sobre AWS S3 y Lambda, construida con Quarkus y pruebas unitarias con alta cobertura.',
  'projects.files.tags': 'Quarkus · Panache · AWS S3 · Lambda · Angular',
  'projects.files.m1': '+40% eficiencia carga',
  'projects.files.m2': '86% cobertura',
  'projects.files.m3': 'serverless',

  'projects.quarkus.name': 'Migración a Quarkus 3.10.1',
  'projects.quarkus.role': 'VR Group · 2024',
  'projects.quarkus.desc': 'Migración completa de microservicios a Quarkus con Panache: arranque más rápido, menor footprint y mayor productividad del equipo backend.',
  'projects.quarkus.tags': 'Quarkus · Panache · JPA · Java 17',
  'projects.quarkus.m1': '3.10.1',
  'projects.quarkus.m2': 'menor footprint',
  'projects.quarkus.m3': 'arranque nativo',

  'contact.headline': '¿Hablamos?',
  'contact.subtitle': 'Cuéntame sobre tu proyecto, una oportunidad o un problema técnico. Respondo en menos de 24 horas.',
  'contact.status': 'Disponible para nuevos proyectos',
  'contact.location': 'Santiago, Chile',
  'contact.role': 'Ingeniero de Software Semi Senior',
  'contact.email.label': 'Email',
  'contact.phone.label': 'Teléfono',
  'contact.location.label': 'Ubicación',
  'contact.response': 'respuesta < 24h',
  'contact.form.name': 'Tu nombre',
  'contact.form.email': 'Tu email',
  'contact.form.message': 'Cuéntame sobre tu proyecto…',
  'contact.form.send': 'Enviar mensaje',
  'contact.openmail': 'Se abrirá tu cliente de correo',
  'contact.marquee': 'Hablemos | Trabajemos | Colaboremos | Construyamos juntos | Buen momento para conectar',

  'footer.rights': 'Todos los derechos reservados',
  'footer.built': 'Diseñado y construido por Daniel Morales',
  'faq.title': 'Preguntas frecuentes',
  'faq.kicker': 'Entrevista',
  'faq.subtitle': 'Respuestas reales a las preguntas que más me hacen',
};

const en: Record<string, string> = {
  'nav.title': 'Daniel Morales | Software Engineer — Golang, GCP, React',
  'loader.tag': 'daniel.dev — v4.0',
  'loader.since': 'est. 2026 — Santiago',
  'nav.menu': 'Menu',
  'nav.close': 'Close',
  'nav.top': 'Back to top',
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.journey': 'Career',
  'nav.projects': 'Projects',
  'nav.skills': 'Skills',
  'nav.certs': 'Certifications',
  'nav.contact': 'Contact',

  'hero.kicker': 'Software Engineer — Santiago, Chile',
  'hero.role': 'Mid-Senior Software Engineer',
  'hero.lead': 'I build cloud-native applications in Golang on Google Cloud, with full stack experience in Java, React and Node.js.',
  'hero.stack': 'GO · GCP (GKE/Cloud Run) · JAVA · REACT · NODE',
  'hero.available': 'Available for new projects',
  'hero.cv': 'Download CV',
  'hero.scroll': 'scroll to explore',
  'hero.big.name': 'DANIEL',
  'hero.big.lastname': 'MORALES',
  'hero.stat.years': 'Years of experience',
  'hero.stat.companies': 'Companies',
  'hero.stat.certs': 'Certifications',
  'hero.stat.projects': 'Projects delivered',

  'manifesto.kicker': 'Manifesto',
  'manifesto.title': 'About me',
  'manifesto.statement': 'I build cloud-native applications that turn business problems into measurable outcomes: less latency, higher test coverage and better uptime.',
  'manifesto.p1': 'Software Engineer with 4 years of experience building end-to-end solutions for logistics, insurance and consulting. Current focus: Golang and Google Cloud Platform.',
  'manifesto.p2': 'I believe in the full software lifecycle: designing architecture, writing tests, deploying and operating. And in documenting decisions, not repeating code.',
  'manifesto.cta': 'Download CV',
  'manifesto.data.title': 'Details',
  'manifesto.data.role': 'Role',
  'manifesto.data.location': 'Location',
  'manifesto.data.email': 'Email',
  'manifesto.data.phone': 'Phone',
  'manifesto.data.studies': 'Studies',
  'manifesto.data.langs': 'Languages',
  'manifesto.data.availability': 'Availability',
  'manifesto.data.langs.value': 'Spanish (native) · English (technical)',
  'manifesto.data.availability.value': 'Full-time · Remote / Hybrid',
  'manifesto.data.studies.value': 'Computer Engineering — INACAP',

  'exp.kicker': 'Experience & education',
  'exp.present': 'Currently',
  'exp.cv': 'Full CV ↓',
  'exp.work': 'Experience',
  'exp.edu': 'Education & certificates',

  'exp.starken.title': 'Mid-Senior Software Engineer',
  'exp.starken.period': 'Dec 2024 · Present',
  'exp.starken.1': 'Cloud applications on Google Cloud Platform (GKE, Cloud Storage), integrated via events and webhooks.',
  'exp.starken.2': 'Backend in Golang, including Google Maps API integration for geolocation and route optimization.',
  'exp.starken.3': 'Agile workflow with Jira (Scrum/Kanban): -25% delivery time and +30% team efficiency.',
  'exp.starken.4': 'Quality analysis and early vulnerability detection with SonarQube.',

  'exp.vrg.title': 'Developer Analyst',
  'exp.vrg.period': 'Feb 2024 · Jan 2025',
  'exp.vrg.1': 'Microservices with Quarkus and Panache, including migration to Quarkus 3.10.1.',
  'exp.vrg.2': 'Unit tests with 86% coverage and REST services with Spring Boot and Hibernate.',
  'exp.vrg.3': 'File management platform on AWS S3 with AWS Lambda: +40% upload efficiency.',

  'exp.zurich.title': 'Systems Analyst',
  'exp.zurich.period': 'Jul 2023 · Dec 2023',
  'exp.zurich.1': 'Backend with Spring Boot and microservices with Spring Cloud: +30% query efficiency.',
  'exp.zurich.2': 'GitLab repository management and Maven project administration.',

  'exp.inacap.title': 'Computer Engineering',
  'exp.inacap.org': 'INACAP',
  'exp.inacap.period': '2021 · Present',
  'exp.inacap.1': 'Training in analysis, design, development, testing and implementation of IT solutions.',
  'exp.forge.1': 'Bootcamp on professional and technical skills.',

  'certs.kicker': 'Certifications',
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
  'certs.view': 'View certificate',

  'skills.eyebrow': 'Competencies',
  'skills.frontend': 'Frontend & Interfaces',
  'skills.backend': 'Backend & APIs',
  'skills.db': 'Databases',
  'skills.cloud': 'Cloud & DevOps',
  'skills.testing': 'Testing & Quality',
  'skills.data.frontend': 'React, Angular, TypeScript, JavaScript, Tailwind CSS, HTML/CSS',
  'skills.data.backend': 'Golang, Java (Spring Boot, Quarkus), Node.js (Express), Python (Django)',
  'skills.data.db': 'PostgreSQL, MySQL, Redis (cache), relational modeling',
  'skills.data.cloud': 'Google Cloud (GKE, Cloud Run, Storage), AWS (S3, Lambda), Docker, Kubernetes, GitLab/GitHub CI',
  'skills.data.testing': 'JUnit, Jest, Go testing, JaCoCo, JMeter, SonarQube',
  'skills.soft': 'Professional skills',
  'skills.soft.items': 'Scrum/Agile (Jira) · Team leadership · Conflict management · Effective communication · Continuous learning',
  'skills.more': '10+ technologies in production',

  'projects.kicker': 'Projects',
  'projects.subtitle': 'Selected work: measurable results on every stack',
  'projects.logistics.name': 'Cloud Logistics Platform',
  'projects.logistics.role': 'Starken · 2024 — 2025',
  'projects.logistics.desc': 'Golang application on GCP for dispatch and tracking: JWT-secured APIs, events, webhooks and continuous deployment with Cloud Build.',
  'projects.logistics.tags': 'Go · GCP/GKE · Cloud Run · PostgreSQL · React',
  'projects.logistics.m1': '+30% operational efficiency',
  'projects.logistics.m2': '99.9% uptime',
  'projects.logistics.m3': '40+ deploys/month',

  'projects.insurance.name': 'Insurance Microservices',
  'projects.insurance.role': 'Zurich Santander · 2023',
  'projects.insurance.desc': 'Microservice architecture with Spring Cloud at Zurich Santander: service discovery, circuit breakers and distributed config for policy issuance.',
  'projects.insurance.tags': 'Java · Spring Boot · Spring Cloud · MySQL · Docker',
  'projects.insurance.m1': '+30% query efficiency',
  'projects.insurance.m2': '88% coverage',
  'projects.insurance.m3': '12 microservices',

  'projects.files.name': 'Cloud File Management',
  'projects.files.role': 'VR Group · 2024',
  'projects.files.desc': 'Document management platform for VR Group on AWS S3 and Lambda, built with Quarkus and high-coverage unit tests.',
  'projects.files.tags': 'Quarkus · Panache · AWS S3 · Lambda · Angular',
  'projects.files.m1': '+40% upload efficiency',
  'projects.files.m2': '86% coverage',
  'projects.files.m3': 'serverless',

  'projects.quarkus.name': 'Quarkus 3.10.1 Migration',
  'projects.quarkus.role': 'VR Group · 2024',
  'projects.quarkus.desc': 'Full microservice migration to Quarkus with Panache: faster startup, smaller footprint and higher backend team productivity.',
  'projects.quarkus.tags': 'Quarkus · Panache · JPA · Java 17',
  'projects.quarkus.m1': '3.10.1',
  'projects.quarkus.m2': 'smaller footprint',
  'projects.quarkus.m3': 'native startup',

  'contact.headline': "Let's talk",
  'contact.subtitle': 'Tell me about your project, an opportunity or a technical problem. I reply within 24 hours.',
  'contact.status': 'Available for new projects',
  'contact.location': 'Santiago, Chile',
  'contact.role': 'Mid-Senior Software Engineer',
  'contact.email.label': 'Email',
  'contact.phone.label': 'Phone',
  'contact.location.label': 'Location',
  'contact.response': 'response < 24h',
  'contact.form.name': 'Your name',
  'contact.form.email': 'Your email',
  'contact.form.message': 'Tell me about your project…',
  'contact.form.send': 'Send message',
  'contact.openmail': 'Your mail client will open',
  'contact.marquee': "Let's talk | Let's work together | Great time to connect | Open to new ideas",

  'footer.rights': 'All rights reserved',
  'footer.built': 'Designed and built by Daniel Morales',
  'faq.title': 'FAQ',
  'faq.kicker': 'Interview',
  'faq.subtitle': 'Real answers to the questions I get asked the most',
};

export const translations: Record<Lang, Record<string, string>> = { es, en };