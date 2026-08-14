import { ServicePackage, IncludedItem } from '../types';

export const END_OF_SUMMER_PACKAGES: ServicePackage[] = [
  {
    id: 'regular-car',
    name: {
      en: 'Regular Cars Wash',
      fr: 'Lavage Voitures Régulières'
    },
    targetVehicle: {
      en: 'Sedans, Coupes, Hatchbacks & Wagons',
      fr: 'Berlines, Coupés, Voitures à hayon'
    },
    originalPriceCAD: 30,
    salePriceCAD: 20,
    popular: true,
    description: {
      en: 'Complete mobile exterior hand wash service delivered right to your home or workplace driveway.',
      fr: 'Service complet de lavage à la main extérieur mobile livré directement à votre domicile ou bureau.'
    },
    features: {
      en: [
        'Professional scratch-free hand wash',
        'Full tire & rim deep cleaning + shine',
        'Full streak-free window cleaning (exterior)',
        'Protective wax seal for deep paint gloss',
        'Hand towel microfiber drying & mirror wiping'
      ],
      fr: [
        'Lavage à la main professionnel sans égratignure',
        'Nettoyage approfondi des pneus et jantes + brillance',
        'Nettoyage complet des vitres sans traces (extérieur)',
        'Cire de protection pour une brillance éclatante',
        'Séchage manuel à la microfibre et essuyage des rétroviseurs'
      ]
    }
  },
  {
    id: 'suv-pickup',
    name: {
      en: 'SUVs & Pickups Wash',
      fr: 'Lavage VUS & Camionnettes'
    },
    targetVehicle: {
      en: 'SUVs, Crossovers, Pickups & Minivans',
      fr: 'VUS, Crossovers, Pickups & Minivans'
    },
    originalPriceCAD: 35,
    salePriceCAD: 25,
    popular: false,
    description: {
      en: 'Specialized deep exterior care for larger vehicles, higher roofs, and heavy road grime.',
      fr: 'Soin extérieur spécialisé pour les grands véhicules, toits élevés et saleté de route accumulée.'
    },
    features: {
      en: [
        'Professional scratch-free hand wash',
        'Full tire & rim deep cleaning + shine',
        'Full streak-free window cleaning (exterior)',
        'Protective wax seal for deep paint gloss',
        'High-reach roof cleaning & wheel arch wash'
      ],
      fr: [
        'Lavage à la main professionnel sans égratignure',
        'Nettoyage approfondi des pneus et jantes + brillance',
        'Nettoyage complet des vitres sans traces (extérieur)',
        'Cire de protection pour une brillance éclatante',
        'Nettoyage du toit en hauteur et passages de roues'
      ]
    }
  }
];

export const INCLUDED_WITH_EVERY_WASH: IncludedItem[] = [
  {
    id: 'hand-wash',
    title: {
      en: 'Professional Hand Wash',
      fr: 'Lavage à la Main Professionnel'
    },
    description: {
      en: 'Gentle pH-balanced foam bath with dual-bucket microfiber wash to prevent swirls and paint scratches.',
      fr: 'Mousse douce à pH neutre avec méthode deux seaux en microfibre pour éviter les micro-rayures.'
    },
    iconName: 'Sparkles'
  },
  {
    id: 'tire-cleaning',
    title: {
      en: 'Full Tire Cleaning',
      fr: 'Nettoyage Complet des Pneus'
    },
    description: {
      en: 'Deep brake dust removal from rims, wheel arches scrubbed, and non-greasy satin tire dressing applied.',
      fr: 'Élimination de la poussière de frein sur les jantes, nettoyage des passages de roues et finition satinée.'
    },
    iconName: 'Disc'
  },
  {
    id: 'window-cleaning',
    title: {
      en: 'Full Window Cleaning',
      fr: 'Lavage des Vitres Intégral'
    },
    description: {
      en: 'Crystal clear streak-free glass treatment on windshield, side windows, and side mirrors.',
      fr: 'Traitement du verre impeccablement propre sans bavures sur le pare-brise, vitres et rétroviseurs.'
    },
    iconName: 'Sun'
  },
  {
    id: 'wax-seal',
    title: {
      en: 'Wax Seal Paint Protection',
      fr: 'Cire de Protection de Peinture'
    },
    description: {
      en: 'Premium liquid polymer wax layer applied after wash to shield paint from UV rays and water spots.',
      fr: 'Couche de cire liquide polymère haut de gamme pour protéger la peinture contre les UV et l’eau.'
    },
    iconName: 'ShieldCheck'
  }
];

export const ADD_ONS = [];

export const FAQS = [
  {
    question: {
      en: 'Do I need to supply water or electricity at my location?',
      fr: 'Dois-je fournir de l\'eau ou de l\'électricité sur place?'
    },
    answer: {
      en: 'We bring our complete wash setup to your location! We connect to standard outdoor garden hose taps and power outlets for a fast, spotless exterior wash on your driveway.',
      fr: 'Nous apportons tout notre équipement de lavage chez vous! Nous nous raccordons simplement à votre robinet d\'eau extérieur et prise standard pour un lavage rapide et impeccable.'
    }
  },
  {
    question: {
      en: 'What is included in the End of Summer Offer?',
      fr: 'Que comprend l\'Offre de Fin d\'Été?'
    },
    answer: {
      en: 'Our End of Summer special ($20 for regular cars, $25 for SUVs/pickups) includes a complete exterior hand wash, full tire & rim cleaning, full window cleaning, and a protective wax seal.',
      fr: 'Notre offre spéciale ($20 voitures régulières, $25 VUS/camionnettes) inclut le lavage extérieur à la main, le nettoyage des pneus/jantes, les vitres et la cire de protection.'
    }
  },
  {
    question: {
      en: 'How long does a wash take?',
      fr: 'Combien de temps dure un lavage?'
    },
    answer: {
      en: 'A standard exterior wash takes roughly 35 to 45 minutes depending on vehicle size and grime level. You do not need to sit outside with us—feel free to relax indoors!',
      fr: 'Un lavage extérieur prend environ 35 à 45 minutes selon la taille du véhicule. Vous pouvez rester confortablement à l\'intérieur!'
    }
  },
  {
    question: {
      en: 'What happens if it rains on my booked appointment day?',
      fr: 'Que se passe-t-il s\'il pleut le jour de mon rendez-vous?'
    },
    answer: {
      en: 'We offer a free rain rescheduling guarantee! If rain is forecast on your booked date, we will contact you to reschedule to the next clear day at no charge.',
      fr: 'Nous offrons une garantie de réenregistrement gratuit en cas de pluie! Si de la pluie est prévue, nous vous contacterons pour reporter sans frais.'
    }
  },
  {
    question: {
      en: 'What is your 100% Satisfaction Guarantee?',
      fr: 'Quelle est votre Garantie de Satisfaction 100%?'
    },
    answer: {
      en: 'If you inspect your vehicle after our wash and find any spot missed or are unhappy for any reason, we will re-wash it immediately on the spot or refund your money in full. Zero hassle.',
      fr: 'Si après le lavage vous trouvez un endroit oublié ou n\'êtes pas satisfait, nous relavons immédiatement sur place ou vous remboursons intégralement.'
    }
  }
];
