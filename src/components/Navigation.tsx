import { useState } from 'react';
import './components.css';

const links = [
  { label: 'CERTIFICATE',     href: '#about' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'PROJECTS',  href: '#projects' },
  { label: 'SKILLS',    href: '#skills' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="nav-logo">Sandesh <span>Nawarathna</span></a>
        <div className="nav-links">
          {links.map(l => <a key={l.label} href={l.href} className="nav-link">{l.label}</a>)}
          <a href="#contact" className="nav-cta">CONTACT</a>
        </div>
        <button className="nav-toggle" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
      </div>
      {open && (
        <div className="nav-mobile">
          {links.map(l => <a key={l.label} href={l.href} className="nav-link" onClick={() => setOpen(false)}>{l.label}</a>)}
          <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>CONTACT</a>
        </div>
      )}
    </nav>
  );
}
