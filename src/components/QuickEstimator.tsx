import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { VehicleType } from '../types';
import { Car, Truck, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const QuickEstimator: React.FC = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const [vehicleType, setVehicleType] = useState<VehicleType>('regular');

  const baseOriginalPrice = vehicleType === 'regular' ? 30 : 35;
  const baseSalePrice = vehicleType === 'regular' ? 20 : 25;

  const handleProceed = () => {
    navigate('/contact', {
      state: {
        vehicleType,
      },
    });
  };

  return (
    <div className="bg-white border border-beige-200 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden text-slate-900">
      {/* Top Banner Offer Badge */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-beige-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ferrari-50 text-ferrari-700 border border-ferrari-200 text-xs font-bold uppercase tracking-wider mb-2">
            <Tag className="w-3.5 h-3.5 text-ferrari-600" />
            <span>{t('hero.badge')}</span>
          </div>
          <h3 className="font-display text-2xl font-extrabold text-aston-950">
            {t('calc.title')}
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            {t('calc.subtitle')}
          </p>
        </div>

        <div className="text-left sm:text-right bg-beige-50 px-4 py-3 rounded-xl border border-beige-200 flex sm:block items-center justify-between w-full sm:w-auto">
          <span className="text-xs text-slate-500 block font-semibold">{t('calc.total')}</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-ferrari-600">${baseSalePrice} CAD</span>
            <span className="text-xs text-slate-400 line-through">${baseOriginalPrice}</span>
          </div>
          <span className="inline-block mt-0.5 text-[11px] font-bold text-aston-700">
            ✓ {t('calc.youSave')}
          </span>
        </div>
      </div>

      {/* Vehicle Type Selection */}
      <div className="pt-6 space-y-3">
        <label className="text-xs font-bold text-aston-900 uppercase tracking-wider block">
          {t('calc.selectVeh')}
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setVehicleType('regular')}
            className={`p-4 rounded-xl border text-left flex items-center gap-4 transition-all cursor-pointer ${
              vehicleType === 'regular'
                ? 'bg-beige-100/90 border-aston-700 text-aston-950 shadow-xs ring-2 ring-aston-700'
                : 'bg-beige-50/60 border-beige-200 text-slate-700 hover:border-camel-300'
            }`}
          >
            <div className={`p-3 rounded-lg ${vehicleType === 'regular' ? 'bg-aston-800 text-camel-300' : 'bg-beige-200 text-slate-600'}`}>
              <Car className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-base text-aston-950">{t('calc.regular')}</div>
              <div className="text-xs text-slate-500 mt-0.5">
                Civic, Corolla, Golf, Elantra, etc.
              </div>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-xs text-slate-400 line-through">$30 CAD</span>
                <span className="text-sm font-extrabold text-ferrari-600">$20 CAD</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-ferrari-100 text-ferrari-700 font-bold">
                  SAVE $10
                </span>
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setVehicleType('suv')}
            className={`p-4 rounded-xl border text-left flex items-center gap-4 transition-all cursor-pointer ${
              vehicleType === 'suv'
                ? 'bg-beige-100/90 border-aston-700 text-aston-950 shadow-xs ring-2 ring-aston-700'
                : 'bg-beige-50/60 border-beige-200 text-slate-700 hover:border-camel-300'
            }`}
          >
            <div className={`p-3 rounded-lg ${vehicleType === 'suv' ? 'bg-aston-800 text-camel-300' : 'bg-beige-200 text-slate-600'}`}>
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-base text-aston-950">{t('calc.suv')}</div>
              <div className="text-xs text-slate-500 mt-0.5">
                RAV4, CR-V, F-150, Grand Caravan
              </div>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-xs text-slate-400 line-through">$35 CAD</span>
                <span className="text-sm font-extrabold text-ferrari-600">$25 CAD</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-ferrari-100 text-ferrari-700 font-bold">
                  SAVE $10
                </span>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Included items summary note */}
      <div className="mt-6 p-4 rounded-xl bg-beige-50 border border-beige-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
          <ShieldCheck className="w-5 h-5 text-aston-700 flex-shrink-0" />
          <span>
            {language === 'en'
              ? 'Includes: Hand Wash + Tire & Rim Scrub + Glass Cleaning + Protective Wax Seal'
              : 'Inclus: Lavage Main + Jantes & Pneus + Vitres + Cire de Protection'}
          </span>
        </div>

        <button
          onClick={handleProceed}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-aston-800 hover:bg-aston-900 text-white font-extrabold text-xs uppercase tracking-wider shadow-xs transition-all transform hover:scale-102 border border-camel-500/40 cursor-pointer"
        >
          <span>{t('calc.proceed')}</span>
          <ArrowRight className="w-4 h-4 text-camel-300" />
        </button>
      </div>
    </div>
  );
};
