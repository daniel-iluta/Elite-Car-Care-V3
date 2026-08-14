import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { END_OF_SUMMER_PACKAGES, INCLUDED_WITH_EVERY_WASH } from '../data/packages';
import { TESTIMONIALS } from '../data/serviceAreas';
import { QuickEstimator } from '../components/QuickEstimator';
import { SatisfactionGuarantee } from '../components/SatisfactionGuarantee';
import { Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Star, Droplets, Disc, Sun, Phone, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import webandiCleaningImg from '../assets/images/webandi-cleaning-4993979_1920.jpg';
import hutchrockCarImg from '../assets/images/hutchrock-automobile-2875252.jpg';

export const HomePage: React.FC = () => {
  const { language, t } = useLanguage();

  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-aston-800" />;
      case 'Disc':
        return <Disc className="w-6 h-6 text-aston-800" />;
      case 'Sun':
        return <Sun className="w-6 h-6 text-aston-800" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-aston-800" />;
      default:
        return <Droplets className="w-6 h-6 text-aston-800" />;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] sm:min-h-[660px] flex items-center justify-center overflow-hidden bg-aston-950 text-white border-b border-beige-200">
        {/* Uploaded Background Image with dark vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src={webandiCleaningImg}
            alt="Elite Car Care mobile car wash and detailing"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 transform hover:scale-100 transition-transform duration-1000 opacity-30"
          />
          {/* Multi-stage gradient fade overlay for ultra-clean readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-aston-950 via-aston-950/80 to-aston-900/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center space-y-8">
          
          {/* Offer Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ferrari-500/20 border border-ferrari-400/40 text-ferrari-200 text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md shadow-sm">
            <Tag className="w-4 h-4 text-ferrari-400" />
            <span>{t('hero.badge')}</span>
          </div>

          {/* Main Hero Headlines */}
          <div className="space-y-4 max-w-5xl mx-auto">
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] text-transparent bg-clip-text bg-gradient-to-r from-camel-300 via-beige-100 to-camel-200">
              {t('hero.title1')}
            </h1>

            <p className="text-base sm:text-lg text-beige-200/90 max-w-2xl mx-auto leading-relaxed font-medium pt-1">
              {t('hero.subtitle')}
            </p>
          </div>



          {/* Hero CTAs */}
          <div className="flex items-center justify-center pt-2">
            <Link
              to="/services"
              className="px-8 py-4 rounded-lg bg-aston-700 hover:bg-aston-600 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-aston-950/50 transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 border border-camel-400/40 cursor-pointer"
            >
              <span>{t('hero.ctaServices')}</span>
              <ArrowRight className="w-4 h-4 text-camel-300" />
            </Link>
          </div>

          {/* Value Props Bullet Bar */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-beige-200 font-semibold">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-camel-400" />
              {t('hero.noWaterNeeded')}
            </span>
            <span className="text-aston-800">•</span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-camel-400" />
              {t('hero.guaranteeBadge')}
            </span>
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Quick Estimator & Booking Teaser */}
        <section>
          <QuickEstimator />
        </section>

        {/* Included With Every Wash */}
        <section className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-camel-700 font-bold text-xs uppercase tracking-widest block">
              {language === 'en' ? 'Unbeatable Standards' : 'Qualité Sans Compromis'}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-aston-950">
              {t('included.title')}
            </h2>
            <p className="text-slate-600 text-base font-medium">
              {t('included.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INCLUDED_WITH_EVERY_WASH.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-beige-200 p-6 rounded-2xl hover:border-camel-400 transition-all space-y-3 shadow-xs group"
              >
                <div className="w-12 h-12 rounded-xl bg-beige-100 border border-beige-300 flex items-center justify-center group-hover:bg-beige-200 transition-colors">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="font-display font-extrabold text-lg text-aston-950">
                  {item.title[language]}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {item.description[language]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Satisfaction Guarantee Banner */}
        <section>
          <SatisfactionGuarantee />
        </section>

        {/* How It Works */}
        <section className="bg-white border border-beige-200 rounded-2xl p-8 sm:p-12 space-y-10 shadow-sm text-slate-900">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-aston-950">
              {t('how.title')}
            </h2>
            <p className="text-slate-600 text-base font-medium">
              {t('how.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-aston-800 text-camel-300 border border-camel-400/40 font-extrabold flex items-center justify-center text-lg">
                1
              </div>
              <h3 className="font-display font-bold text-lg text-aston-950">{t('how.step1.title')}</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">{t('how.step1.desc')}</p>
            </div>

            <div className="space-y-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-aston-800 text-camel-300 border border-camel-400/40 font-extrabold flex items-center justify-center text-lg">
                2
              </div>
              <h3 className="font-display font-bold text-lg text-aston-950">{t('how.step2.title')}</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">{t('how.step2.desc')}</p>
            </div>

            <div className="space-y-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-aston-800 text-camel-300 border border-camel-400/40 font-extrabold flex items-center justify-center text-lg">
                3
              </div>
              <h3 className="font-display font-bold text-lg text-aston-950">{t('how.step3.title')}</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">{t('how.step3.desc')}</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-camel-700 font-bold text-xs uppercase tracking-wider block">
              {language === 'en' ? 'Verified Customer Reviews' : 'Avis Clients Vérifiés'}
            </span>
            <h2 className="font-display text-3xl font-extrabold text-aston-950">
              {language === 'en' ? 'Loved by Drivers Across Montreal' : 'Apprécié des Conducteurs à Montréal'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((tItem) => (
              <div
                key={tItem.id}
                className="bg-white border border-beige-200 p-6 rounded-2xl space-y-4 shadow-xs flex flex-col justify-between text-slate-900"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-camel-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-camel-500" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-400">{tItem.date}</span>
                  </div>

                  <p className="text-sm text-slate-700 italic leading-relaxed font-medium">
                    "{tItem.comment[language]}"
                  </p>
                </div>

                <div className="pt-3 border-t border-beige-200 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-aston-950 block">{tItem.name}</span>
                    <span className="text-camel-700 font-semibold">{tItem.neighborhood}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-beige-100 border border-beige-300 text-aston-900 font-mono text-[11px] font-bold">
                    {tItem.carModel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="relative border border-camel-500/40 rounded-2xl p-8 sm:p-14 text-center text-white space-y-6 shadow-xl overflow-hidden bg-aston-950">
          {/* Background image overlay */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src={hutchrockCarImg}
              alt="Elite Car Care finish shine"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-aston-950 via-aston-950/90 to-aston-900/80" />
          </div>

          <div className="relative z-10 space-y-3 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
              {language === 'en' ? 'Ready to Give Your Paint a Second Life?' : 'Prêt à Redonner Éclat à Votre Peinture?'}
            </h2>
            <p className="text-beige-200 text-sm sm:text-base font-medium leading-relaxed">
              {language === 'en'
                ? 'Claim our End of Summer offer now: $15 CAD Regular Cars / $20 CAD SUVs. We come directly to your driveway!'
                : 'Profitez de l’offre de fin d’été: 15$ voitures régulières / 20$ VUS. Nous venons directement chez vous!'}
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-aston-700 hover:bg-aston-600 text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg border border-camel-400/40 cursor-pointer"
            >
              {language === 'en' ? 'Book Mobile Wash Now' : 'Réserver Votre Lavage Mobile'}
            </Link>

            <a
              href="tel:4389796121"
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-aston-900/90 border border-camel-500/40 text-beige-100 hover:text-white font-bold text-sm hover:bg-aston-900 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-camel-400" />
              <span>(438) 979-6121</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};
