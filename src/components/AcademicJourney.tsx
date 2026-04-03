import './components.css';
import { useInView } from '../hooks/useInView';

const education = [
  {
    period: '2022 – PRESENT', badge: 'CURRENT', current: true,
    institution: 'University of Ruhuna',
    degree: 'B.Sc. (Hons) in Computer Science',
    desc: 'Focusing on Algorithm Design, Software Engineering, and Advanced Mathematics.',
    modules: ['Algorithm Design', 'Software Engineering', 'Data Structures', 'Advanced Mathematics'],
  },
  {
    period: '2021 – PRESENT', badge: 'CURRENT', current: true,
    institution: 'Open University of Sri Lanka',
    degree: 'Bsc. in Civil Engineering',
    desc: 'Foundational studies in Civil Engineering.',
    modules: ['Civil industry', 'Applied Sciences', 'electrical'],
  },
  {
    period: 'COMPLETED', badge: 'COMPLETED', current: false,
    institution: 'Mahinda Rajapakshe College,Matara.',
    degree: 'Physical Science in A/L',
    desc: 'Adavanced studies in Physical Sciences.',
    modules: ['Mathematics', 'Physics', 'Chemistry'],
  },
  {
    period: 'COMPLETED', badge: 'COMPLETED', current: false,
    institution: 'Institute of Technology University of Moratuwa',
    degree: 'Web Design Program',
    desc: 'Program covering HTML, CSS, and JavaScript fundamentals.',
    modules: ['HTML', 'CSS', 'JavaScript'],
  },
];

export default function AcademicJourney() {
  const { ref, visible } = useInView();
  return (
    <section id="education" className="edu-section" ref={ref as React.RefObject<HTMLElement>}>
      <div className="edu-inner">
        <h2 className={`section-title ${visible ? 'anim-fade-right' : 'anim-hidden'}`}>
          Academic <span>Journey</span>
        </h2>

        <div className="edu-cards-grid">
          {education.map((item, i) => (
            <div key={i} className={`edu-card-new ${item.current ? 'current' : ''} ${visible ? `anim-fade-up d-${(i + 2) * 100}` : 'anim-hidden'}`}>

              {/* Header */}
              <div className="edu-card-top">
                <div className={`edu-icon ${item.current ? 'current' : 'done'}`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke={item.current ? '#69daff' : '#7a8390'}
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <div className="edu-card-meta">
                  <span className={`edu-badge ${item.current ? 'current' : 'done'}`}>{item.badge}</span>
                  <p className="edu-period">{item.period}</p>
                </div>
              </div>

              {/* Body */}
              <h3 className="edu-institution">{item.institution}</h3>
              <p className="edu-degree">{item.degree}</p>
              <p className="edu-desc">{item.desc}</p>

              {/* Module tags */}
              <div className="edu-modules">
                {item.modules.map((m, j) => (
                  <span key={j} className="edu-module-tag">{m}</span>
                ))}
              </div>

              {/* Bottom accent line */}
              {item.current && <div className="edu-card-accent-line" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
