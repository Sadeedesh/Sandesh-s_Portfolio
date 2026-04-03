import './components.css';
import { useInView } from '../hooks/useInView';
import mathscapitalImg from '../assets/mathscapital.png';
import sadeedeshImg from '../assets/sadeedesh.png';
import cinnemixImg from '../assets/cinnemix.png';
import tourismImg from '../assets/tourism.png';

const projects = [
  { title: 'MathsCapital',           desc: 'A high-performance financial analysis tool designed for mathematical modelling and predictive market analytics.',   tags: ['REACT','PYTHON'],   img: mathscapitalImg },
  { title: 'Sadeedeeh Beach Resort', desc: 'A luxury hospitality management system featuring booking integrations and automated guest services.',               tags: ['FULL-STACK','NTS'], img: sadeedeshImg },
  { title: 'Cinnamix Export',        desc: 'Inventory management and export tracking platform tailored for the global spice trade market.',                     tags: ['NODE.JS','SQL'],    img: cinnemixImg },
  { title: 'Sri Lankan Tourism',        desc: 'An interactive guide exploring the rich heritage and natural beauty of Sri Lanka through digital storytelling.', tags: ['JAVASCRIPT','Html','CSS'],    img: tourismImg },
];

const research = [
  { category: 'RESEARCH FOCUS', title: 'Sentiment Analysis & Data Mining', desc: 'Advanced analytical models to extract meaningful patterns from unstructured textual data and market sentiment trends.', tags: ['MACHINE LEARNING','NLP','PYTHON'], chart: true },
  { category: '',               title: 'Sri Lankan Tourism',               desc: 'An interactive guide exploring the rich heritage and natural beauty of Sri Lanka through digital storytelling.',          tags: ['JAVASCRIPT','GSAP'],             chart: false },
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
                  <button className="proj-btn">⌥ View Code</button>
                  <button className="proj-btn">↗ Live Demo</button>
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
