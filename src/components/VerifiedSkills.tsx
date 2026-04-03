import './components.css';
import { useInView } from '../hooks/useInView';

const skills = [
  {
    title: 'HACKERRANK',       sub: 'Problem Solving',         level: 100,
    accent: '#10b981', tag: 'INTERNATIONAL', desc: 'Ranked in top problem solvers globally on HackerRank platform.',
  },
  {
    title: 'HACKERRANK',       sub: 'Python',                  level: 100,
    accent: '#3b82f6', tag: 'CERTIFIED',     desc: 'Certified Python developer with strong algorithmic foundations.',
  },
  {
    title: 'WEB DESIGN',       sub: 'Responsive UI',           level: 100,
    accent: '#a855f7', tag: 'ADVANCED',      desc: 'Advanced responsive UI/UX design with modern CSS techniques.',
  },
  {
   title: 'ALGORITHM DESIGN', sub: 'Competitive Programming', level: 100,
    accent: '#f97316', tag: 'EXPERT',        desc: 'Expert-level data structures and competitive programming skills.',
  },
];

function Ring({ level, accent, visible }: { level: number; accent: string; visible: boolean }) {
  const r = 36;
  const circ = 2 * Math.PI * r;
  const dash = visible ? circ * (1 - level / 100) : circ;
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" className="skill-ring-svg">
      {/* Track */}
      <circle cx="44" cy="44" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
      {/* Progress */}
      <circle cx="44" cy="44" r={r} fill="none" stroke={accent} strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={dash}
        transform="rotate(-90 44 44)"
        style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(.22,.68,0,1.2)' }}
      />
      <text x="44" y="49" textAnchor="middle"
        style={{ fontFamily: 'var(--font-h)', fontSize: 14, fontWeight: 700, fill: accent }}>
        {level}%
      </text>
    </svg>
  );
}

export default function VerifiedSkills() {
  const { ref, visible } = useInView();
  return (
    <section id="about" className="skills-section" ref={ref as React.RefObject<HTMLElement>}>
      <div className="skills-inner">

        <div className={`skills-header ${visible ? 'anim-fade-right' : 'anim-hidden'}`}>
          <h2 className="section-title">Verified <span>Skills</span></h2>
          <p className="skills-subtitle">Industry-standard certifications and accomplishments.</p>
        </div>

        <div className="skills-grid">
          {skills.map((s, i) => (
            <div key={i} data-accent={s.accent}
              className={`skill-card ${visible ? `anim-fade-up d-${(i + 1) * 100}` : 'anim-hidden'}`}>

              {/* Glow corner */}
              <div className="skill-corner" />

              {/* Top row: ring + badge */}
              <div className="skill-top">
                <Ring level={s.level} accent={s.accent} visible={visible} />
                <div className="skill-badge-wrap">
                  <span className="skill-emoji">{s.emoji}</span>
                  <span className="skill-tag" data-accent={s.accent}>{s.tag}</span>
                </div>
              </div>

              {/* Info */}
              <h3 className="skill-title">{s.title}</h3>
              <p className="skill-sub-bold">{s.sub}</p>
              <p className="skill-desc">{s.desc}</p>

              {/* Bottom bar */}
              <div className="skill-bar-wrap">
                <div className="skill-bar-track">
                  <div className="skill-bar-fill"
                    style={{ width: visible ? `${s.level}%` : '0%',
                      background: s.accent,
                      transition: `width 1.2s cubic-bezier(.22,.68,0,1.2) ${i * 0.1}s` }} />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
