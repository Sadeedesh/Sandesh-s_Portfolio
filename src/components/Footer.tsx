import './components.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">© 2024 Sandesh Nawarathna. Built with Precision.</p>
        <div className="footer-links">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          <a href="mailto:sandeshnawarathna430@gmail.com" className="footer-link">Email</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
