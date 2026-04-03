import s7Img from '../assets/s7.png';
import './components.css';
import { useInView } from '../hooks/useInView';

export default function Hero() {
  const { ref, visible } = useInView(0.05);
  return (
    <section className="hero-section" ref={ref as React.RefObject<HTMLElement>}>

      {/* Full-width photo banner */}
      <div className={`hero-banner ${visible ? 'anim-scale-in' : 'anim-hidden'}`}>
        <img src={s7Img} alt="Sandesh Nawarathna" className="hero-banner-img" />
        <div className="hero-banner-overlay" />
      </div>

      {/* Two-column content below banner */}
      <div className="hero-inner">

        {/* Left — name */}
        <div className="hero-left">
          <p className={`hero-label ${visible ? 'anim-fade-up d-100' : 'anim-hidden'}`}>The Synthetic Architect</p>
          <div className={`hero-name-wrap ${visible ? 'anim-fade-up d-200' : 'anim-hidden'}`}>
            <h1 className="hero-name white">Sandesh</h1>
            <h1 className="hero-name cyan">Nawarathna</h1>
          </div>
        </div>

        {/* Right — subtitle, quote, buttons */}
        <div className="hero-right">
          <p className={`hero-subtitle ${visible ? 'anim-fade-up d-300' : 'anim-hidden'}`}>
            Computer Science Undergraduate | Full-Stack Developer | Data Mining Enthusiast
          </p>
          <div className={`hero-quote ${visible ? 'anim-fade-up d-400' : 'anim-hidden'}`}>
            <p>"Passionate Computer Science student with a focus on building scalable full-stack applications and uncovering insights through data mining. Dedicated to precision and digital craftsmanship."</p>
          </div>
          <div className={`hero-btns ${visible ? 'anim-fade-up d-500' : 'anim-hidden'}`}>
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="/cv.pdf" download className="btn-outline">Download CV</a>
          </div>
        </div>

      </div>
    </section>
  );
}
