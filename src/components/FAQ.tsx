import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faQuestionCircle,
  faCode,
  faBrain,
  faUser,
  faRobot,
} from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  question: string;
  answer: string;
  category: string[];
  keywords: string[];
  difficulty: 'basic' | 'intermediate' | 'advanced';
  relevance: number;
}

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  keywords?: string[];
}

const FAQ: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'technical' | 'psychological'>('technical');
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<string>('');

  const technicalQuestions: Question[] = [
    {
      question: "¿Cómo abordas la seguridad en tus aplicaciones?",
      answer: "Implemento seguridad en múltiples capas: autenticación JWT, autorización basada en roles, validación de inputs, encriptación de datos sensibles y headers de seguridad. En VR Group, implementé OAuth2 y manejé auditorías de seguridad regulares con SonarQube.",
      category: ["Seguridad", "Autenticación", "DevOps"],
      keywords: ["JWT", "OAuth2", "security", "SonarQube"],
      difficulty: "advanced",
      relevance: 90
    },
    {
      question: "¿Cuál ha sido tu mayor desafío técnico y cómo lo resolviste?",
      answer: "En Zurich Santander, enfrenté el desafío de optimizar consultas que tardaban varios minutos. Implementé caché distribuido con Redis, índices optimizados y queries asíncronas, reduciendo los tiempos de respuesta en un 80%.",
      category: ["Optimización", "Bases de Datos", "Rendimiento"],
      keywords: ["optimization", "caching", "Redis", "SQL"],
      difficulty: "advanced",
      relevance: 92
    },
    {
      question: "¿Cómo manejas el testing en tus proyectos?",
      answer: "Sigo una estrategia de testing piramidal: unit tests con JUnit/Jest (>80% cobertura), tests de integración con TestContainers, y tests E2E con Cypress. Uso JaCoCo para análisis de cobertura y JMeter para pruebas de carga.",
      category: ["Testing", "Calidad", "DevOps"],
      keywords: ["JUnit", "Jest", "testing", "coverage"],
      difficulty: "intermediate",
      relevance: 88
    },
    {
      question: "¿Qué patrones de diseño prefieres y por qué?",
      answer: "Utilizo regularmente Repository para abstracción de datos, Factory para creación de objetos complejos, y Strategy para comportamientos intercambiables. En arquitectura, prefiero Clean Architecture y Hexagonal para mantener el código modular y testeable.",
      category: ["Arquitectura", "Patrones de Diseño", "Buenas Prácticas"],
      keywords: ["design patterns", "clean architecture", "SOLID"],
      difficulty: "advanced",
      relevance: 89
    },
    {
      question: "¿Cómo optimizas el rendimiento del frontend?",
      answer: "Implemento lazy loading, code splitting, memoización de componentes React, optimización de imágenes, y uso de service workers para caching. También monitoreo métricas de Core Web Vitals para mejora continua.",
      category: ["Frontend", "Optimización", "React"],
      keywords: ["performance", "React", "optimization", "web vitals"],
      difficulty: "intermediate",
      relevance: 85
    },
    {
      question: "¿Cómo manejas el estado en aplicaciones React?",
      answer: "Dependiendo de la complejidad, uso useState para estado local, Context API para estado compartido, y Redux/Redux Toolkit para aplicaciones más complejas. También implemento custom hooks para lógica reutilizable.",
      category: ["React", "Frontend", "Estado"],
      keywords: ["React", "state management", "Redux", "hooks"],
      difficulty: "intermediate",
      relevance: 86
    },
    {
      question: "¿Cómo implementas CI/CD en tus proyectos?",
      answer: "Utilizo GitLab CI/CD con pipelines que incluyen build, tests, análisis de código, y despliegue automatizado. Implemento trunk-based development y feature flags para entregas continuas seguras.",
      category: ["DevOps", "CI/CD", "Automatización"],
      keywords: ["CI/CD", "GitLab", "automation", "pipelines"],
      difficulty: "advanced",
      relevance: 91
    },
    {
      question: "¿Cómo manejas los errores y el logging?",
      answer: "Implemento manejo centralizado de errores, logging estructurado con ELK Stack, y monitoreo con Prometheus/Grafana. Uso circuit breakers para manejar fallos en servicios externos.",
      category: ["Monitoreo", "DevOps", "Observabilidad"],
      keywords: ["logging", "monitoring", "error handling", "ELK"],
      difficulty: "intermediate",
      relevance: 87
    },
    {
      question: "¿Qué experiencia tienes con bases de datos?",
      answer: "Experiencia sólida con MySQL y Oracle para datos relacionales, DynamoDB para NoSQL. He optimizado queries complejos, diseñado esquemas eficientes y manejado migraciones de datos a gran escala.",
      category: ["Bases de Datos", "SQL", "NoSQL"],
      keywords: ["MySQL", "Oracle", "DynamoDB", "optimization"],
      difficulty: "advanced",
      relevance: 90
    },
    {
      question: "¿Cómo has utilizado Quarkus en tus proyectos?",
      answer: "En VRGroup, implementé microservicios con Quarkus y Panache, logrando una reducción del 25% en costos de infraestructura. Aproveché las características de compilación nativa y el bajo consumo de memoria de Quarkus. También utilicé extensiones como Quarkus REST Client para integraciones y Hibernate ORM with Panache para simplificar el acceso a datos.",
      category: ["Java", "Microservicios", "Optimización"],
      keywords: ["Quarkus", "Panache", "microservices", "native compilation"],
      difficulty: "advanced",
      relevance: 94
    },
    {
      question: "¿Cómo has implementado soluciones en Google Cloud Platform?",
      answer: "En Starken, desplegué microservicios en GCP utilizando GKE para orquestación de contenedores y Cloud Storage para almacenamiento. Integré la API de Google Maps para geolocalización y optimización de rutas. Implementé CI/CD con Cloud Build y utilicé Cloud Monitoring para observabilidad. Esta arquitectura permitió una escalabilidad eficiente y alta disponibilidad.",
      category: ["Cloud", "GCP", "DevOps"],
      keywords: ["GCP", "GKE", "Cloud Storage", "Google Maps API"],
      difficulty: "advanced",
      relevance: 93
    },
    {
      question: "¿Qué experiencia tienes con Spring Boot y Spring Cloud?",
      answer: "En Zurich Santander, desarrollé microservicios con Spring Boot, mejorando la eficiencia de consultas en un 30%. Implementé Spring Cloud para service discovery, circuit breakers y configuración distribuida. Utilicé Spring Security para autenticación OAuth2 y JWT. También integré Spring Actuator para monitoreo y métricas.",
      category: ["Java", "Spring", "Microservicios"],
      keywords: ["Spring Boot", "Spring Cloud", "microservices", "Spring Security"],
      difficulty: "advanced",
      relevance: 92
    },
    {
      question: "¿Cómo optimizas consultas en Oracle?",
      answer: "En VRGroup, optimicé consultas Oracle reduciendo tiempos de ejecución en un 40%. Implementé índices específicos, utilicé hints para el optimizador, y diseñé procedimientos almacenados eficientes. También implementé particionamiento de tablas y materialized views para mejorar el rendimiento de consultas analíticas.",
      category: ["Bases de Datos", "Oracle", "Optimización"],
      keywords: ["Oracle", "SQL optimization", "stored procedures", "indexing"],
      difficulty: "advanced",
      relevance: 91
    },
    {
      question: "¿Cómo implementas la integración continua?",
      answer: "En VRGroup y Starken, configuré pipelines de CI/CD usando GitHub Actions y Jenkins. Integré SonarQube para análisis de código, alcanzando una reducción del 25% en defectos. Implementé pruebas automatizadas, análisis de seguridad y despliegues automatizados. También utilicé feature flags para despliegues seguros.",
      category: ["DevOps", "CI/CD", "Calidad"],
      keywords: ["GitHub Actions", "Jenkins", "SonarQube", "CI/CD"],
      difficulty: "advanced",
      relevance: 90
    },
    {
      question: "¿Cómo manejas la documentación técnica?",
      answer: "En Starken, implementé una estrategia integral de documentación. Utilicé Swagger/OpenAPI para APIs, diagramas C4 para arquitectura, y README.md detallados para cada repositorio. Mantuve diagramas de secuencia actualizados y documenté decisiones de arquitectura usando ADRs (Architecture Decision Records).",
      category: ["Documentación", "Arquitectura", "Buenas Prácticas"],
      keywords: ["Swagger", "OpenAPI", "documentation", "architecture"],
      difficulty: "intermediate",
      relevance: 88
    },
    {
      question: "¿Cómo implementas la seguridad en microservicios?",
      answer: "En mis proyectos, implemento seguridad en capas: autenticación con OAuth2/JWT, autorización basada en roles, validación de inputs, y encriptación de datos sensibles. En VRGroup, integré AWS IAM para control de acceso y configuré políticas de seguridad en Kubernetes. También implemento monitoreo de seguridad y escaneo de vulnerabilidades.",
      category: ["Seguridad", "Microservicios", "Cloud"],
      keywords: ["security", "OAuth2", "JWT", "IAM"],
      difficulty: "advanced",
      relevance: 92
    },
    {
      question: "¿Cómo trabajas con metodologías ágiles?",
      answer: "En Starken, utilicé Jira para gestionar sprints y backlog, logrando una mejora del 30% en eficiencia del equipo. Participé en ceremonias Scrum, facilité retrospectivas, y mantuve tableros Kanban. También implementé métricas ágiles para seguimiento de velocidad y calidad del equipo.",
      category: ["Agile", "Gestión", "Scrum"],
      keywords: ["Jira", "Scrum", "Kanban", "agile"],
      difficulty: "intermediate",
      relevance: 89
    },
    {
      question: "¿Qué es Cloud Computing y cuáles son sus beneficios principales?",
      answer: "Cloud Computing es un modelo que permite el acceso bajo demanda a recursos informáticos compartidos (redes, servidores, almacenamiento, aplicaciones y servicios) que pueden aprovisionarse y liberarse rápidamente. Los beneficios principales incluyen: escalabilidad automática, reducción de costos operativos al pagar solo por lo que se usa, mayor agilidad en el despliegue de aplicaciones, y acceso global a recursos. Actualmente estoy profundizando mis conocimientos en este campo a través del programa AWS re/Start de Generation Chile.",
      category: ["Cloud", "AWS", "Infraestructura"],
      keywords: ["cloud computing", "AWS", "scalability", "cost optimization"],
      difficulty: "basic",
      relevance: 95
    },
    {
      question: "¿Cuáles son los servicios fundamentales de AWS que conoces?",
      answer: "Como parte de mi formación en AWS re/Start, me estoy familiarizando con servicios clave como: EC2 para computación virtual, S3 para almacenamiento escalable, RDS para bases de datos relacionales, Lambda para computación serverless, VPC para redes privadas virtuales, y IAM para gestión de identidad y acceso. También estoy aprendiendo sobre servicios de monitoreo como CloudWatch y herramientas de seguridad como AWS Shield.",
      category: ["AWS", "Cloud", "Servicios"],
      keywords: ["AWS services", "EC2", "S3", "Lambda", "VPC"],
      difficulty: "intermediate",
      relevance: 94
    },
    {
      question: "¿Cómo implementarías la seguridad en un entorno AWS?",
      answer: "La seguridad en AWS se implementa siguiendo el modelo de responsabilidad compartida. Esto incluye: configuración adecuada de IAM con el principio de mínimo privilegio, implementación de VPCs con subredes públicas y privadas, uso de grupos de seguridad y NACLs para control de tráfico, encriptación de datos en reposo y en tránsito, monitoreo continuo con CloudTrail y CloudWatch, y realización regular de auditorías de seguridad.",
      category: ["AWS", "Seguridad", "Cloud"],
      keywords: ["AWS security", "IAM", "VPC", "encryption", "monitoring"],
      difficulty: "advanced",
      relevance: 93
    }
  ];

  const psychologicalQuestions: Question[] = [
    {
      question: "¿Cómo manejas situaciones de presión o deadlines ajustados?",
      answer: "Mi experiencia en Starken me ha permitido desarrollar un enfoque efectivo para manejar la presión. Utilizo Jira para priorizar tareas y mantener una visión clara del progreso, lo que nos permitió reducir los tiempos de entrega en un 25%. Mantengo una comunicación proactiva con stakeholders sobre el estado y posibles riesgos, y uso metodologías ágiles para adaptarnos rápidamente a cambios en las prioridades.",
      category: ["Gestión del Tiempo", "Trabajo bajo presión"],
      keywords: ["time management", "pressure handling", "communication"],
      difficulty: "intermediate",
      relevance: 90
    },
    {
      question: "¿Cómo te mantienes actualizado en tecnología?",
      answer: "Me mantengo al día a través de certificaciones relevantes como Java Developer de Coding Dojo y Talento Digital. También tengo certificación en Fundamentos de Ciberseguridad de CISCO Academy. Participo activamente en la comunidad de desarrollo y me mantengo al día con las últimas tendencias en cloud computing, microservicios y desarrollo Java.",
      category: ["Desarrollo Profesional", "Aprendizaje Continuo"],
      keywords: ["continuous learning", "certifications", "professional development"],
      difficulty: "basic",
      relevance: 85
    },
    {
      question: "¿Cómo manejas los conflictos en el equipo?",
      answer: "Durante mi tiempo en VRGroup y Starken, he desarrollado un enfoque basado en la comunicación abierta y la toma de decisiones basada en datos. Cuando surgen desacuerdos técnicos, propongo crear POCs para validar diferentes enfoques. Utilizo mi experiencia en metodologías ágiles para facilitar discusiones productivas y alcanzar consensos que beneficien al proyecto.",
      category: ["Trabajo en Equipo", "Resolución de Conflictos"],
      keywords: ["conflict resolution", "team work", "communication"],
      difficulty: "intermediate",
      relevance: 88
    },
    {
      question: "¿Por qué deberíamos contratarte?",
      answer: "Combino sólida experiencia técnica en desarrollo Java, microservicios y cloud computing con habilidades probadas en mejora de rendimiento y optimización. He demostrado resultados medibles en mis roles anteriores, como la reducción del 40% en tiempos de ejecución de consultas en Zurich Santander y la mejora del 30% en eficiencia de equipo en Starken. Mi experiencia diversa en diferentes industrias me permite adaptarme rápidamente y aportar perspectivas valiosas.",
      category: ["Motivación", "Experiencia"],
      keywords: ["experience", "technical skills", "achievements"],
      difficulty: "intermediate",
      relevance: 95
    },
    {
      question: "¿Dónde te ves en 5 años?",
      answer: "Me veo liderando equipos técnicos y arquitecturas de sistemas empresariales complejos, especialmente en el ámbito de microservicios y cloud computing. Planeo profundizar mi experiencia en arquitecturas cloud-native y continuar desarrollando mis habilidades en nuevas tecnologías. También aspiro a contribuir más en la comunidad técnica compartiendo conocimientos y mejores prácticas.",
      category: ["Desarrollo Profesional", "Liderazgo"],
      keywords: ["career goals", "leadership", "technical growth"],
      difficulty: "intermediate",
      relevance: 85
    },
    {
      question: "¿Cómo manejas la retroalimentación negativa?",
      answer: "Veo la retroalimentación como una oportunidad de crecimiento. Por ejemplo, en VRGroup, utilicé el feedback de las revisiones de código en SonarQube para mejorar la calidad del código y reducir vulnerabilidades. Mantengo una mentalidad de mejora continua y uso la retroalimentación para establecer objetivos concretos de desarrollo profesional.",
      category: ["Desarrollo Personal", "Profesionalismo"],
      keywords: ["feedback", "continuous improvement", "growth mindset"],
      difficulty: "intermediate",
      relevance: 86
    },
    {
      question: "¿Cuál es tu mayor fortaleza y debilidad?",
      answer: "Mi mayor fortaleza es mi capacidad para aprender y adaptarme rápidamente a nuevas tecnologías, como lo demuestran mis certificaciones y mi experiencia trabajando con diversas tecnologías desde Java hasta cloud platforms. Mi área de mejora es que a veces puedo ser demasiado detallista en la optimización de código, aunque he aprendido a balancear la perfección técnica con las necesidades del negocio y los plazos de entrega.",
      category: ["Autoconocimiento", "Desarrollo Personal"],
      keywords: ["strengths", "weaknesses", "self-awareness"],
      difficulty: "intermediate",
      relevance: 89
    },
    {
      question: "¿Cómo manejas múltiples prioridades?",
      answer: "En Starken, utilicé Jira para gestionar eficientemente múltiples tareas y prioridades, lo que resultó en una mejora del 30% en la eficiencia del equipo. Mantengo una comunicación constante con stakeholders para alinear expectativas y utilizo metodologías ágiles para adaptar prioridades según las necesidades del negocio. También implemento automatizaciones donde sea posible para optimizar procesos.",
      category: ["Gestión del Tiempo", "Organización"],
      keywords: ["prioritization", "time management", "agile"],
      difficulty: "intermediate",
      relevance: 87
    },
    {
      question: "¿Qué buscas en tu próximo trabajo?",
      answer: "Busco una oportunidad para aplicar y expandir mi experiencia en desarrollo Java, microservicios y cloud computing. Me interesa trabajar en proyectos desafiantes que involucren arquitecturas modernas y tecnologías cloud-native. Valoro ambientes que fomenten el aprendizaje continuo y la innovación, donde pueda contribuir significativamente al éxito del equipo.",
      category: ["Motivación", "Desarrollo Profesional"],
      keywords: ["career goals", "motivation", "growth"],
      difficulty: "basic",
      relevance: 92
    },
    {
      question: "¿Cómo contribuyes a un ambiente de trabajo positivo?",
      answer: "Promuevo la colaboración y el intercambio de conocimientos a través de revisiones de código constructivas y sesiones técnicas. En VRGroup y Starken, contribuí activamente a la mejora continua del equipo mediante la implementación de mejores prácticas de desarrollo y la documentación clara de soluciones. También apoyo a mis compañeros compartiendo mi experiencia en Java, cloud y microservicios.",
      category: ["Trabajo en Equipo", "Cultura"],
      keywords: ["collaboration", "knowledge sharing", "team culture"],
      difficulty: "basic",
      relevance: 84
    },
    {
      question: "¿Cómo te adaptas a nuevas tecnologías y frameworks?",
      answer: "Mi experiencia demuestra una rápida adaptación, como evidencian mis transiciones entre diferentes tecnologías: de Node.js en Colibris a Java/Spring en Marsueños, y luego a Quarkus en VRGroup. Mantengo un aprendizaje continuo a través de certificaciones como Java Developer y participación activa en la comunidad técnica.",
      category: ["Adaptabilidad", "Aprendizaje", "Desarrollo Profesional"],
      keywords: ["adaptability", "learning", "technology adoption"],
      difficulty: "intermediate",
      relevance: 93
    },
    {
      question: "¿Cómo manejas proyectos con requisitos cambiantes?",
      answer: "En Starken, utilicé metodologías ágiles para adaptarnos a cambios frecuentes. Mantuve una comunicación constante con stakeholders, prioricé el backlog dinámicamente, y utilicé sprints cortos para mayor flexibilidad. Esta aproximación resultó en una reducción del 25% en tiempo de entrega y mayor satisfacción del cliente.",
      category: ["Gestión de Cambios", "Agilidad", "Comunicación"],
      keywords: ["change management", "agile", "stakeholder communication"],
      difficulty: "intermediate",
      relevance: 91
    },
    {
      question: "¿Cómo lideras equipos técnicos?",
      answer: "En VRGroup y Starken, lideré equipos técnicos promoviendo buenas prácticas de desarrollo, realizando code reviews constructivos, y facilitando sesiones de arquitectura. Implementé mentorías técnicas y compartí conocimientos a través de workshops, mejorando la calidad del código y la eficiencia del equipo.",
      category: ["Liderazgo", "Mentoría", "Trabajo en Equipo"],
      keywords: ["leadership", "mentoring", "team development"],
      difficulty: "advanced",
      relevance: 90
    },
    {
      question: "¿Cómo balanceas calidad y velocidad de entrega?",
      answer: "En mis proyectos, implemento un equilibrio mediante automatización de pruebas, CI/CD, y análisis de código con SonarQube. En Starken, esto permitió mantener alta calidad mientras reducíamos tiempos de entrega. Uso feature flags para despliegues seguros y mantengo métricas de calidad como parte de los criterios de aceptación.",
      category: ["Calidad", "Eficiencia", "DevOps"],
      keywords: ["quality", "delivery", "automation", "balance"],
      difficulty: "advanced",
      relevance: 89
    },
    {
      question: "¿Cómo manejas situaciones de alto estrés técnico?",
      answer: "Durante incidentes críticos en producción, mantengo la calma y sigo un proceso estructurado: identificación rápida del problema, comunicación clara con stakeholders, implementación de soluciones temporales si es necesario, y documentación para prevención futura. Esta aproximación ha sido efectiva en resolver incidentes minimizando el impacto al negocio.",
      category: ["Resolución de Problemas", "Gestión de Crisis", "Comunicación"],
      keywords: ["stress management", "incident response", "problem solving"],
      difficulty: "advanced",
      relevance: 88
    }
  ];

  const currentQuestions = activeTab === 'technical' ? technicalQuestions : psychologicalQuestions;

  const handleQuestionSelect = (question: string) => {
    setSelectedQuestion(question);
    const selectedQ = currentQuestions.find(q => q.question === question);
    
    if (selectedQ) {
      // Agregar mensaje del usuario
      const userMessage: Message = {
        id: Math.random().toString(36).substr(2, 9),
        type: 'user',
        content: question,
      };
      
      // Agregar mensaje del bot
      const botMessage: Message = {
        id: Math.random().toString(36).substr(2, 9),
        type: 'bot',
        content: selectedQ.answer,
        keywords: selectedQ.keywords,
      };
      
      setMessages(prev => [...prev, userMessage, botMessage]);
    }
  };

  const resetChat = () => {
    setMessages([]);
    setSelectedQuestion('');
  };

  // Variants para las animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const messageVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    exit: { 
      scale: 0.8, 
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section id="faq" className="relative min-h-screen py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Simulador de Entrevista Interactivo
          </h2>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400"
          >
            <FontAwesomeIcon icon={faQuestionCircle} className="text-blue-500" />
            <p className="text-lg">Explora mis respuestas a preguntas técnicas y profesionales</p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Tabs */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-lg">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveTab('technical');
                  resetChat();
                }}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === 'technical'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-500'
                }`}
              >
                <FontAwesomeIcon icon={faCode} className="mr-2" />
                Técnicas
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveTab('psychological');
                  resetChat();
                }}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === 'psychological'
                    ? 'bg-purple-500 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-purple-500'
                }`}
              >
                <FontAwesomeIcon icon={faBrain} className="mr-2" />
                Psicológicas
              </motion.button>
            </div>
          </motion.div>

          {/* Chat Container */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden"
          >
            {/* Chat Messages */}
            <div className="h-[400px] overflow-y-auto p-6 space-y-4">
              <AnimatePresence mode="popLayout">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    variants={messageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    layout
                    className={`flex items-start space-x-3 ${
                      message.type === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.type === 'bot' && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center"
                      >
                        <FontAwesomeIcon icon={faRobot} className="text-white" />
                      </motion.div>
                    )}
                    <motion.div
                      initial={{ x: message.type === 'user' ? 20 : -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className={`max-w-[80%] rounded-xl p-4 ${
                        message.type === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 dark:bg-gray-700'
                      }`}
                    >
                      <p className={message.type === 'user' ? 'text-white' : 'text-gray-800 dark:text-gray-200'}>
                        {message.content}
                      </p>
                      {message.type === 'bot' && message.keywords && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="mt-2 flex flex-wrap gap-2"
                        >
                          {message.keywords.map((keyword, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.2 + idx * 0.1 }}
                              className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                            >
                              {keyword}
                            </motion.span>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                    {message.type === 'user' && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center"
                      >
                        <FontAwesomeIcon icon={faUser} className="text-white" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Question Selector */}
            <motion.div
              variants={itemVariants}
              className="border-t border-gray-200 dark:border-gray-700 p-4"
            >
              <motion.select
                whileFocus={{ scale: 1.02 }}
                value={selectedQuestion}
                onChange={(e) => handleQuestionSelect(e.target.value)}
                className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              >
                <option value="">Selecciona una pregunta...</option>
                {currentQuestions.map((q, index) => (
                  <option key={index} value={q.question}>
                    {q.question} {q.difficulty === 'advanced' ? '🔥' : ''}
                  </option>
                ))}
              </motion.select>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 