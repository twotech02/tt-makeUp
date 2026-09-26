import React, { useState } from 'react';
import { ServiceItem, Artist, BookingData } from '../types';
import { SIGNATURE_SERVICES, ARTISTS } from '../data/mockData';
import { X, Check, Calendar, Clock, User, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: ServiceItem | null;
  preselectedArtist?: Artist | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  preselectedArtist,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    preselectedService?.id || SIGNATURE_SERVICES[0].id
  );
  const [selectedArtistId, setSelectedArtistId] = useState<string>(
    preselectedArtist?.id || ARTISTS[0].id
  );
  const [selectedDate, setSelectedDate] = useState<string>('2026-10-15');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: 'Bridal Ceremony',
    skinNotes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const currentService = SIGNATURE_SERVICES.find((s) => s.id === selectedServiceId) || SIGNATURE_SERVICES[0];
  const currentArtist = ARTISTS.find((a) => a.id === selectedArtistId) || ARTISTS[0];

  const availableAddOns = [
    { id: 'cryo-prep', name: 'Cryo Lymphatic Drainage Massage (20m)', price: 45 },
    { id: 'airbrush-hd', name: '4K Micro-Airbrush Foundation Veil Upgrade', price: 55 },
    { id: 'custom-lashes', name: 'Bespoke Silk-Mink Cluster Lash Mapping', price: 40 },
    { id: 'touchup-kit', name: 'Deluxe Bridal Touch-Up Emergency Kit', price: 65 },
  ];

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    const base = currentService.price;
    const addOnsTotal = selectedAddOns.reduce((sum, addOnId) => {
      const found = availableAddOns.find((a) => a.id === addOnId);
      return sum + (found ? found.price : 0);
    }, 0);
    return base + addOnsTotal;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = 'AES-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomCode);
    setIsSubmitted(true);
  };

  const timeSlots = ['09:00 AM', '10:30 AM', '01:00 PM', '03:00 PM', '05:30 PM'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-200 relative p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Title */}
            <div className="mb-6">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-stone-500 block mb-1">
                Atelier Appointment Concierge
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-stone-900">
                Reserve Your Artistry Experience
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Select Service */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-2">
                  1. Select Signature Service
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SIGNATURE_SERVICES.map((s) => (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => setSelectedServiceId(s.id)}
                      className={`text-left p-3.5 rounded-xl border text-xs transition-all ${
                        selectedServiceId === s.id
                          ? 'border-stone-900 bg-stone-900 text-white shadow-sm'
                          : 'border-stone-200 bg-white text-stone-800 hover:border-stone-300'
                      }`}
                    >
                      <div className="flex items-center justify-between font-medium mb-1">
                        <span>{s.name}</span>
                        <span className="font-mono tabular-nums">${s.price}</span>
                      </div>
                      <span className={`text-[11px] font-mono ${selectedServiceId === s.id ? 'text-stone-300' : 'text-stone-500'}`}>
                        {s.duration} · {s.finish}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Artist */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-2">
                  2. Select Master Artist
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {ARTISTS.map((artist) => (
                    <button
                      type="button"
                      key={artist.id}
                      onClick={() => setSelectedArtistId(artist.id)}
                      className={`text-left p-3 rounded-xl border text-xs transition-all ${
                        selectedArtistId === artist.id
                          ? 'border-stone-900 bg-white ring-2 ring-stone-900 shadow-sm'
                          : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                      }`}
                    >
                      <p className="font-medium text-stone-900 leading-tight">{artist.name}</p>
                      <p className="text-[10px] text-stone-500 line-clamp-1 mt-0.5">{artist.role.split('·')[0]}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-2">
                    3. Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-xs font-mono text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-2">
                    Time Slot
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {timeSlots.slice(0, 3).map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2 text-[11px] font-mono rounded-lg border text-center transition-all ${
                          selectedTime === slot
                            ? 'bg-stone-900 text-white border-stone-900'
                            : 'bg-white border-stone-200 text-stone-700 hover:border-stone-400'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Optional Add-ons */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-2">
                  Luxury Enhancements (Optional)
                </label>
                <div className="space-y-1.5">
                  {availableAddOns.map((addOn) => {
                    const isChecked = selectedAddOns.includes(addOn.id);
                    return (
                      <div
                        key={addOn.id}
                        onClick={() => toggleAddOn(addOn.id)}
                        className={`p-2.5 rounded-xl border text-xs flex items-center justify-between cursor-pointer transition-colors ${
                          isChecked ? 'bg-stone-100 border-stone-800' : 'bg-white border-stone-200'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded flex items-center justify-center border ${isChecked ? 'bg-stone-900 border-stone-900 text-white' : 'border-stone-300'}`}>
                            {isChecked && <Check className="w-3 h-3" />}
                          </div>
                          <span className="text-stone-800 font-medium">{addOn.name}</span>
                        </div>
                        <span className="font-mono text-stone-600">+${addOn.price}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700">
                  Guest Contact Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-900"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-900"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-900"
                  />
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-900"
                  >
                    <option value="Bridal Ceremony">Bridal Wedding Ceremony</option>
                    <option value="Bridal Trial">Bridal Trial Consultation</option>
                    <option value="Red Carpet Gala">Red Carpet Premiere / Gala</option>
                    <option value="Fashion Editorial">Fashion Editorial / Commercial</option>
                    <option value="Special Occasion">Special Occasion / Birthday</option>
                  </select>
                </div>
                <textarea
                  rows={2}
                  placeholder="Skin sensitivities, allergies, or special requests..."
                  value={formData.skinNotes}
                  onChange={(e) => setFormData({ ...formData, skinNotes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-900"
                />
              </div>

              {/* Summary Bar & Submit */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-stone-500 uppercase tracking-wider block">Estimated Total</span>
                  <span className="text-xl font-serif font-medium text-stone-900 font-mono tabular-nums">
                    ${calculateTotal()}
                  </span>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 bg-stone-900 text-white rounded-full text-xs uppercase tracking-widest font-medium hover:bg-stone-800 transition-all shadow-md"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-8 px-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-800 font-medium">
              Reservation Confirmed
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl font-light text-stone-900 mt-2 mb-3">
              We Look Forward to Welcoming You
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto mb-6 leading-relaxed">
              Your appointment request with <strong className="text-stone-900">{currentArtist.name}</strong> has been secured. A confirmation itinerary with skin prep guidelines has been sent to <strong className="text-stone-900">{formData.email || 'your email'}</strong>.
            </p>

            {/* Itinerary Card */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 text-left max-w-md mx-auto mb-8 shadow-xs">
              <div className="flex justify-between items-center pb-3 border-b border-stone-100 text-xs font-mono">
                <span className="text-stone-500">Booking Reference</span>
                <span className="font-bold text-stone-900">{bookingRef}</span>
              </div>
              <div className="py-2.5 space-y-1.5 text-xs text-stone-700">
                <div className="flex justify-between">
                  <span className="text-stone-500">Service:</span>
                  <span className="font-medium text-stone-900">{currentService.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Date & Time:</span>
                  <span className="font-mono text-stone-900">{selectedDate} at {selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Lead Artist:</span>
                  <span className="font-medium text-stone-900">{currentArtist.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Studio Location:</span>
                  <span className="text-stone-900">Suite 400 · Atelier Central</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="px-8 py-3 bg-stone-900 text-white rounded-full text-xs uppercase tracking-widest font-medium hover:bg-stone-800 transition-all"
            >
              Return to Atelier
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
