export type VehicleType = 'regular' | 'suv';

export interface ServicePackage {
  id: string;
  name: {
    en: string;
    fr: string;
  };
  targetVehicle: {
    en: string;
    fr: string;
  };
  originalPriceCAD: number;
  salePriceCAD: number;
  popular?: boolean;
  description: {
    en: string;
    fr: string;
  };
  features: {
    en: string[];
    fr: string[];
  };
}

export interface IncludedItem {
  id: string;
  title: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
  iconName: string;
}

export interface ServiceArea {
  name: string;
  postalPrefixes: string[];
  region: 'Montreal Central' | 'West Island' | 'East End' | 'North Shore / Laval' | 'South Shore';
}

export interface Testimonial {
  id: string;
  name: string;
  neighborhood: string;
  carModel: string;
  rating: number;
  comment: {
    en: string;
    fr: string;
  };
  date: string;
}

export interface BookingFormData {
  vehicleType: VehicleType;
  makeModel: string;
  color: string;
  licensePlate?: string;
  fullName: string;
  email: string;
  phone: string;
  streetAddress: string;
  neighborhood: string;
  postalCode: string;
  parkingType: 'driveway' | 'street' | 'garage';
  preferredDate: string;
  preferredTimeSlot: 'morning' | 'afternoon' | 'evening';
  specialNotes?: string;
  addOns: string[];
}

export type Language = 'en' | 'fr';
