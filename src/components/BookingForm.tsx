import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { VehicleType, BookingFormData } from '../types';
import { END_OF_SUMMER_PACKAGES } from '../data/packages';
import { SERVICE_AREAS } from '../data/serviceAreas';
import { Car, Truck, Phone, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const BookingForm: React.FC = () => {
  const { language, t } = useLanguage();
  const location = useLocation();

  // Extract preselected state from Quick Estimator if passed
  const navState = location.state as { vehicleType?: VehicleType } | null;

  const [formData, setFormData] = useState<BookingFormData>({
    vehicleType: navState?.vehicleType || 'regular',
    makeModel: '',
    color: '',
    licensePlate: '',
    fullName: '',
    email: '',
    phone: '',
    streetAddress: '',
    neighborhood: SERVICE_AREAS[0].name,
    postalCode: '',
    parkingType: 'driveway',
    preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Tomorrow
    preferredTimeSlot: 'morning',
    specialNotes: '',
    addOns: [],
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Calculations
  const selectedPackage = END_OF_SUMMER_PACKAGES.find(
    (p) => (formData.vehicleType === 'regular' ? p.id === 'regular-car' : p.id === 'suv-pickup')
  );

  const basePrice = selectedPackage ? selectedPackage.salePriceCAD : (formData.vehicleType === 'regular' ? 15 : 20);
  const originalBasePrice = selectedPackage ? selectedPackage.originalPriceCAD : (formData.vehicleType === 'regular' ? 25 : 30);

  const totalPriceCAD = basePrice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'MTL-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setIsSubmitted(true);

    // Launch celebratory confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-white border border-beige-200 rounded-2xl p-8 sm:p-12 text-center text-slate-900 shadow-sm space-y-6 max-w-3xl mx-auto my-8">
        <div className="w-20 h-20 rounded-full bg-beige-100 border border-camel-300 text-aston-800 flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
        </div>

        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full bg-beige-100 border border-camel-300 text-aston-900 font-mono text-xs font-bold uppercase tracking-wider">
            {t('booking.refNum')}: #{bookingRef}
          </span>
          <h2 className="font-display text-3xl font-extrabold text-aston-950">
            {t('booking.successTitle')}
          </h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto">
            {t('booking.successSubtitle')}
          </p>
        </div>

        {/* Receipt card */}
        <div className="bg-beige-50 p-6 rounded-xl border border-beige-200 text-left space-y-3 text-sm">
          <div className="flex justify-between border-b border-beige-200 pb-3">
            <span className="text-slate-500">{t('booking.vehType')}:</span>
            <span className="font-bold text-aston-950 capitalize">
              {formData.vehicleType === 'regular' ? t('calc.regular') : t('calc.suv')} ({formData.makeModel || 'Vehicle'})
            </span>
          </div>

          <div className="flex justify-between border-b border-beige-200 pb-3">
            <span className="text-slate-500">Address & Neighborhood:</span>
            <span className="font-semibold text-aston-950">
              {formData.streetAddress || 'Address Provided'}, {formData.neighborhood}
            </span>
          </div>

          <div className="flex justify-between border-b border-beige-200 pb-3">
            <span className="text-slate-500">Date & Slot:</span>
            <span className="font-bold text-aston-800">
              {formData.preferredDate} ({formData.preferredTimeSlot.toUpperCase()})
            </span>
          </div>

          <div className="flex justify-between pt-2 text-base">
            <span className="font-bold text-slate-800">Total Price Due On Completion:</span>
            <span className="font-extrabold text-ferrari-600">${totalPriceCAD} CAD</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-beige-100 border border-camel-300 text-aston-900 text-xs flex items-center gap-3 text-left font-medium">
          <Sparkles className="w-5 h-5 text-camel-600 flex-shrink-0" />
          <p>{t('booking.successMsg')}</p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:4389796121"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-beige-100 hover:bg-beige-200 text-aston-950 font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 border border-camel-300 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-aston-800" />
            <span>Call Mobile Team: (438) 979-6121</span>
          </a>

          <button
            onClick={() => setIsSubmitted(false)}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-aston-800 hover:bg-aston-900 text-white font-extrabold text-xs uppercase tracking-wider transition-colors border border-camel-500/40 cursor-pointer"
          >
            Make Another Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-beige-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8 text-slate-900">
      {/* Step 1: Vehicle Selection */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-beige-200 pb-3">
          <div className="w-7 h-7 rounded-lg bg-aston-800 text-camel-300 flex items-center justify-center font-extrabold text-xs">
            1
          </div>
          <h3 className="font-display text-lg font-extrabold text-aston-950">
            {t('booking.step1')}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, vehicleType: 'regular' })}
            className={`p-4 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
              formData.vehicleType === 'regular'
                ? 'bg-beige-100/90 border-aston-700 text-aston-950 ring-2 ring-aston-700'
                : 'bg-beige-50/60 border-beige-200 text-slate-600 hover:border-camel-300'
            }`}
          >
            <Car className="w-6 h-6 text-aston-800 flex-shrink-0" />
            <div>
              <div className="font-bold text-sm text-aston-950">{t('calc.regular')}</div>
              <div className="text-xs text-ferrari-600 font-extrabold mt-0.5">$15 CAD <span className="line-through text-slate-400 text-[10px]">$25</span></div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setFormData({ ...formData, vehicleType: 'suv' })}
            className={`p-4 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
              formData.vehicleType === 'suv'
                ? 'bg-beige-100/90 border-aston-700 text-aston-950 ring-2 ring-aston-700'
                : 'bg-beige-50/60 border-beige-200 text-slate-600 hover:border-camel-300'
            }`}
          >
            <Truck className="w-6 h-6 text-aston-800 flex-shrink-0" />
            <div>
              <div className="font-bold text-sm text-aston-950">{t('calc.suv')}</div>
              <div className="text-xs text-ferrari-600 font-extrabold mt-0.5">$20 CAD <span className="line-through text-slate-400 text-[10px]">$30</span></div>
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div>
            <label className="text-xs font-bold text-aston-900 block mb-1">
              {t('booking.makeModel')} *
            </label>
            <input
              type="text"
              required
              value={formData.makeModel}
              onChange={(e) => setFormData({ ...formData, makeModel: e.target.value })}
              placeholder="e.g. Toyota Civic, Mazda CX-5"
              className="w-full px-3.5 py-2.5 rounded-xl bg-beige-50 border border-beige-300 text-slate-900 text-sm focus:outline-none focus:border-aston-700 focus:bg-white"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-aston-900 block mb-1">
              {t('booking.color')} *
            </label>
            <input
              type="text"
              required
              value={formData.color}
              onChange={(e) => setFormData({ ...formData, color: e.target.value })}
              placeholder="e.g. Silver, Black, Blue"
              className="w-full px-3.5 py-2.5 rounded-xl bg-beige-50 border border-beige-300 text-slate-900 text-sm focus:outline-none focus:border-aston-700 focus:bg-white"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-aston-900 block mb-1">
              {t('booking.plate')}
            </label>
            <input
              type="text"
              value={formData.licensePlate}
              onChange={(e) => setFormData({ ...formData, licensePlate: e.target.value })}
              placeholder="e.g. ABC 123"
              className="w-full px-3.5 py-2.5 rounded-xl bg-beige-50 border border-beige-300 text-slate-900 text-sm focus:outline-none focus:border-aston-700 focus:bg-white"
            />
          </div>
        </div>
      </div>

      {/* Step 2: Location & Area */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-beige-200 pb-3">
          <div className="w-7 h-7 rounded-lg bg-aston-800 text-camel-300 flex items-center justify-center font-extrabold text-xs">
            2
          </div>
          <h3 className="font-display text-lg font-extrabold text-aston-950">
            {t('booking.step2')}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="text-xs font-bold text-aston-900 block mb-1">
              {t('booking.address')} *
            </label>
            <input
              type="text"
              required
              value={formData.streetAddress}
              onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
              placeholder="e.g. 4520 Avenue du Mont-Royal E or 100 Sherbrooke St W"
              className="w-full px-3.5 py-2.5 rounded-xl bg-beige-50 border border-beige-300 text-slate-900 text-sm focus:outline-none focus:border-aston-700 focus:bg-white"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-aston-900 block mb-1">
              {t('booking.neighborhood')} *
            </label>
            <select
              value={formData.neighborhood}
              onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-beige-50 border border-beige-300 text-slate-900 text-sm focus:outline-none focus:border-aston-700 focus:bg-white"
            >
              {SERVICE_AREAS.map((area) => (
                <option key={area.name} value={area.name}>
                  {area.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-aston-900 block mb-1">
              {t('booking.postal')} *
            </label>
            <input
              type="text"
              required
              value={formData.postalCode}
              onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
              placeholder="e.g. H2W 1Y3"
              className="w-full px-3.5 py-2.5 rounded-xl bg-beige-50 border border-beige-300 text-slate-900 text-sm focus:outline-none focus:border-aston-700 focus:bg-white"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-aston-900 block mb-1">
            {t('booking.parking')} *
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'driveway', label: t('booking.driveway') },
              { id: 'street', label: t('booking.street') },
              { id: 'garage', label: t('booking.garage') },
            ].map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setFormData({ ...formData, parkingType: p.id as any })}
                className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                  formData.parkingType === p.id
                    ? 'bg-beige-100 border-aston-700 text-aston-950 font-extrabold ring-1 ring-aston-700'
                    : 'bg-beige-50 border-beige-200 text-slate-600 hover:border-camel-300'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Step 3: Date & Time */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-beige-200 pb-3">
          <div className="w-7 h-7 rounded-lg bg-aston-800 text-camel-300 flex items-center justify-center font-extrabold text-xs">
            3
          </div>
          <h3 className="font-display text-lg font-extrabold text-aston-950">
            {t('booking.step3')}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-aston-900 block mb-1">
              {t('booking.date')} *
            </label>
            <input
              type="date"
              required
              min={new Date().toISOString().split('T')[0]}
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-beige-50 border border-beige-300 text-slate-900 text-sm focus:outline-none focus:border-aston-700 focus:bg-white"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-aston-900 block mb-1">
              {t('booking.timeSlot')} *
            </label>
            <select
              value={formData.preferredTimeSlot}
              onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value as any })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-beige-50 border border-beige-300 text-slate-900 text-sm focus:outline-none focus:border-aston-700 focus:bg-white"
            >
              <option value="morning">{t('booking.morning')}</option>
              <option value="afternoon">{t('booking.afternoon')}</option>
              <option value="evening">{t('booking.evening')}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Step 4: Contact Info */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-beige-200 pb-3">
          <div className="w-7 h-7 rounded-lg bg-aston-800 text-camel-300 flex items-center justify-center font-extrabold text-xs">
            4
          </div>
          <h3 className="font-display text-lg font-extrabold text-aston-950">
            {t('booking.step4')}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="text-xs font-bold text-aston-900 block mb-1">
              {t('booking.name')} *
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Alex Tremblay"
              className="w-full px-3.5 py-2.5 rounded-xl bg-beige-50 border border-beige-300 text-slate-900 text-sm focus:outline-none focus:border-aston-700 focus:bg-white"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-aston-900 block mb-1">
              {t('booking.email')} *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="alex@example.com"
              className="w-full px-3.5 py-2.5 rounded-xl bg-beige-50 border border-beige-300 text-slate-900 text-sm focus:outline-none focus:border-aston-700 focus:bg-white"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-aston-900 block mb-1">
              {t('booking.phone')} *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="(514) 000-0000"
              className="w-full px-3.5 py-2.5 rounded-xl bg-beige-50 border border-beige-300 text-slate-900 text-sm focus:outline-none focus:border-aston-700 focus:bg-white"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-aston-900 block mb-1">
            {t('booking.notes')}
          </label>
          <textarea
            rows={2}
            value={formData.specialNotes}
            onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
            placeholder="e.g. Parked behind triplex, gate code #1234..."
            className="w-full px-3.5 py-2.5 rounded-xl bg-beige-50 border border-beige-300 text-slate-900 text-sm focus:outline-none focus:border-aston-700 focus:bg-white"
          />
        </div>
      </div>

      {/* Price Summary & Submit Button */}
      <div className="bg-beige-50 p-6 rounded-xl border border-beige-200 space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-beige-200 pb-4">
          <div className="text-xs text-slate-600 space-y-1">
            <div>
              • {t('booking.basePrice')}: <span className="font-extrabold text-aston-900">${basePrice} CAD</span> (Save ${originalBasePrice - basePrice})
            </div>
            <div className="text-[11px] text-slate-500 font-medium">
              *Exterior hand wash + rims/tires + windows + wax seal included. Pay on completion.
            </div>
          </div>

          <div className="text-right">
            <span className="text-xs text-slate-500 block font-semibold">{t('booking.totalDue')}</span>
            <span className="text-3xl font-black text-ferrari-600">${totalPriceCAD} CAD</span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-lg bg-aston-800 hover:bg-aston-900 text-white font-extrabold text-sm uppercase tracking-wider shadow-sm transition-all transform hover:scale-101 flex items-center justify-center gap-2 border border-camel-500/40 cursor-pointer"
        >
          <Sparkles className="w-5 h-5 text-camel-300" />
          <span>{t('booking.submit')} (${totalPriceCAD} CAD)</span>
        </button>
      </div>
    </form>
  );
};
