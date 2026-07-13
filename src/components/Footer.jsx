import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

const footerNav = [
  {
    heading: 'Services',
    links: [
      { to: '/services/occupational-health-services', label: 'Occupational Health' },
      { to: '/services/executive-medical-assessments', label: 'Executive Medicals' },
      { to: '/services/mobile-medicals', label: 'Mobile Medicals' },
      { to: '/services/pre-employment-medicals', label: 'Pre-Employment' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { to: '/about', label: 'About' },
      { to: '/staffing', label: 'Staffing' },
      { to: '/emergency-services', label: 'Emergency Services' },
      { to: '/blog', label: 'Blog' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { to: '/contact', label: 'Contact' },
      { to: '/contact', label: 'Request a quote' },
      { to: '/contact', label: 'Partnerships' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-section section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6" aria-label="HealthHub home">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center font-bold text-lg">
                H
              </div>
              <span className="font-bold text-lg">
                Health<span className="text-primary">Hub</span>
              </span>
            </Link>
            <p className="text-white/70 leading-relaxed mb-6">
              Trusted occupational health, executive medicals, and emergency medical solutions for South African businesses.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/people/HealthHub-Medical-Solutions/100063585835164/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/healthhubmedicalsolutions/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {footerNav.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white font-semibold mb-5 text-base">{col.heading}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-white/70 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/70">
          <a href="tel:+27104469854" className="flex items-start gap-3 hover:text-primary transition-colors">
            <Phone className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
            <span>010 446 9854</span>
          </a>
          <a href="mailto:info@healthhms.co.za" className="flex items-start gap-3 hover:text-primary transition-colors">
            <Mail className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
            <span>info@healthhms.co.za</span>
          </a>
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
            <span>7 Quince Street, Milpark, Johannesburg</span>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} HealthHub Medical Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
