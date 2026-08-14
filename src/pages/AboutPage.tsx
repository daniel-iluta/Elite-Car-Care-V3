import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SatisfactionGuarantee } from '../components/SatisfactionGuarantee';
import { Sparkles, Droplet, Zap, Users, CheckCircle2 } from 'lucide-react';
import carDetailShineImg from '../assets/images/car_detail_shine_1786158813963.jpg';

export const AboutPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-slate-900">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-beige-100 border border-camel-300 text-aston-900 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-camel-600" />
          <span>{t('about.badge')}</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-black text-aston-950 tracking-tight">
          {t('about.title')}
        </h1>

        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
          {language === 'en'
            ? 'Friendly, honest, professional mobile hand car wash. We bring the wash right to your front door without high prices or corporate franchise fluff.'
            : 'Un service de lavage mobile sympathique, honnête et professionnel. Nous apportons le lavage à votre porte sans tarifs excessifs.'}
        </p>
      </div>

      {/* Main Story Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Story Text */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-aston-950">
              {t('about.storyTitle')}
            </h2>
            <div className="w-16 h-1 bg-camel-500 rounded-full" />
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            {t('about.storyP1')}
          </p>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            {t('about.storyP2')}
          </p>

          <div className="pt-2 flex flex-col gap-3">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-beige-200 shadow-xs">
              <CheckCircle2 className="w-5 h-5 text-aston-800 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-aston-950 text-sm block">
                  {language === 'en' ? 'Affordable Special Rates' : 'Tarifs Abordables et Transparents'}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {language === 'en' ? 'Fair rates ($15 / $20 CAD special) designed for everyday Montreal families and commuters.' : 'Des prix justes (spécial 15$ / 20$) conçus pour les familles et travailleurs montréalais.'}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-beige-200 shadow-xs">
              <CheckCircle2 className="w-5 h-5 text-aston-800 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-aston-950 text-sm block">
                  {language === 'en' ? 'Bilingual & Approachable Tone' : 'Service Bilingue et Chaleureux'}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {language === 'en' ? 'We speak French & English, answer calls promptly, and treat your driveway with respect.' : 'Nous parlons français et anglais, répondons rapidement et respectons votre propriété.'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Image */}
        <div className="relative rounded-2xl overflow-hidden border border-beige-200 shadow-sm">
          <img
            src={carDetailShineImg}
            alt="Pristine tire rim shine detail"
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-aston-950/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 border border-beige-200 backdrop-blur-md text-slate-900 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-aston-800 text-camel-300 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-aston-950 text-sm block">
                  {language === 'en' ? 'Every Detail Handled With Care' : 'Chaque Détail Traité Avec Soin'}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {t('nav.tagline')}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 3 Pillars of Equipment & Trust */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-beige-200 p-6 rounded-2xl space-y-3 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-beige-100 border border-camel-300 text-aston-800 flex items-center justify-center">
            <Droplet className="w-6 h-6" />
          </div>
          <h3 className="font-display font-extrabold text-lg text-aston-950">
            {t('about.whyUs1')}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            {t('about.whyUs1Desc')}
          </p>
        </div>

        <div className="bg-white border border-beige-200 p-6 rounded-2xl space-y-3 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-beige-100 border border-camel-300 text-aston-800 flex items-center justify-center">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="font-display font-extrabold text-lg text-aston-950">
            {t('about.whyUs2')}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            {t('about.whyUs2Desc')}
          </p>
        </div>

        <div className="bg-white border border-beige-200 p-6 rounded-2xl space-y-3 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-beige-100 border border-camel-300 text-aston-800 flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="font-display font-extrabold text-lg text-aston-950">
            {t('about.whyUs3')}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            {t('about.whyUs3Desc')}
          </p>
        </div>
      </div>

      {/* Satisfaction Guarantee */}
      <SatisfactionGuarantee />

    </div>
  );
};
