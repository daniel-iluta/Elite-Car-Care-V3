import { ServiceArea, Testimonial } from '../types';

export const SERVICE_AREAS: ServiceArea[] = [
  {
    name: 'Plateau-Mont-Royal & Mile End',
    postalPrefixes: ['H2W', 'H2T', 'H2J', 'H2X', 'H2V'],
    region: 'Montreal Central'
  },
  {
    name: 'Downtown & Old Montreal',
    postalPrefixes: ['H3B', 'H3A', 'H3G', 'H3H', 'H2Y', 'H2Z'],
    region: 'Montreal Central'
  },
  {
    name: 'Notre-Dame-de-Grâce (NDG) & Côte-des-Neiges',
    postalPrefixes: ['H4A', 'H3X', 'H3W', 'H3T'],
    region: 'Montreal Central'
  },
  {
    name: 'Rosemont-La Petite-Patrie & Villeray',
    postalPrefixes: ['H1Y', 'H1S', 'H2R', 'H2E', 'H2P'],
    region: 'Montreal Central'
  },
  {
    name: 'West Island (Pointe-Claire, DDO, Kirkland, Beaconsfield)',
    postalPrefixes: ['H9R', 'H9B', 'H9J', 'H9W', 'H9H', 'H9A', 'H9S', 'H9P'],
    region: 'West Island'
  },
  {
    name: 'Outremont & Westmount',
    postalPrefixes: ['H2V', 'H3Y', 'H3Z'],
    region: 'Montreal Central'
  },
  {
    name: 'Verdun, LaSalle & Sud-Ouest',
    postalPrefixes: ['H4G', 'H4H', 'H8N', 'H4E', 'H3K'],
    region: 'Montreal Central'
  },
  {
    name: 'Laval (Chomedey, Sainte-Dorothée, Laval-des-Rapides)',
    postalPrefixes: ['H7T', 'H7W', 'H7V', 'H7N', 'H7X', 'H7P'],
    region: 'North Shore / Laval'
  },
  {
    name: 'South Shore (Longueuil, Saint-Lambert, Brossard)',
    postalPrefixes: ['J4P', 'J4S', 'J4W', 'J4X', 'J4Z', 'J4Y'],
    region: 'South Shore'
  },
  {
    name: 'Anjou, Saint-Léonard & Mercier-Hochelaga-Maisonneuve',
    postalPrefixes: ['H1K', 'H1M', 'H1P', 'H1V', 'H1W'],
    region: 'East End'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Marc-André Tremblay',
    neighborhood: 'Plateau-Mont-Royal',
    carModel: 'Honda Civic Hatchback',
    rating: 5,
    comment: {
      en: 'The $20 End of Summer offer is an absolute steal! They arrived right outside my triplex on Avenue du Mont-Royal, brought their own water, and left my paint shining like new. Super friendly guys!',
      fr: 'L\'offre de fin d\'été à 20$ est incroyable! Ils sont arrivés devant chez moi sur le Plateau, avec leur propre eau, et la peinture brille comme neuve. Très sympathiques!'
    },
    date: '3 days ago'
  },
  {
    id: 't2',
    name: 'Sarah Jenkins',
    neighborhood: 'West Island (Pointe-Claire)',
    carModel: 'Toyota RAV4 SUV',
    rating: 5,
    comment: {
      en: 'With two kids and a busy job, I never have time for car washes. They washed my RAV4 in my driveway while I worked from home. The tire shine and wax seal look fantastic!',
      fr: 'Avec deux enfants et un travail occupé, je n\'ai jamais le temps. Ils ont lavé mon RAV4 dans mon entrée pendant que je télétravaillais. La finition des pneus et la cire sont fantastiques!'
    },
    date: '1 week ago'
  },
  {
    id: 't3',
    name: 'Jean-Luc Gagnon',
    neighborhood: 'Notre-Dame-de-Grâce (NDG)',
    carModel: 'Mazda CX-5',
    rating: 5,
    comment: {
      en: 'Honest local guys who care about their work. No scratches from gas station automated brushes anymore! Hand wash + wax protection is 100% worth it.',
      fr: 'Des gars locaux honnêtes qui ont à cœur leur travail. Fini les rayures des rouleaux automatiques de station-service! Le lavage main + cire vaut 100% le coup.'
    },
    date: '2 weeks ago'
  },
  {
    id: 't4',
    name: 'Elena Rostova',
    neighborhood: 'Downtown Montreal',
    carModel: 'Audi A4 Sedan',
    rating: 5,
    comment: {
      en: 'Booked online in under 2 minutes. They messaged 10 minutes before arrival and cleaned my car in my condo parking spot. Smooth, professional service.',
      fr: 'Réservé en ligne en moins de 2 minutes. Message 10 minutes avant l\'arrivée et voiture impeccable sur ma place de condo. Service fluide et professionnel.'
    },
    date: '3 weeks ago'
  }
];
