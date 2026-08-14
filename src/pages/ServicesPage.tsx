import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { END_OF_SUMMER_PACKAGES, INCLUDED_WITH_EVERY_WASH, FAQS } from '../data/packages';
import { SatisfactionGuarantee } from '../components/SatisfactionGuarantee';
import { Sparkles, Check, ChevronDown, ChevronUp, Tag, ShieldCheck, ArrowRight, Car, Truck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const ServicesPage: React.FC = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const handleSelectPackage = (vehicleType: 'regular' | 'suv') => {
    navigate('/contact', { state: { vehicleType } });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-slate-900">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-ferrari-50 border border-ferrari-200 text-ferrari-700 text-xs font-bold uppercase tracking-wider">
          <Tag className="w-3.5 h-3.5 text-ferrari-600" />
          <span>{t('services.title')}</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-black text-aston-950 tracking-tight">
          {t('services.subtitle')}
        </h1>

        <p className="text-slate-600 text-base sm:text-lg font-medium">
          {t('services.scopeNote')}
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {END_OF_SUMMER_PACKAGES.map((pkg) => {
          const isRegular = pkg.id === 'regular-car';
          return (
            <div
              key={pkg.id}
              className={`bg-white border rounded-2xl p-8 flex flex-col justify-between relative shadow-sm transition-all ${
                pkg.popular
                  ? 'border-aston-700 ring-2 ring-aston-700/20'
                  : 'border-beige-200 hover:border-camel-300'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-aston-800 text-camel-300 font-extrabold text-xs uppercase tracking-widest rounded-full shadow-xs border border-camel-400/40">
                  {language === 'en' ? 'Most Popular' : 'Plus Populaire'}
                </div>
              )}

              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-beige-200 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-beige-100 border border-camel-300 flex items-center justify-center text-aston-800">
                      {isRegular ? <Car className="w-6 h-6" /> : <Truck className="w-6 h-6" />}
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-extrabold text-aston-950">
                        {pkg.name[language]}
                      </h2>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {pkg.targetVehicle[language]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Price Display */}
                <div className="p-4 rounded-xl bg-beige-50 border border-beige-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-ferrari-600 uppercase font-bold block">{t('hero.badge')}</span>
                    <span className="text-xs text-slate-400 line-through font-medium">
                      ${pkg.originalPriceCAD} CAD {t('hero.was')}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-3xl font-black text-ferrari-600">
                      ${pkg.salePriceCAD} CAD
                    </span>
                    <span className="text-[11px] block text-aston-800 font-bold">
                      SAVE ${pkg.originalPriceCAD - pkg.salePriceCAD} CAD
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {pkg.description[language]}
                </p>

                {/* Features List */}
                <div className="space-y-2.5">
                  <span className="text-xs font-bold text-aston-900 uppercase tracking-wider block">
                    {language === 'en' ? 'What’s Included:' : 'Ce Qui Est Inclus:'}
                  </span>
                  <ul className="space-y-2 text-xs text-slate-600 font-medium">
                    {pkg.features[language].map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-aston-800 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => handleSelectPackage(isRegular ? 'regular' : 'suv')}
                  className="w-full py-3.5 rounded-lg bg-aston-800 hover:bg-aston-900 text-white font-extrabold text-xs uppercase tracking-wider shadow-sm transition-colors flex items-center justify-center gap-2 border border-camel-500/40 cursor-pointer"
                >
                  <span>{language === 'en' ? 'Book This Wash Package' : 'Réserver Ce Forfait'} (${pkg.salePriceCAD} CAD)</span>
                  <ArrowRight className="w-4 h-4 text-camel-300" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Checklist Feature Breakdown */}
      <div className="bg-white border border-beige-200 rounded-2xl p-8 sm:p-12 space-y-8 shadow-sm">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-aston-950">
            {t('services.compareTitle')}
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            {language === 'en'
              ? 'Every mobile wash includes our core 4-point exterior restoration checklist.'
              : 'Chaque lavage mobile inclut nos 4 étapes de restauration extérieure.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INCLUDED_WITH_EVERY_WASH.map((item) => (
            <div key={item.id} className="p-5 rounded-xl bg-beige-50 border border-beige-200 space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm text-aston-950">
                <Check className="w-4 h-4 text-aston-800 stroke-[3]" />
                <span>{item.title[language]}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {item.description[language]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Satisfaction Guarantee */}
      <SatisfactionGuarantee />

      {/* FAQs */}
      <div className="space-y-8 max-w-3xl mx-auto">
        <div className="text-center space-y-2">
          <h2 className="font-display text-2xl font-extrabold text-aston-950">
            {t('services.faqTitle')}
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            {language === 'en' ? 'Everything you need to know about our mobile service' : 'Tout ce que vous devez savoir sur notre service mobile'}
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-beige-200 rounded-xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-aston-950 hover:text-aston-800 transition-colors cursor-pointer"
                >
                  <span>{faq.question[language]}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-aston-800 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 border-t border-beige-100 leading-relaxed font-medium">
                    {faq.answer[language]}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
