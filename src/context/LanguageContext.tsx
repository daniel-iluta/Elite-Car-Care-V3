import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services & Pricing',
    'nav.contact': 'Book a Wash',
    'nav.callNow': 'Call Us: (438) 979-6121',
    'nav.bookCta': 'Book Online',
    'nav.tagline': 'give your paint a second line',

    // Hero
    'hero.badge': 'END OF SUMMER SPECIAL • LIMITED TIME OFFER',
    'hero.title1': 'give your paint a second life.',
    'hero.title2': 'give your paint a second life.',
    'hero.subtitle': 'Elite Car Care brings professional, hand-detailed washes to your driveway. Quality care, honest prices.',
    'hero.ctaBook': 'Book End of Summer Wash',
    'hero.ctaServices': 'View Services & Pricing',
    'hero.regCarsOffer': 'Regular Cars',
    'hero.suvOffer': 'SUVs / Pickups',
    'hero.was': 'was',
    'hero.now': 'NOW',
    'hero.guaranteeBadge': '100% Satisfaction Money-Back Guarantee',
    'hero.noWaterNeeded': '100% Scratch-Free Hand Wash Guarantee',

    // Included section
    'included.title': 'Included With Every Wash',
    'included.subtitle': 'No hidden tricks. Every single wash comes loaded with premium exterior care to restore shine and protect your vehicle paint.',
    
    // Guarantee
    'guarantee.title': 'Our 100% Satisfaction Guarantee',
    'guarantee.desc': 'If you notice a missed spot or are not 100% delighted with your glossy finish, we will re-wash your vehicle on the spot or issue a full 100% refund. Zero risk, zero stress.',

    // How it works
    'how.title': 'How Our Mobile Service Works',
    'how.subtitle': 'Clean car without leaving your couch or desk. 3 simple steps.',
    'how.step1.title': '1. Choose Time & Place',
    'how.step1.desc': 'Select your vehicle type, date, and Montreal address in our quick online booking form.',
    'how.step2.title': '2. We Pull Up Fully Equipped',
    'how.step2.desc': 'Our wash team arrives with commercial foam cannons and soft microfiber gear.',
    'how.step3.title': '3. Enjoy Your Glossy Ride',
    'how.step3.desc': 'Inspect your pristine clean car and pay securely online or in person when completely satisfied!',

    // Calculator / Quick Estimator
    'calc.title': 'Instant Wash Price Estimator',
    'calc.subtitle': 'Select your vehicle to see your End of Summer savings',
    'calc.selectVeh': 'Select Vehicle Type:',
    'calc.regular': 'Regular Sedan / Hatchback',
    'calc.suv': 'SUV / Pickup / Minivan',
    'calc.total': 'Total Price (CAD)',
    'calc.youSave': 'You Save $10 CAD!',
    'calc.proceed': 'Proceed to Book This Special Rate',

    // About Page
    'about.badge': 'LOCAL • MOBILE • PASSIONATE',
    'about.title': 'Built for Montreal Drivers Who Love Their Cars',
    'about.storyTitle': 'Our Story: Ditching Gas Station Brushes for Personal Mobile Care',
    'about.storyP1': 'Elite Car Care was born out of a simple frustration: gas station automated car washes leave micro-swirls and scratch clear coats. Meanwhile, taking your car anywhere else consumes your precious weekend.',
    'about.storyP2': 'We built a friendly, honest, mobile alternative. We bring professional hand-washing equipment directly to neighborhoods across Montreal, Laval, and the South Shore—offering high-end exterior care at prices every family and daily commuter can afford.',
    'about.whyUs1': 'Professional Hand Wash Setup',
    'about.whyUs1Desc': 'Commercial-grade foam cannons and dual-bucket microfiber technique to protect your paint.',
    'about.whyUs2': 'Gentle Scratch-Free Microfibers',
    'about.whyUs2Desc': 'No harsh mechanical brushes. Dual-bucket hand washing protects your paint finish.',
    'about.whyUs3': 'Friendly Local Montrealers',
    'about.whyUs3Desc': 'Bilingual, punctual, respectful of your driveway, and dedicated to 100% customer satisfaction.',

    // Services Page
    'services.title': 'Packages & Special Pricing',
    'services.subtitle': 'End of Summer Special rates applied automatically. Exterior hand wash only.',
    'services.scopeNote': '*Note: Special offer pricing applies strictly to exterior hand washing, window cleaning, tire care, and wax sealant.',
    'services.compareTitle': 'Compare Package Features',
    'services.faqTitle': 'Frequently Asked Questions',

    // Contact / Booking
    'booking.title': 'Book Your Mobile Car Wash',
    'booking.subtitle': 'We bring the wash to your driveway or workplace anywhere in Montreal metro area.',
    'booking.step1': '1. Vehicle Details',
    'booking.step2': '2. Location & Area',
    'booking.step3': '3. Date & Time',
    'booking.step4': '4. Contact Details',
    'booking.vehType': 'Vehicle Category',
    'booking.makeModel': 'Make & Model (e.g. Honda Civic, Ford F-150)',
    'booking.color': 'Vehicle Color',
    'booking.plate': 'License Plate (Optional)',
    'booking.address': 'Street Address where vehicle will be parked',
    'booking.neighborhood': 'Montreal Neighborhood / Area',
    'booking.postal': 'Postal Code (e.g. H2W 1Y3)',
    'booking.parking': 'Parking Location Type',
    'booking.driveway': 'Private Driveway / Alleyway',
    'booking.street': 'Street Side Parking',
    'booking.garage': 'Open Outdoor / Condo Parking Spot',
    'booking.date': 'Preferred Date',
    'booking.timeSlot': 'Preferred Time Slot',
    'booking.morning': 'Morning (8:00 AM - 12:00 PM)',
    'booking.afternoon': 'Afternoon (12:00 PM - 4:00 PM)',
    'booking.evening': 'Evening (4:00 PM - 7:00 PM)',
    'booking.name': 'Full Name',
    'booking.email': 'Email Address',
    'booking.phone': 'Phone Number (for SMS arrival alert)',
    'booking.notes': 'Special Instructions or Gate Access Notes',
    'booking.addOnsTitle': 'Optional Add-Ons (Select any):',
    'booking.summaryTitle': 'Booking Summary',
    'booking.basePrice': 'Base Wash Price (End of Summer Rate)',
    'booking.totalDue': 'Total Due On Completion',
    'booking.submit': 'Confirm Mobile Wash Booking',
    'booking.successTitle': 'Booking Confirmed!',
    'booking.successSubtitle': 'We have received your booking and reserved your time slot.',
    'booking.refNum': 'Booking Reference',
    'booking.successMsg': 'Our mobile wash van will send you a text message 15 minutes before arriving at your location.',

    // Footer
    'footer.tagline': 'give your paint a second line',
    'footer.coverageTitle': 'Montreal Service Areas',
    'footer.contactTitle': 'Direct Contact',
    'footer.hoursTitle': 'Hours of Operation',
    'footer.hours': 'Mon - Sat: 7:30 AM - 7:00 PM\nSun: 9:00 AM - 5:00 PM',
    'footer.rights': 'All rights reserved. Montreal Mobile Car Wash / Lavage Auto Mobile Montréal.',
  },
  fr: {
    // Nav
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.services': 'Services & Tarifs',
    'nav.contact': 'Réserver un Lavage',
    'nav.callNow': 'Appelez-nous: (438) 979-6121',
    'nav.bookCta': 'Réserver en Ligne',
    'nav.tagline': 'donnez une seconde ligne à votre peinture',

    // Hero
    'hero.badge': 'OFFRE SPÉCIALE FIN D’ÉTÉ • TEMPS LIMITÉ',
    'hero.title1': 'donnez une seconde vie à votre peinture.',
    'hero.title2': 'donnez une seconde vie à votre peinture.',
    'hero.subtitle': 'Elite Car Care apporte des lavages professionnels faits à la main directement dans votre entrée. Un soin de qualité, des prix honnêtes.',
    'hero.ctaBook': 'Profiter de l’Offre Fin d’Été',
    'hero.ctaServices': 'Voir les Forfaits & Ce Qui Est Inclus',
    'hero.regCarsOffer': 'Voitures Régulières',
    'hero.suvOffer': 'VUS / Camionnettes',
    'hero.was': 'était',
    'hero.now': 'MAINTENANT',
    'hero.guaranteeBadge': 'Garantie 100% Satisfait ou Remboursé',
    'hero.noWaterNeeded': 'Garantie Lavage à la Main 100% Sans Rayure',

    // Included section
    'included.title': 'Inclus Avec Chaque Lavage',
    'included.subtitle': 'Aucun frais caché. Chaque lavage comprend des soins extérieurs complets pour redonner éclat et protéger la peinture de votre véhicule.',

    // Guarantee
    'guarantee.title': 'Notre Garantie 100% Satisfaction',
    'guarantee.desc': 'Si vous remarquez un endroit oublié ou n’êtes pas 100% ravi de la finition, nous relavons votre voiture immédiatement ou vous remboursons intégralement. Sans tracas.',

    // How it works
    'how.title': 'Comment Fonctionne Notre Service Mobile',
    'how.subtitle': 'Une voiture étincelante sans quitter votre canapé ou votre bureau. 3 étapes simples.',
    'how.step1.title': '1. Choisissez Date & Lieu',
    'how.step1.desc': 'Sélectionnez votre type de véhicule, date et adresse à Montréal dans notre formulaire de réservation rapide.',
    'how.step2.title': '2. Nous Arrivons Équipés',
    'how.step2.desc': 'Notre équipe arrive avec canons à mousse professionnels et équipements en microfibre douce.',
    'how.step3.title': '3. Admirez Votre Voiture',
    'how.step3.desc': 'Inspectez votre véhicule impeccablement propre et payez en toute sécurité en ligne ou en personne!',

    // Calculator / Quick Estimator
    'calc.title': 'Calculateur De Prix Instantané',
    'calc.subtitle': 'Sélectionnez votre véhicule pour voir vos économies de fin d’été',
    'calc.selectVeh': 'Sélectionnez le Type de Véhicule:',
    'calc.regular': 'Voiture Régulière (Berline / Hayon)',
    'calc.suv': 'VUS / Camionnette / Minivan',
    'calc.total': 'Prix Total (CAD)',
    'calc.youSave': 'Vous Économisez 10 $ CAD !',
    'calc.proceed': 'Réserver à ce Tarif Spécial',

    // About Page
    'about.badge': 'LOCAL • MOBILE • PASSIONNÉ',
    'about.title': 'Conçu pour les Conducteurs Montréalais qui Aiment Leur Voiture',
    'about.storyTitle': 'Notre Histoire: Remplacer les Rouleaux de Station-Service par un Soin Personnalisé',
    'about.storyP1': 'Elite Car Care est né d’un constat simple: les lavages automatiques en station-service créent des micro-rayures. Aller ailleurs prend votre précieux temps de fin de semaine.',
    'about.storyP2': 'Nous avons créé une alternative mobile, conviviale et honnête. Nous apportons un équipement de lavage à la main professionnel directement chez vous à Montréal, Laval et sur la Rive-Sud.',
    'about.whyUs1': 'Équipement de Lavage Professionnel',
    'about.whyUs1Desc': 'Canon à mousse et méthode deux seaux avec microfibres douces pour protéger votre peinture.',
    'about.whyUs2': 'Microfibres Anti-Rayures',
    'about.whyUs2Desc': 'Aucune brosse mécanique agressive. Le lavage à la main protège votre peinture.',
    'about.whyUs3': 'Montréalais Sympathiques',
    'about.whyUs3Desc': 'Bilingues, ponctuels, respectueux de votre entrée et dévoués à votre satisfaction.',

    // Services Page
    'services.title': 'Forfaits & Tarifs Spéciaux',
    'services.subtitle': 'Tarifs de l’Offre Spéciale Fin d’Été appliqués automatiquement. Lavage extérieur seulement.',
    'services.scopeNote': '*Remarque: L’offre spéciale s’applique strictement au lavage extérieur à la main, au nettoyage des vitres, pneus et cire de protection.',
    'services.compareTitle': 'Comparer les Inclus du Forfait',
    'services.faqTitle': 'Foire Aux Questions',

    // Contact / Booking
    'booking.title': 'Réserver Votre Lavage Mobile',
    'booking.subtitle': 'Nous apportons le lavage à votre domicile ou bureau partout dans le grand Montréal.',
    'booking.step1': '1. Détails du Véhicule',
    'booking.step2': '2. Adresse & Quartier',
    'booking.step3': '3. Date & Heure',
    'booking.step4': '4. Coordonnées',
    'booking.vehType': 'Catégorie de Véhicule',
    'booking.makeModel': 'Marque & Modèle (ex. Honda Civic, Ford F-150)',
    'booking.color': 'Couleur du Véhicule',
    'booking.plate': 'Plaque d’immatriculation (Optionnel)',
    'booking.address': 'Adresse civique où la voiture sera garée',
    'booking.neighborhood': 'Quartier / Secteur de Montréal',
    'booking.postal': 'Code Postal (ex. H2W 1Y3)',
    'booking.parking': 'Type de Stationnement',
    'booking.driveway': 'Entrée Privée / Ruelle',
    'booking.street': 'Stationnement sur Rue',
    'booking.garage': 'Stationnement Extérieur / Place de Condo',
    'booking.date': 'Date Souhaitée',
    'booking.timeSlot': 'Plage Horaire Souhaitée',
    'booking.morning': 'Matin (8h00 - 12h00)',
    'booking.afternoon': 'Après-midi (12h00 - 16h00)',
    'booking.evening': 'Soir (16h00 - 19h00)',
    'booking.name': 'Nom Complet',
    'booking.email': 'Adresse Courriel',
    'booking.phone': 'Numéro de Téléphone (pour SMS d’arrivée)',
    'booking.notes': 'Instructions Spéciales ou Code d’Accès',
    'booking.addOnsTitle': 'Options Complémentaires (Optionnel):',
    'booking.summaryTitle': 'Résumé de la Réservation',
    'booking.basePrice': 'Prix du Lavage (Tarif Fin d’Été)',
    'booking.totalDue': 'Total à Payer à la Fin',
    'booking.submit': 'Confirmer la Réservation Mobile',
    'booking.successTitle': 'Réservation Confirmée !',
    'booking.successSubtitle': 'Nous avons bien reçu votre réservation et bloqué votre plage horaire.',
    'booking.refNum': 'Référence de Réservation',
    'booking.successMsg': 'Notre camionnette vous enverra un SMS 15 minutes avant son arrivée.',

    // Footer
    'footer.tagline': 'Nous redonnons une seconde vie à votre peinture.',
    'footer.coverageTitle': 'Secteurs Desservis à Montréal',
    'footer.contactTitle': 'Contact Direct',
    'footer.hoursTitle': 'Heures d’Ouverture',
    'footer.hours': 'Lun - Sam: 7h30 - 19h00\nDim: 9h00 - 17h00',
    'footer.rights': 'All rights reserved. Elite Car Care — Service de Lavage Auto Mobile.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Check if browser default is French
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('fr')) {
      setLanguage('fr');
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'fr' : 'en'));
  };

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
