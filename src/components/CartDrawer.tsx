import React from 'react';
import { ServiceItem } from '../types';
import { X, Trash2, Calendar, ShoppingBag, ArrowRight } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: ServiceItem[];
  onRemoveItem: (id: string) => void;
  onProceedToBooking: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onProceedToBooking,
}) => {
  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      <div
        className="absolute inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] border-l border-stone-200 shadow-2xl p-6 sm:p-8 flex flex-col justify-between">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-stone-800" />
                <h3 className="font-serif text-xl font-medium text-stone-900">
                  Your Artistry Bag ({cartItems.length})
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-stone-500 hover:text-stone-900 rounded-full hover:bg-stone-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List */}
            <div className="py-6 space-y-4 max-h-[60vh] overflow-y-auto">
              {cartItems.length === 0 ? (
                <div className="text-center py-16 text-stone-500 space-y-2">
                  <ShoppingBag className="w-8 h-8 mx-auto text-stone-400 stroke-[1.5]" />
                  <p className="text-sm font-medium text-stone-800">Your bag is empty</p>
                  <p className="text-xs text-stone-500 font-light">
                    Explore our signature looks and add your desired services.
                  </p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3.5 bg-white rounded-xl border border-stone-200 shadow-xs"
                  >
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-stone-100 shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <h4 className="text-xs font-semibold text-stone-900 line-clamp-1">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-stone-400 hover:text-rose-600 p-1 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
                        <span>{item.duration}</span>
                        <span className="font-semibold text-stone-900 tabular-nums">
                          ${item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Footer Checkout */}
          {cartItems.length > 0 && (
            <div className="pt-6 border-t border-stone-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-stone-500">
                  Estimated Investment
                </span>
                <span className="text-2xl font-serif font-medium text-stone-900 font-mono tabular-nums">
                  ${total}
                </span>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onProceedToBooking();
                }}
                className="w-full py-3.5 bg-stone-900 text-white rounded-full text-xs uppercase tracking-widest font-medium hover:bg-stone-800 transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Proceed to Reservation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
