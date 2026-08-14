import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, MapPin, Phone, Mail, Clock, Sparkles } from 'lucide-react';
import { SERVICE_AREAS } from '../data/serviceAreas';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-aston-950 text-beige-200 pt-16 pb-12 border-t border-aston-900 relative overflow-hidden">
      {/* Background glow element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-camel-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-aston-900">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block py-1 hover:opacity-90 transition-opacity">
              <Logo variant="dark" />
            </Link>

            <p className="text-sm text-camel-300 italic">
              "{t('nav.tagline')}"
            </p>

            <p className="text-xs text-beige-300/80 leading-relaxed">
              {language === 'en'
                ? 'Affordable mobile hand car wash coming straight to your home or office driveway across Montreal metro area.'
                : 'Service de lavage auto mobile abordable et professionnel directement à votre domicile ou bureau dans le grand Montréal.'}
            </p>

            {/* Satisfaction Guarantee Badge */}
            <div className="inline-flex items-center gap-2 p-3 rounded-xl bg-aston-900/90 border border-camel-500/30 text-beige-100 text-xs font-semibold">
              <ShieldCheck className="w-5 h-5 text-camel-400 flex-shrink-0" />
              <span>{t('guarantee.title')}</span>
            </div>
          </div>

          {/* Quick Links & Offer */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-camel-400" />
              <span>{language === 'en' ? 'Quick Links' : 'Navigation'}</span>
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-camel-300 transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-camel-300 transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-camel-300 transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-ferrari-400 transition-colors font-bold text-camel-300">
                  {t('nav.contact')} ($20 / $25 CAD Promo)
                </Link>
              </li>
            </ul>

            <div className="pt-2">
              <div className="p-3 rounded-xl bg-aston-900/80 border border-camel-500/30 text-xs space-y-1">
                <span className="font-bold text-camel-300 block">
                  {language === 'en' ? 'End of Summer Special:' : 'Offre Spéciale Fin d’Été:'}
                </span>
                <p className="text-beige-200">
                  • {language === 'en' ? 'Regular Cars: $20 CAD' : 'Voitures régulières: $20 CAD'}
                  <br />
                  • {language === 'en' ? 'SUVs / Pickups: $25 CAD' : 'VUS / Camionnettes: $25 CAD'}
                </p>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4 text-camel-400" />
              <span>{t('footer.coverageTitle')}</span>
            </h3>
            <ul className="space-y-1.5 text-xs text-beige-300/80">
              {SERVICE_AREAS.slice(0, 7).map((area) => (
                <li key={area.name} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-camel-500" />
                  <span>{area.name}</span>
                </li>
              ))}
              <li className="text-camel-300 pt-1 font-medium">
                <Link to="/contact" className="hover:underline">
                  + {language === 'en' ? 'Laval, South Shore & More' : 'Laval, Rive-Sud & Autres'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Phone className="w-4 h-4 text-camel-400" />
              <span>{t('footer.contactTitle')}</span>
            </h3>
            
            <div className="space-y-2.5 text-xs text-beige-200">
              <a
                href="tel:4389796121"
                className="flex items-center gap-2 hover:text-camel-300 transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 text-camel-400" />
                <span className="font-semibold text-sm text-white">(438) 979-6121</span>
              </a>

              <a
                href="mailto:iluta.daniel.5@gmail.com"
                className="flex items-center gap-2 hover:text-camel-300 transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 text-camel-400" />
                <span>iluta.daniel.5@gmail.com</span>
              </a>

              <div className="pt-2 flex items-start gap-2 text-beige-300/80">
                <Clock className="w-4 h-4 text-camel-400 flex-shrink-0 mt-0.5" />
                <div className="whitespace-pre-line leading-relaxed">
                  {t('footer.hours')}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-beige-300/60 gap-4">
          <p>© {new Date().getFullYear()} {t('footer.rights')}</p>
          <div className="flex items-center space-x-4">
            <span className="hover:text-beige-200 cursor-pointer">
              {language === 'en' ? '100% Satisfaction Guarantee' : 'Garantie Satisfaction 100%'}
            </span>
            <span>•</span>
            <span className="hover:text-beige-200 cursor-pointer">
              {language === 'en' ? 'Montreal, QC, Canada' : 'Montréal, QC, Canada'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
