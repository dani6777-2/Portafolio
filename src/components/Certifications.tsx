import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faFilePdf, faFileImage } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useLang } from '../i18n/translations';
import { SceneHeader } from './ui';
import certFrontend from '../assets/img/certificado-frontend.pdf';
import certCisco from '../assets/img/certificado-cisco.pdf';
import certForge from '../assets/img/certificado-forge.png';
import certJava from '../assets/img/certificado-java.pdf';
import certSence from '../assets/img/certificado-sence.pdf';

interface Certificate {
  titleKey: string;
  metaKey: string;
  file: string;
  year: string;
  isImage?: boolean;
}

const certificates: Certificate[] = [
  { titleKey: 'certs.frontend', metaKey: 'certs.frontend.meta', file: certFrontend, year: '2024' },
  { titleKey: 'certs.java', metaKey: 'certs.java.meta', file: certJava, year: '2023' },
  { titleKey: 'certs.forge', metaKey: 'certs.forge.meta', file: certForge, year: '2024', isImage: true },
  { titleKey: 'certs.cisco', metaKey: 'certs.cisco.meta', file: certCisco, year: '2024' },
  { titleKey: 'certs.sence', metaKey: 'certs.sence.meta', file: certSence, year: '2022' },
];

const Certifications: React.FC = () => {
  const { t } = useLang();

  return (
    <section id="certs" className="py-20 sm:py-28">
      <div className="container-site">
        <SceneHeader index="05" label={t('certs.kicker')} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, idx) => (
            <motion.a
              key={`${cert.titleKey}-${idx}`}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="group border border-line/15 p-5 sm:p-6 bg-paper/50 hover:bg-ink hover:border-ink hover:text-paper transition-all duration-300 flex items-start gap-4"
            >
              <span className="w-10 h-10 rounded-full border border-accent/40 flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-ink transition-colors duration-300">
                <FontAwesomeIcon icon={cert.isImage ? faFileImage : faFilePdf} />
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <h3 className="font-display font-bold text-lg text-ink group-hover:text-paper transition-colors duration-300 leading-tight">
                    {t(cert.titleKey)}
                  </h3>
                </div>
                <p className="mt-1 text-sm text-muted group-hover:text-paper/60 transition-colors duration-300">
                  {t(cert.metaKey)}
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="font-mono text-xs text-muted group-hover:text-accent transition-colors duration-300">{cert.year}</span>
                  <span className="text-muted group-hover:text-accent transition-colors duration-300">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}

          <div className="border border-dashed border-line/30 p-6 flex flex-col justify-center items-start gap-2 min-h-[140px]">
            <p className="font-display font-bold text-lg text-ink">{t('certs.subtitle')}</p>
            <p className="font-mono text-xs text-muted">
              <span className="text-accent">✦</span> 2026 — {t('certs.kicker')} en curso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;