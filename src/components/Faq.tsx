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
    q: { es: '¿Cuál es tu filosofía de desarrollo?', en: 'What is your development philosophy?' },
    a: {
      es: 'Código que se entiende sin comentarios, arquitectura que escala sin reescribir y decisiones documentadas. Prefiero soluciones simples que funcionen a abstracciones elegantes que nadie mantiene. El ciclo completo importa: diseñar, implementar, testear, desplegar y operar.',
      en: "Code that reads without comments, architecture that scales without rewriting, and documented decisions. I prefer simple solutions that work over elegant abstractions nobody maintains. The full cycle matters: design, implement, test, deploy and operate."
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
    q: { es: '¿Qué aprendizaje te ha marcado más?', en: 'What learning has shaped you the most?' },
    a: {
      es: 'Pasar de Java a Golang me enseñó que la simplicidad es una feature. Go me forzó a pensar en composición sobre herencia, en interfaces pequeñas y en no sobre-diseñar. Ese cambio de mentalidad mejoró todo mi código, incluso cuando vuelvo a Java.',
      en: "Moving from Java to Golang taught me that simplicity is a feature. Go forced me to think in composition over inheritance, small interfaces and not over-engineering. That mindset shift improved all my code, even when I go back to Java."
    },
  },
  {
    q: { es: '¿En qué estás enfocado ahora?', en: 'What are you focused on right now?' },
    a: {
      es: 'Profundizar en arquitectura cloud-native con Golang y GCP: patrones de resiliencia en GKE, observabilidad con OpenTelemetry, y construir herramientas internas que mejoren la productividad del equipo en Starken.',
      en: 'Going deeper into cloud-native architecture with Golang and GCP: resilience patterns on GKE, observability with OpenTelemetry, and building internal tools that improve team productivity at Starken.'
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