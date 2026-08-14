import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, CheckCircle2, RotateCcw } from 'lucide-react';

export const SatisfactionGuarantee: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="bg-white border border-beige-200 rounded-2xl p-6 sm:p-8 text-slate-900 shadow-sm relative overflow-hidden">
      {/* Subtle shine background */}
      <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-aston-700/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-aston-800 border border-camel-400/40 flex items-center justify-center text-camel-300 flex-shrink-0 shadow-md">
          <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12" />
        </div>

        <div className="space-y-3 text-center md:text-left flex-grow">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-beige-100 border border-camel-300 text-aston-900 text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5 text-camel-600" />
            <span>{language === 'en' ? 'Risk-Free Service Pledge' : 'Engagement Sans Risque'}</span>
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-extrabold text-aston-950">
            {t('guarantee.title')}
          </h3>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl font-medium">
            {t('guarantee.desc')}
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs font-bold text-aston-800">
            <span className="flex items-center gap-1.5">
              <RotateCcw className="w-4 h-4 text-camel-600" />
              {language === 'en' ? 'Free Instant Spot Re-Wash' : 'Relavage Immédiat Gratuit'}
            </span>
            <span className="text-beige-300">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-camel-600" />
              {language === 'en' ? 'Full Money-Back Guarantee' : 'Remboursement Intégral 100%'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
