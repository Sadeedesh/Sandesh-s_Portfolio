import './components.css';
import { useInView } from '../hooks/useInView';

const education = [
  {
    period: '2021 – PRESENT', badge: 'CURRENT', current: true,
    institution: 'University of Ruhuna',
    degree: 'B.Sc. (Hons) in Computer Science',
    desc: 'Focusing on Algorithm Design, Software Engineering, and Advanced Mathematics.',
  },
  {
    period: 'COMPLETED', badge: 'COMPLETED', current: false,
    institution: 'Open University of Sri Lanka',
    degree: 'Advanced Certificate in Science',
    desc: 'Foundational studies in Computing and Applied Sciences.',
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

        <div className="edu-timeline">
          {education.map((item, i) => (
            <div key={i} className={`edu-timeline-item ${visible ? `anim-fade-up d-${(i + 2) * 100}` : 'anim-hidden'}`}>

              {/* Left: year/badge */}
              <div className="edu-timeline-left">
                <span className={`edu-badge ${item.current ? 'current' : 'done'}`}>{item.badge}</span>
                <p className="edu-period">{item.period}</p>
              </div>

              {/* Center: dot + line */}
              <div className="edu-timeline-center">
                <div className={`edu-dot ${item.current ? 'current' : 'done'}`} />
                {i < education.length - 1 && <div className="edu-line" />}
              </div>

              {/* Right: card */}
              <div className={`edu-timeline-card ${item.current ? 'current' : ''}`}>
                <div className="edu-card-corner" />
                <div className="edu-card-icon-row">
                  <div className={`edu-icon ${item.current ? 'current' : 'done'}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke={item.current ? '#69daff' : '#7a8390'}
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                  </div>
                </div>
                <h3 className="edu-institution">{item.institution}</h3>
                <p className="edu-degree">{item.degree}</p>
                <p className="edu-desc">{item.desc}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
