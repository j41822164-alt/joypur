import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Server } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Hosting', href: '/hosting' },
    { name: 'Domains', href: '/domains' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href.startsWith('/#')) {
      const sectionId = href.substring(2);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className={`navbar-modern ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
         <Link to="/">
           <img
             src="/logo.png"
             alt="Logo"
             style={{ maxWidth: '180px', width: '100%', height: 'auto' }}
           />
         </Link>

          <div className="hidden lg:flex items-center gap-2 nav-links-modern">
            {navLinks.map(link => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link-modern"
                  onClick={(e) => {
                    if (location.pathname === '/') {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }
                  }}
                >
                  {link.name}
                </a>
              ) : (
                <Link key={link.name} to={link.href} className="nav-link-modern">
                  {link.name}
                </Link>
              )
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="theme-toggle-modern"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button className="btn-client-area hidden md:flex">
              Client Area
            </button>
            <button
              className="lg:hidden mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu-modern">
            {navLinks.map(link => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="mobile-menu-link-modern"
                  onClick={(e) => {
                    if (location.pathname === '/') {
                      e.preventDefault();
                    }
                    handleNavClick(link.href);
                  }}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="mobile-menu-link-modern"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <button className="btn-client-area w-full mt-4">
              Client Area
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
