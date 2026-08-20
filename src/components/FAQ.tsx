import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '../i18n/translations';
import { SceneHeader } from './ui';

interface Bi {
  es: string;
  en: string;
}

interface QA {
  q: Bi;
  a: Bi;
}

const faqs: QA[] = [
  {
    q: { es: '¿Cómo has utilizado Go en tus proyectos?', en: 'How have you used Go in your projects?' },
    a: {
      es: 'En Starken desarrollo aplicaciones cloud con Golang: goroutines para concurrencia, APIs con net/http y chi, binarios estáticos que simplifican el despliegue en GKE, y testing con la librería estándar más testify.',
      en: 'At Starken I build cloud applications in Go: goroutines for concurrency, APIs with net/http and chi, static binaries that simplify GKE deployment, and testing with the standard library plus testify.'
    },
  },
  {
    q: { es: '¿Cómo abordas la seguridad en tus aplicaciones?', en: 'How do you approach application security?' },
    a: {
      es: 'Seguridad en capas: JWT/OAuth2, autorización por roles, validación de entradas y dependencias escaneadas con SonarQube. En la nube aplico IAM con mínimo privilegio, VPC con subredes privadas y secretos gestionados.',
      en: 'Security in layers: JWT/OAuth2, role-based authorization, input validation and dependencies scanned with SonarQube. In the cloud I apply least-privilege IAM, VPCs with private subnets and managed secrets.'
    },
  },
  {
    q: { es: '¿Cómo manejas el testing y la calidad?', en: 'How do you handle testing and quality?' },
    a: {
      es: 'Estrategia piramidal: unit tests (86-90% de cobertura con JUnit/Jest/Go testing), tests de integración, análisis con JaCoCo y pruebas de carga con JMeter antes de producción.',
      en: 'Pyramid strategy: unit tests (86-90% coverage with JUnit/Jest/Go testing), integration tests, JaCoCo analysis and JMeter load tests before production.'
    },
  },
  {
    q: { es: '¿Qué experiencia tienes con microservicios?', en: 'What is your microservices experience?' },
    a: {
      es: 'En Zurich Santander construí microservicios con Spring Boot y Spring Cloud (service discovery, circuit breakers, config distribuida) mejorando la eficiencia de consultas un 30%. En VR Group con Quarkus y Panache, y en Starken con Go sobre GKE.',
      en: 'At Zurich Santander I built microservices with Spring Boot and Spring Cloud (discovery, circuit breakers, distributed config), improving query efficiency by 30%. At VR Group with Quarkus and Panache, and at Starken with Go on GKE.'
    },
  },
  {
    q: { es: '¿Cómo implementas CI/CD?', en: 'How do you implement CI/CD?' },
    a: {
      es: 'Pipelines con GitLab CI y GitHub Actions: build, tests, SonarQube y despliegue automatizado. Uso trunk-based development y feature flags para entregas continuas seguras.',
      en: 'Pipelines with GitLab CI and GitHub Actions: build, tests, SonarQube and automated deployment. I use trunk-based development and feature flags for safe continuous delivery.'
    },
  },
  {
    q: { es: '¿Cuál ha sido tu mayor desafío técnico?', en: 'What has been your biggest technical challenge?' },
    a: {
      es: 'En Zurich Santander, consultas que tardaban minutos. Implementé caché distribuido, índices optimizados y queries asíncronas, reduciendo los tiempos en 40%. Aprendí a medir antes de optimizar.',
      en: 'At Zurich Santander, queries that took minutes. I implemented distributed caching, optimized indexes and async queries, cutting response times by 40%. I learned to measure before optimizing.'
    },
  },
  {
    q: { es: '¿Por qué deberían contratarte?', en: 'Why should we hire you?' },
    a: {
      es: 'Soy Ingeniero de Software Semi Senior con foco cloud-native: Golang sobre GCP, complementado con Java y React. Resultados medibles: -40% tiempos de consulta, +30% eficiencia de equipo, 86-90% de cobertura. Aporto además perspectiva de negocio por mi paso por logística, consultoría y seguros.',
      en: "I'm a Mid-Senior Software Engineer focused on cloud-native: Golang on GCP, complemented by Java and React. Measurable results: -40% query time, +30% team efficiency, 86-90% coverage. I also bring business perspective from logistics, consulting and insurance."
    },
  },
  {
    q: { es: '¿Cómo manejas los conflictos en el equipo?', en: 'How do you handle team conflicts?' },
    a: {
      es: 'Comunicación abierta y decisiones basadas en datos: ante desacuerdos técnicos propongo POCs para validar enfoques y uso las ceremonias ágiles para llegar a consensos que beneficien al proyecto.',
      en: 'Open communication and data-driven decisions: for technical disagreements I propose POCs to validate approaches and use agile ceremonies to reach consensus that benefits the project.'
    },
  },
  {
    q: { es: '¿Cuál es tu mayor fortaleza y debilidad?', en: 'What are your strengths and weaknesses?' },
    a: {
      es: 'Mi fortaleza es la velocidad de aprendizaje: de Java a Golang y GCP en poco tiempo. Mi debilidad era el exceso de optimización: aprendí a balancear la perfección técnica con las necesidades del negocio.',
      en: 'My strength is learning speed: from Java to Golang and GCP in a short time. My weakness was over-tuning: I learned to balance technical perfection with business needs.'
    },
  },
  {
    q: { es: '¿Qué buscas en tu próximo trabajo?', en: 'What are you looking for in your next role?' },
    a: {
      es: 'Aplicar y expandir mi experiencia cloud-native con Golang y GCP: equipos que construyan sobre GKE o Cloud Run con CI/CD sólido, donde pueda crecer y aportar desde el diseño de arquitectura.',
      en: 'To apply and expand my cloud-native experience with Golang and GCP: teams building on GKE or Cloud Run with solid CI/CD, where I can grow and contribute from architecture design.'
    },
  },
];

const Faq: React.FC = () => {
  const { lang, t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="container-site">
        <SceneHeader index="06" label={t('faq.kicker')} />

        <div className="border-t border-line/20">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div key={idx} className="border-b border-line/20">
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-baseline gap-5 sm:gap-8 py-6 sm:py-8 text-left group"
                >
                  <span className="font-mono text-xs text-accent hidden sm:block">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`font-display font-bold flex-1 transition-colors duration-300 ${
                      isOpen ? 'text-accent' : 'text-ink group-hover:text-accent'
                    } text-lg sm:text-3xl leading-tight`}
                  >
                    {item.q[lang]}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl sm:text-4xl font-display font-extrabold text-muted group-hover:text-ink"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pl-0 sm:pl-14 pr-0 sm:pr-16 pb-8 text-muted leading-relaxed max-w-3xl text-base sm:text-lg">
                        {item.a[lang]}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;