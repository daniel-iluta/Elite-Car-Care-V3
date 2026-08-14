import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Calendar, Menu, X, Globe, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#f2f1ef]/95 backdrop-blur-md border-b border-beige-300 text-slate-900 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22 lg:h-24 gap-4 sm:gap-6 lg:gap-8">
          
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center group shrink-0 cursor-pointer py-1 hover:opacity-90 transition-opacity">
            <Logo variant="light" imgClassName="h-12 sm:h-16 lg:h-[72px]" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-lg text-sm font-bold transition-all duration-150 cursor-pointer ${
                    active
                      ? 'bg-beige-100 text-aston-900 border border-camel-300/80 shadow-xs'
                      : 'text-slate-700 hover:text-aston-900 hover:bg-beige-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center space-x-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-beige-300 bg-beige-50 text-xs font-bold text-aston-900 hover:border-camel-400 hover:bg-beige-100 transition-colors cursor-pointer"
              title="Change Language / Changer de langue"
            >
              <Globe className="w-3.5 h-3.5 text-camel-600" />
              <span>{language === 'en' ? 'FR' : 'EN'}</span>
            </button>

            {/* Direct Phone Call */}
            <a
              href="tel:4389796121"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-aston-900 hover:text-ferrari-600 hover:bg-beige-100 transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-aston-700" />
              <span className="hidden lg:inline">(438) 979-6121</span>
            </a>

            {/* Book Now Button */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-aston-800 hover:bg-aston-900 text-white font-extrabold text-xs uppercase tracking-wider shadow-xs hover:shadow transition-all transform hover:-translate-y-0.5 border border-camel-500/40 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-camel-300" />
              <span>{t('nav.bookCta')}</span>
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={toggleLanguage}
              type="button"
              className="p-2 rounded-lg bg-beige-100 border border-beige-300 text-xs font-bold text-aston-900 cursor-pointer"
            >
              {language === 'en' ? 'FR' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-xl text-slate-800 hover:text-aston-900 hover:bg-beige-100 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-aston-800" /> : <Menu className="w-6 h-6 text-aston-900" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f2f1ef] border-b border-beige-300 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-bold ${
                    active
                      ? 'bg-beige-100 text-aston-900 border border-camel-300'
                      : 'text-slate-800 hover:bg-beige-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-beige-200 space-y-2.5">
            <a
              href="tel:4389796121"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-beige-300 bg-beige-50 text-aston-900 text-sm font-bold cursor-pointer"
            >
              <Phone className="w-4 h-4 text-aston-700" />
              <span>(438) 979-6121</span>
            </a>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-aston-800 text-white font-extrabold text-sm uppercase tracking-wider border border-camel-400/40"
            >
              <Sparkles className="w-4 h-4 text-camel-300" />
              <span>{t('nav.bookCta')} ($20 / $25 CAD)</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
