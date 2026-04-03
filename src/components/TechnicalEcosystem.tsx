import { useState, useRef, useEffect } from 'react';
import './components.css';
import { useInView } from '../hooks/useInView';

const cats = [
  {
    icon: '</>',
    label: 'Languages',
    items: [
      { name: 'Python',     level: 100 },
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 80 },
      { name: 'Go',         level: 65 },
      { name: 'HTML/CSS',   level: 95 },
      { name: 'SQL',        level: 75 },
      { name: 'JAVA',        level: 85 },

    ],
  },
  {
    icon: '◈',
    label: 'Frameworks',
    items: [
      { name: 'React.js',     level: 88 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Vite',         level: 80 },
      { name: 'Node.js',      level: 75 },
    ],
  },
  {
    icon: '⚙',
    label: 'Tools',
    items: [
      { name: 'Git & Github',   level: 90 },
      { name: 'GitHub Actions', level: 70 },
      { name: 'Docker',         level: 60 },
    ],
  },
  {
    icon: '◉',
    label: 'Concepts',
    items: [
      { name: 'OOP Principles',   level: 88 },
      { name: 'RESTful APIs',     level: 85 },
      { name: 'Data Mining',      level: 80 },
      { name: 'Cloud Architecture', level: 65 },
      { name: 'CICD Pipelines',   level: 70 },
    ],
  },
];

export default function TechnicalEcosystem() {
  const { ref, visible } = useInView();
  const [active, setActive] = useState(0);
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    barRefs.current.forEach((bar, i) => {
      if (!bar) return;
      bar.style.width = visible ? `${cats[active].items[i]?.level ?? 0}%` : '0%';
    });
  }, [visible, active]);

  return (
    <section id="skills" className="tech-section" ref={ref as React.RefObject<HTMLElement>}>
      <div className="tech-inner">

        <div className={`tech-header ${visible ? 'anim-fade-left' : 'anim-hidden'}`}>
          <h2 className="section-title section-title--no-bottom">Technical <span>Ecosystem</span></h2>
        </div>

        <div className={`tech-panel ${visible ? 'anim-fade-up d-200' : 'anim-hidden'}`}>

          {/* Left: category tabs */}
          <div className="tech-tabs">
            {cats.map((cat, i) => (
              <button key={i} className={`tech-tab ${active === i ? 'active' : ''}`}
                onClick={() => setActive(i)}>
                <span className="tech-tab-icon">{cat.icon}</span>
                <span className="tech-tab-label">{cat.label}</span>
                <span className="tech-tab-count">{cat.items.length}</span>
              </button>
            ))}
          </div>

          {/* Right: skill bars */}
          <div className="tech-skills">
            <p className="tech-skills-title">{cats[active].label}</p>
            <div className="tech-skill-list">
              {cats[active].items.map((item, i) => (
                <div key={i} className="tech-skill-row">
                  <div className="tech-skill-meta">
                    <span className="tech-skill-name">{item.name}</span>
                    <span className="tech-skill-pct">{item.level}%</span>
                  </div>
                  <div className="tech-skill-track">
                    <div className="tech-skill-bar" ref={el => { barRefs.current[i] = el; }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
