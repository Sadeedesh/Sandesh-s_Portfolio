import './components.css';
import { useInView } from '../hooks/useInView';
import mathscapitalImg from '../assets/mathscapital.png';
import sadeedeshImg from '../assets/sadeedesh.png';
import cinnemixImg from '../assets/cinnemix.png';
import tourismImg from '../assets/tourism.png';

const projects = [
  { title: 'MathsCapital',           desc: 'A high-performance financial analysis tool designed for mathematical modelling and predictive market analytics.',   tags: ['React.js', 'Tailwind CSS', 'Vite'],   img: mathscapitalImg, code: 'https://github.com/Sadeedesh/Maths-Capital',           demo: 'https://maths-capital.netlify.app/' },
  { title: 'Sadeedeeh Beach Resort', desc: 'A luxury hospitality management system featuring booking integrations and automated guest services.',               tags: ['React.js', 'Tailwind CSS', 'Vite'],   img: sadeedeshImg,    code: 'https://github.com/Sadeedesh/Sadeedesh-Beach-Resort',  demo: 'https://sadeedesh-beach-resort.netlify.app/' },
  { title: 'Cinnamix Export',        desc: 'Inventory management and export tracking platform tailored for the global spice trade market.',                     tags: ['React.js', 'Tailwind CSS', 'Vite'],   img: cinnemixImg,     code: 'https://github.com/Sadeedesh/CinnemixExport',         demo: 'https://cinnamix-export.netlify.app/' },
  { title: 'Sri Lankan Tourism',     desc: 'An interactive guide exploring the rich heritage and natural beauty of Sri Lanka through digital storytelling.',    tags: ['JAVASCRIPT','Html','CSS'],             img: tourismImg,      code: 'https://github.com/Sadeedesh/Sri_Lanka_Tourism',      demo: 'https://shimmering-naiad-c62982.netlify.app/' },
];

const research = [
  { category: 'RESEARCH FOCUS', title: 'Sentiment Analysis & Data Mining', desc: 'Advanced analytical models to extract meaningful patterns from unstructured textual data and market sentiment trends.', tags: ['MACHINE LEARNING','PowerShell','JupyterNotebook','CSS','HTML','PYTHON'], chart: true },
  { category: 'MACHINE LEARNING',               title: 'Data_mining_student_performance',               desc: 'Data_mining_student_performance data preprocessing',          tags: ['JupyterNotebook','PYTHON','HTML','CSS'],             chart: true },
];

const bars = [4,7,5,9,6,8,5,7];

export default function FeaturedProjects() {
  const { ref, visible } = useInView();
  return (
    <section id="projects" className="proj-section" ref={ref as React.RefObject<HTMLElement>}>
      <div className="proj-inner">
        <div className={`proj-header ${visible ? 'anim-fade-up' : 'anim-hidden'}`}>
          <p className="proj-eyebrow">Portfolio</p>
          <h2 className="proj-title">Featured <span>Projects</span></h2>
        </div>

        <div className="proj-cards">
          {projects.map((p, i) => (
            <div key={i} className={`proj-card ${visible ? `anim-fade-up d-${(i + 2) * 100}` : 'anim-hidden'}`}>
              <div className="proj-img">
                <img src={p.img} alt={p.title} />
                <div className="proj-img-overlay" />
              </div>
              <div className="proj-body">
                <h3 className="proj-name">{p.title}</h3>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-tags">
                  {p.tags.map((t, j) => <span key={j} className="proj-tag">{t}</span>)}
                </div>
                <div className="proj-actions">
                  <a href={p.code} target="_blank" rel="noreferrer" className="proj-btn">⌥ View Code</a>
                  <a href={p.demo} target="_blank" rel="noreferrer" className="proj-btn">↗ Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="res-cards">
          {research.map((r, i) => (
            <div key={i} className={`res-card ${visible ? `anim-fade-up d-${(i + 5) * 100}` : 'anim-hidden'}`}>
              {r.chart && (
                <div className="res-chart">
                  {bars.map((h, j) => <div key={j} className="res-bar" data-h={h} />)}
                </div>
              )}
              <div className="res-body">
                {r.category && <p className="res-category">{r.category}</p>}
                <h3 className="res-title">{r.title}</h3>
                <p className="res-desc">{r.desc}</p>
                <div className="res-tags">
                  {r.tags.map((t, j) => <span key={j} className="res-tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
