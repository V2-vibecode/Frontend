import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const navLinks = [
  { name: 'Solutions', path: '/solutions' },
  { name: 'Products', path: '/products' },
  { name: 'Technology', path: '/technology' },
  { name: 'Industries', path: '/industries' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" data-testid="logo-link">
            <div className="w-10 h-10 bg-orange-500 flex items-center justify-center">
              <span className="text-white font-mono text-xs font-bold">SC</span>
            </div>
            <span className="font-heading font-bold text-xl text-white tracking-tight hidden sm:block">
              SKYCLEAN
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-${link.name.toLowerCase()}`}
                className={`font-mono text-xs uppercase tracking-wider transition-colors ${
                  location.pathname === link.path
                    ? 'text-orange-500'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button 
                data-testid="header-cta"
                className="bg-orange-500 text-white hover:bg-orange-600 rounded-none px-6 py-3 font-mono text-xs uppercase tracking-wider"
              >
                Get Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
            data-testid="mobile-menu-btn"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-zinc-900 border-b border-zinc-800"
          >
            <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-nav-${link.name.toLowerCase()}`}
                  className={`font-mono text-sm uppercase tracking-wider py-2 flex items-center justify-between ${
                    location.pathname === link.path
                      ? 'text-orange-500'
                      : 'text-zinc-400'
                  }`}
                >
                  {link.name}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              ))}
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button 
                  data-testid="mobile-cta"
                  className="w-full mt-4 bg-orange-500 text-white hover:bg-orange-600 rounded-none px-6 py-4 font-mono text-xs uppercase tracking-wider"
                >
                  Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-500 flex items-center justify-center">
                <span className="text-white font-mono text-xs font-bold">SC</span>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                SKYCLEAN
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              Engineering the future of autonomous aerial systems for industrial excellence.
            </p>
            <div className="flex items-center gap-2">
              <div className="status-dot"></div>
              <span className="font-mono text-xs text-zinc-600 uppercase tracking-wider">
                Systems Online
              </span>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-600 mb-6">
              Solutions
            </h4>
            <ul className="space-y-3">
              {['Industrial Inspection', 'Mapping & Surveying', 'Custom Integration', 'Data Analytics'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/solutions" 
                    className="text-zinc-500 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-600 mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'About', path: '/about' },
                { name: 'Technology', path: '/technology' },
                { name: 'Industries', path: '/industries' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-zinc-500 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-600 mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-orange-500 mt-1" />
                <span className="text-zinc-500 text-sm">clementvictor235@icloud.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-orange-500 mt-1" />
                <span className="text-zinc-500 text-sm">+49 152 0732 1320</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-orange-500 mt-1" />
                <span className="text-zinc-500 text-sm">
                  Gotenstraße 16<br />
                  10829 Berlin, Germany
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-zinc-600 uppercase tracking-wider">
            © {currentYear} Skyclean Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="#" className="font-mono text-xs text-zinc-600 hover:text-white uppercase tracking-wider transition-colors">
              Privacy
            </Link>
            <Link to="#" className="font-mono text-xs text-zinc-600 hover:text-white uppercase tracking-wider transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
