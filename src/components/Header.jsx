import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Button from './Button.jsx';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/staffing', label: 'Staffing' },
  { to: '/emergency-services', label: 'Emergency' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur shadow-soft'
          : 'bg-white'
      }`}
    >
      <div className="container-section flex items-center justify-between py-4 lg:py-5">
        <Link to="/" className="flex items-center" aria-label="HealthHub home">
  <img
    src="/logo.png"
    alt="HealthHub"
    className="h-12 w-auto"
  />
</Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-primary bg-peach'
                    : 'text-dark/70 hover:text-dark hover:bg-peach/60'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+27104469854"
            className="flex items-center gap-2 text-sm font-medium text-dark/70 hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>010 446 9854</span>
          </a>
          <Button to="/contact" size="sm">
            Get in touch
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="lg:hidden p-2 rounded-lg text-dark hover:bg-peach transition-colors"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border/40 bg-white">
          <nav className="container-section py-4 flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'text-primary bg-peach'
                      : 'text-dark/80 hover:bg-peach'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-3 mt-2 border-t border-border/40">
              <Button to="/contact" className="w-full" withArrow>
                Get in touch
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
