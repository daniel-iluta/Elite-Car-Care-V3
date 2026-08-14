import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SatisfactionGuarantee } from '../components/SatisfactionGuarantee';
import { Phone, Mail, Clock, Sparkles, ShieldCheck, CheckCircle2, UserPlus, Calendar, Car, ArrowRight, Briefcase } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { language, t } = useLanguage();

  const isEn = language === 'en';

  const bookingSteps = [
    {
      num: '01',
      icon: Phone,
      title: isEn ? 'Contact Us Directly' : 'Contactez-nous Directement',
      desc: isEn
        ? 'Call or text us at (438) 979-6121 or send an email to iluta.daniel.5@gmail.com.'
        : 'Appelez ou envoyez un SMS au (438) 979-6121 ou écrivez à iluta.daniel.5@gmail.com.',
      action: isEn ? 'Call or Text Now' : 'Appeler ou SMS',
    },
    {
      num: '02',
      icon: Car,
      title: isEn ? 'Share Vehicle & Location' : 'Indiquez Véhicule & Adresse',
      desc: isEn
        ? 'Tell us your vehicle type (Regular Car $20 / SUV $25) and your address or neighborhood in Montreal.'
        : 'Indiquez le type de voiture (Voiture $20 / VUS $25) et votre adresse ou quartier à Montréal.',
      action: isEn ? 'Sedan, SUV, Pickup' : 'Voitures & VUS',
    },
    {
      num: '03',
      icon: Calendar,
      title: isEn ? 'Pick Date & Time Window' : 'Choisissez Date & Plage Horaire',
      desc: isEn
        ? 'Choose a convenient day and time window (Morning, Afternoon, or Evening). We confirm in minutes!'
        : 'Choisissez le jour et le créneau idéal (Matin, Après-midi, Soir). Confirmation rapide!',
      action: isEn ? 'Morning / Afternoon / Evening' : 'Matin / Après-midi',
    },
    {
      num: '04',
      icon: CheckCircle2,
      title: isEn ? 'We Wash & You Pay After' : 'Lavage sur Place & Paiement',
      desc: isEn
        ? 'Our team arrives directly at your driveway. Inspect your clean car and pay when 100% satisfied.'
        : 'Notre équipe arrive chez vous. Inspectez votre voiture propre et payez une fois 100% satisfait.',
      action: isEn ? '100% Satisfaction' : '100% Satisfait',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-slate-900">
      
      {/* Page Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-beige-100 border border-camel-300 text-aston-900 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-camel-600" />
          <span>{isEn ? 'Direct Booking & Contact' : 'Réservation Directe & Contact'}</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-black text-aston-950 tracking-tight">
          {isEn ? 'Get In Touch & Book Your Wash' : 'Contactez-nous & Réservez Votre Lavage'}
        </h1>

        <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
          {isEn
            ? 'Ready to give your paint a second life? Call or email us directly to reserve your mobile car wash anywhere in Greater Montreal!'
            : 'Prêt à redonner éclat à votre peinture? Appelez ou écrivez-nous directement pour réserver votre lavage mobile partout dans le Grand Montréal!'}
        </p>
      </div>

      {/* Primary Direct Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Phone & Text Card */}
        <div className="bg-white border-2 border-beige-200 hover:border-camel-400 p-6 rounded-2xl space-y-4 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-xl bg-beige-100 border border-camel-300 flex items-center justify-center text-aston-800">
              <Phone className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-ferrari-50 text-ferrari-700 border border-ferrari-200">
              {isEn ? 'Instant Booking' : 'Réservation Rapide'}
            </span>
          </div>

          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block">
              {isEn ? 'Call or Text Us' : 'Appel ou Textos'}
            </span>
            <a
              href="tel:4389796121"
              className="text-2xl font-black text-aston-950 hover:text-ferrari-600 transition-colors block mt-1"
            >
              (438) 979-6121
            </a>
            <p className="text-xs text-slate-600 mt-2 font-medium">
              {isEn
                ? 'Call or send an SMS with your location and preferred time slot.'
                : 'Appelez ou envoyez un SMS avec votre adresse et heure préférée.'}
            </p>
          </div>

          <div className="pt-2 flex items-center gap-2">
            <a
              href="tel:4389796121"
              className="flex-1 py-2.5 px-3 rounded-lg bg-aston-800 hover:bg-aston-900 text-white font-bold text-xs uppercase text-center transition-colors shadow-xs border border-camel-500/40"
            >
              {isEn ? 'Call Now' : 'Appeler'}
            </a>
            <a
              href="sms:4389796121"
              className="flex-1 py-2.5 px-3 rounded-lg bg-beige-100 hover:bg-beige-200 border border-camel-300 text-aston-950 font-bold text-xs uppercase text-center transition-colors"
            >
              {isEn ? 'Send SMS' : 'Envoyer SMS'}
            </a>
          </div>
        </div>

        {/* Email Direct Card */}
        <div className="bg-white border-2 border-beige-200 hover:border-camel-400 p-6 rounded-2xl space-y-4 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-xl bg-beige-100 border border-camel-300 flex items-center justify-center text-aston-800">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-beige-100 text-aston-900 border border-camel-300">
              {isEn ? 'Email Support' : 'Support Courriel'}
            </span>
          </div>

          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block">
              {isEn ? 'Email Address' : 'Adresse Courriel'}
            </span>
            <a
              href="mailto:iluta.daniel.5@gmail.com"
              className="text-lg sm:text-xl font-bold text-aston-950 hover:text-ferrari-600 transition-colors block mt-1 break-all"
            >
              iluta.daniel.5@gmail.com
            </a>
            <p className="text-xs text-slate-600 mt-2 font-medium">
              {isEn
                ? 'Send us your name, vehicle type, and preferred wash date.'
                : 'Envoyez-nous votre nom, type de véhicule et date souhaitée.'}
            </p>
          </div>

          <div className="pt-2">
            <a
              href="mailto:iluta.daniel.5@gmail.com"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-aston-800 hover:bg-aston-900 text-white font-bold text-xs uppercase transition-colors shadow-xs border border-camel-500/40"
            >
              <Mail className="w-4 h-4 text-camel-300" />
              <span>{isEn ? 'Send Email' : 'Envoyer un Courriel'}</span>
            </a>
          </div>
        </div>

        {/* Hours & Guarantee Card */}
        <div className="bg-white border border-beige-200 p-6 rounded-2xl space-y-4 shadow-sm md:col-span-2 lg:col-span-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-aston-950 font-bold border-b border-beige-200 pb-3 font-display">
              <Clock className="w-5 h-5 text-aston-800" />
              <span>{isEn ? 'Hours of Operation' : 'Heures d’Ouverture'}</span>
            </div>
            
            <div className="mt-3 text-xs text-slate-700 font-medium whitespace-pre-line leading-relaxed">
              {t('footer.hours')}
            </div>
          </div>

          <div className="pt-4 border-t border-beige-200 bg-beige-50 p-3 rounded-xl border border-beige-200">
            <div className="flex items-center gap-2 text-aston-900 font-bold text-xs">
              <ShieldCheck className="w-4 h-4 text-camel-600 shrink-0" />
              <span>{isEn ? '100% Satisfaction Guarantee' : 'Garantie Satisfaction 100%'}</span>
            </div>
            <p className="text-[11px] text-slate-600 mt-1 font-medium">
              {isEn ? 'Pay only after inspecting your shiny, spot-free car.' : 'Payez seulement après inspection de votre voiture.'}
            </p>
          </div>
        </div>

      </div>

      {/* Steps to Booking Section */}
      <section className="bg-white border border-beige-200 rounded-3xl p-8 sm:p-12 space-y-10 shadow-sm">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-beige-100 border border-camel-300 text-aston-900 text-xs font-bold uppercase">
            <Calendar className="w-3.5 h-3.5 text-camel-600" />
            <span>{isEn ? 'Simple Process' : 'Processus Simple'}</span>
          </div>
          <h2 className="font-display text-3xl font-black text-aston-950 tracking-tight">
            {isEn ? '4 Easy Steps to Booking Your Wash' : '4 Étapes Simples pour Réserver Votre Lavage'}
          </h2>
          <p className="text-slate-600 text-sm font-medium">
            {isEn
              ? 'Booking a wash takes less than 2 minutes. Here is how our mobile service works:'
              : 'La réservation prend moins de 2 minutes. Voici comment fonctionne notre service mobile:'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bookingSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative bg-beige-50 border border-beige-200 p-6 rounded-2xl space-y-4 flex flex-col justify-between hover:border-camel-400 hover:bg-beige-100/50 transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-black text-aston-800/30 group-hover:text-aston-800 transition-colors">
                      {step.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white border border-beige-200 text-aston-800 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-base text-aston-950">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-beige-200 flex items-center gap-1.5 text-[11px] font-bold text-aston-800">
                  <span>{step.action}</span>
                  <ArrowRight className="w-3 h-3 text-camel-600" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Call-to-action bar inside steps */}
        <div className="p-6 rounded-2xl bg-aston-950 border border-camel-500/40 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs text-camel-300 font-bold uppercase tracking-wider block">
              {isEn ? 'End of Summer Special' : 'Offre Spéciale Fin d’Été'}
            </span>
            <div className="text-lg font-bold text-ferrari-400">
              $20 CAD Regular Cars / $25 CAD SUVs
            </div>
          </div>

          <a
            href="tel:4389796121"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-aston-800 hover:bg-aston-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-md transition-all text-center border border-camel-400/40 cursor-pointer"
          >
            {isEn ? 'Book Now: (438) 979-6121' : 'Réserver: (438) 979-6121'}
          </a>
        </div>
      </section>

      {/* How to Join Us / Join Our Mobile Wash Team */}
      <section className="bg-aston-950 text-white border border-camel-500/40 rounded-3xl p-8 sm:p-12 space-y-8 shadow-xl relative overflow-hidden">
        {/* Background Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-aston-950 via-aston-900 to-aston-950 pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-camel-500/20 border border-camel-400/40 text-camel-200 text-xs font-bold uppercase">
            <UserPlus className="w-3.5 h-3.5 text-camel-300" />
            <span>{isEn ? 'Join Our Team' : 'Rejoignez Notre Équipe'}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
            {isEn ? 'How to Join Us & Work With Elite Car Care' : 'Comment Nous Rejoindre & Travailler Avec Nous'}
          </h2>

          <p className="text-beige-200 text-sm sm:text-base font-medium leading-relaxed">
            {isEn
              ? 'We are constantly expanding our mobile wash operations across Greater Montreal! Are you energetic, punctual, detail-oriented, and love working outdoors?'
              : 'Nous développons nos opérations de lavage mobile dans tout le Grand Montréal! Vous êtes énergique, ponctuel et aimez le travail en extérieur?'}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-aston-900/80 border border-camel-500/30 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-aston-800 border border-camel-400/40 flex items-center justify-center text-camel-300">
              <Briefcase className="w-4 h-4" />
            </div>
            <h3 className="font-display font-bold text-sm text-white">
              {isEn ? 'Great Competitive Pay' : 'Excellente Rémunération'}
            </h3>
            <p className="text-xs text-beige-300/80 leading-relaxed font-medium">
              {isEn
                ? 'Competitive hourly rates plus 100% of your customer tips.'
                : 'Taux horaires compétitifs + 100% de vos pourboires.'}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-aston-900/80 border border-camel-500/30 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-aston-800 border border-camel-400/40 flex items-center justify-center text-camel-300">
              <Clock className="w-4 h-4" />
            </div>
            <h3 className="font-display font-bold text-sm text-white">
              {isEn ? 'Flexible Schedule' : 'Horaire Flexible'}
            </h3>
            <p className="text-xs text-beige-300/80 leading-relaxed font-medium">
              {isEn
                ? 'Part-time or full-time opportunities with weekend availability.'
                : 'Opportunités à temps partiel ou plein avec horaires modulables.'}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-aston-900/80 border border-camel-500/30 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-aston-800 border border-camel-400/40 flex items-center justify-center text-camel-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="font-display font-bold text-sm text-white">
              {isEn ? 'All Supplies Provided' : 'Équipement Fourni'}
            </h3>
            <p className="text-xs text-beige-300/80 leading-relaxed font-medium">
              {isEn
                ? 'We supply all washing tools, microfibers, and soaps. Friendly, supportive team.'
                : 'Nous fournissons tous les outils et savons. Équipe dynamique et accueillante.'}
            </p>
          </div>
        </div>

        {/* Application Callout */}
        <div className="relative z-10 bg-aston-900/90 border border-camel-500/40 p-6 rounded-2xl space-y-3 text-beige-100">
          <h3 className="font-display font-bold text-white text-base">
            {isEn ? 'Ready to Apply?' : 'Prêt à Poser Votre Candidature?'}
          </h3>
          <p className="text-xs text-beige-200 leading-relaxed font-medium">
            {isEn
              ? 'Send an email to iluta.daniel.5@gmail.com or call/text us at (438) 979-6121 with your full name, phone number, location in Montreal, and availability. Previous car wash experience is a plus, but passion for clean cars is all you need!'
              : 'Envoyez un courriel à iluta.daniel.5@gmail.com ou contactez-nous par SMS/appel au (438) 979-6121 avec votre nom, numéro, quartier et disponibilités. Une expérience est un plus, mais la motivation prime!'}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:iluta.daniel.5@gmail.com?subject=Job%20Application%20-%20Elite%20Car%20Care"
              className="px-5 py-2.5 rounded-lg bg-aston-800 hover:bg-aston-700 text-white font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 border border-camel-400/40 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-camel-300" />
              <span>{isEn ? 'Apply via Email' : 'Postuler par Courriel'}</span>
            </a>
            <a
              href="tel:4389796121"
              className="px-5 py-2.5 rounded-lg bg-beige-100/10 hover:bg-beige-100/20 text-beige-100 font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 border border-camel-400/40 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-camel-300" />
              <span>(438) 979-6121</span>
            </a>
          </div>
        </div>
      </section>

      {/* Satisfaction Guarantee */}
      <SatisfactionGuarantee />

    </div>
  );
};
