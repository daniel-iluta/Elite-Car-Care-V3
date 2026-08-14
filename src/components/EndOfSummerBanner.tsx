import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EndOfSummerBanner: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-aston-950 text-white border-b border-camel-500/40 px-4 py-2.5 text-xs sm:text-sm shadow-sm relative z-50 overflow-hidden font-medium">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-ferrari-600 text-white font-bold text-xs uppercase tracking-wider shadow-xs">
            <Tag className="w-3 h-3 text-white" />
            {language === 'en' ? 'End of Summer Offer' : 'Offre Fin d’Été'}
          </span>
          <span className="font-semibold text-beige-100">
            {language === 'en' 
              ? 'Regular Cars $20 CAD (was $30) • SUVs $25 CAD (was $35) — Save $10 on Exterior Wash!' 
              : 'Voitures $20 CAD (au lieu de $30) • VUS $25 CAD (au lieu de $35) — Économisez 10$ !'}
          </span>
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 text-camel-300 hover:text-camel-200 font-bold underline underline-offset-4 transition-colors hover:scale-105 transform duration-150 whitespace-nowrap cursor-pointer"
        >
          <span>{language === 'en' ? 'Claim Promo Rate' : 'Obtenir ce Tarif'}</span>
          <ArrowRight className="w-3.5 h-3.5 text-camel-300" />
        </Link>
      </div>
    </div>
  );
};
