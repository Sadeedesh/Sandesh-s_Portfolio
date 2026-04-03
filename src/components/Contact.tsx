import './components.css';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const { ref, visible } = useInView();
  return (
    <section id="contact" className="contact-section" ref={ref as React.RefObject<HTMLElement>}>
      <div className="contact-inner">
        <h2 className={`contact-title ${visible ? 'anim-fade-up d-100' : 'anim-hidden'}`}>Let's <span>Connect</span></h2>
        <p className={`contact-sub ${visible ? 'anim-fade-up d-200' : 'anim-hidden'}`}>
          Ready to build the future? Whether you have a project in mind or just want to<br />
          talk tech, my inbox is always open.
        </p>
        <div className={`contact-btns ${visible ? 'anim-fade-up d-300' : 'anim-hidden'}`}>
          <a href="mailto:sandeshkavindaya490@gmail.com" className="contact-btn-primary">
            ✉ sandeshkavindaya490@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/sandesh-nawarathna/" target="_blank" rel="noopener noreferrer" className="contact-btn-outline">
            ⬡ LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}
