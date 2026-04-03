import './components.css';
import { useInView } from '../hooks/useInView';
import { useEffect, useRef } from 'react';
import certHackerGo from '../assets/cert-hackerrank-go.png';
import certHackerPY from '../assets/hackerrank-py.png';
import certWeb      from '../assets/cert-webdesign.png';
import certgithubAD     from '../assets/Advanced.png';
import certgithubIN     from '../assets/Intermediate.png';
import certgithubBG     from '../assets/Beginner.png';
import certMSPro     from '../assets/MSPro.png';
import certUORRo     from '../assets/Sasindu Sandesh.png';
import certIeee     from '../assets/IEEE.png';
import certCoursera_py     from '../assets/Coursera_py.png';


const skills = [
  {
    title: 'HACKERRANK',       sub: 'Go',         level: 100,
    accent: '#10b981', tag: 'INTERNATIONAL', desc: 'Certified Go developer with strong algorithmic foundations.',
    img: certHackerGo,
  },
  {
    title: 'HACKERRANK',       sub: 'Python',                  level: 100,
    accent: '#3b82f6', tag: 'CERTIFIED',     desc: 'Certified Python developer with strong algorithmic foundations.',
    img: certHackerPY,
  },
  {
    title: 'Web Design for Beginners Program',       sub: 'Institute of Technology University of Moratuwa',           level: 100,
    accent: '#a855f7', tag: 'ADVANCED',      desc: 'Advanced responsive UI/UX design with modern CSS techniques.',
    img: certWeb,
  },
  {
    title: 'IEEE Computer Society - VIT', sub: 'Excited to have participated in CodeRally 6.0', level: 100,
    accent: '#f97316', tag: 'EXPERT',        desc: 'Excited to have participated in CodeRally 6.0* — organized by the IEEE Computer Society Student Branch Chapter of IIT.',
    img: certIeee,
  },
  {
    title: 'GitHub', sub: 'Level Up My Coding Game: GitHub Advance Badge', level: 100,
    accent: '#a855f7', tag: 'EXPERT',        desc: 'Proud to share that I have successfully earned the Advanced Badge in GitHub Actions Learning after completing all three learning stages on GitHub.',
    img: certgithubAD,
  },
  {
    title: 'GitHub', sub: 'Level Up My Coding Game: GitHub Intermediate Badge', level: 100,
    accent: '#f97316', tag: 'EXPERT',        desc: ' Proud to share that Nisal Gunawardhana has earned the Intermediate Badge in GitHub Actions learning!I successfully completed the GitHub Actions Learning Task on GitHub and gained practical knowledge of workflow automation, CI/CD pipelines, and repository event management. This achievement marks an important step in improving my DevOps and automation skills.Excited to continue learning, building, and exploring more advanced automation concepts!',
    img: certgithubIN,
  },
  {
    title: 'GitHub', sub: 'Level Up My Coding Game: GitHub Beginner Badge', level: 100,
    accent: '#10b981', tag: 'EXPERT',        desc: 'Attended "Getting Started with GitHub & Open Source Projects" by Mr. Nisal Gunawardhana, learning Git, GitHub workflows, and open source collaboration.successfully completed the GitHub for task!...🏅 I’m now able to claim my completion badge here...',
    img: certgithubBG,
  },
  {
    title: 'Microsoft Learning', sub: 'Github & open-source Projects session at  University of Ruhuna', level: 100,
    accent: '#a855f7', tag: 'EXPERT',        desc: ' Glad to have completed the Microsoft Learn Student Ambassador s session on GitHub and Open Source Projects, held at the University of Ruhuna.This session helped me gain a better understanding of GitHub, open-source collaboration, and how these tools are used in real-world development.Grateful to Nisal Gunawardhana for sharing valuable knowledge and insights.',
    img: certMSPro,
  },
  {
    title: 'University of Ruhuna', sub: 'Rotaract Club of University of Ruhuna', level: 100,
    accent: '#f97316', tag: 'EXPERT',        desc: 'Participated in a Suicide Prevention Awareness Webinar led by Dr. N. Kumaranayake, gaining valuable insights into mental health challenges, compassion-driven support, and fostering hope and healing within communities.',
    img: certUORRo,
  },
  {
    title: 'Coursera ', sub: 'Python', level: 100,
    accent: '#a855f7', tag: 'EXPERT',        desc: 'Certified Python developer with strong coursera courses.',
    img: certCoursera_py,
  },
];

function Ring({ level, accent, visible }: { level: number; accent: string; visible: boolean }) {
  const r = 36;
  const circ = 2 * Math.PI * r;
  const dash = visible ? circ * (1 - level / 100) : circ;
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" className="skill-ring-svg">
      <circle cx="44" cy="44" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
      <circle cx="44" cy="44" r={r} fill="none" stroke={accent} strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={dash}
        transform="rotate(-90 44 44)"
        className="skill-ring-progress"
      />
      <text x="44" y="49" textAnchor="middle" className="skill-ring-text" fill={accent}>
        {level}%
      </text>
    </svg>
  );
}

export default function VerifiedSkills() {
  const { ref, visible } = useInView();
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    barRefs.current.forEach((bar, i) => {
      if (!bar) return;
      bar.style.width = visible ? `${skills[i].level}%` : '0%';
    });
  }, [visible]);
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

              <div className="skill-corner" />

              {/* Certificate image */}
              <div className="skill-cert-img">
                <img src={s.img} alt={`${s.title} certificate`} />
                <div className="skill-cert-overlay" />
              </div>

              {/* Top row: ring + badge */}
              <div className="skill-top">
                <Ring level={s.level} accent={s.accent} visible={visible} />
                <div className="skill-badge-wrap">
                  <span className="skill-tag" data-accent={s.accent}>{s.tag}</span>
                </div>
              </div>

              <h3 className="skill-title">{s.title}</h3>
              <p className="skill-sub-bold">{s.sub}</p>
              <p className="skill-desc">{s.desc}</p>

              <div className="skill-bar-wrap">
                <div className="skill-bar-track">
                  <div className="skill-bar-fill"
                    ref={el => { barRefs.current[i] = el; }}
                    data-delay={i} />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
