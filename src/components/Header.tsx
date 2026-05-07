import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Waves, BookOpen, Building2, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/school', label: 'School', icon: GraduationCap },
  { path: '/pool', label: 'Swimming Pool', icon: Waves },
  { path: '/tuition', label: 'Tuition', icon: BookOpen },
  { path: '/pg', label: 'Residency (PG)', icon: Building2 },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'glass-dark py-3 shadow-2xl' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <span className="text-brand-blue font-serif font-bold text-xl">SA</span>
            </div>
            <h1 className="font-serif font-bold text-xl leading-tight tracking-wide text-white">
              St. Andrews <span className="text-brand-gold">Hub</span>
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2',
                    // Seedhi Baat Logic: Active = Yellow BG + White Text, Inactive = White Text Only
                    isActive 
                      ? 'bg-brand-gold text-white shadow-lg' 
                      : 'text-white hover:text-brand-gold/80'
                  )}
                >
                  {/* Smooth Transition Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-brand-gold -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {Icon && <Icon className="w-4 h-4 relative z-10" />}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 glass-dark border-t border-white/10 lg:hidden"
          >
            <div className="flex flex-col gap-2 p-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'flex items-center gap-4 px-5 py-4 rounded-xl transition-all',
                      isActive ? 'bg-brand-gold text-white font-bold' : 'text-white hover:bg-white/5'
                    )}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}