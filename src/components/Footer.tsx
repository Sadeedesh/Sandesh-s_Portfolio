import './components.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">© 2024 Sandesh Nawarathna. Built with Precision.</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/sandesh-nawarathna/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          <a href="mailto:sandeshkavindaya490@gmail.com" className="footer-link">Email</a>
          <a href="https://github.com/Sadeedesh" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
