'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { sendEmail } from '@/lib/email';

interface LeadPopupProps {
  open: boolean;
  onClose: () => void;
  propertyName?: string;
}

export default function LeadPopup({
  open,
  onClose,
  propertyName,
}: LeadPopupProps) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    city: '',
  });

  // Do not render if closed
  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendEmail({
        name: form.name,
        mobile: form.mobile,
        city: form.city,
        message: `Interested in ${propertyName}`,
        source: 'Property Popup',
      });

      alert('Thank you! Our team will contact you shortly.');
      onClose();
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    // BACKDROP (click to close)
    <div
      className="fixed inset-0 z-[999] bg-black/50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* MODAL */}
      <div
        className="bg-white rounded-xl shadow-xl w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()} // IMPORTANT
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-900 hover:text-slate-600"
        >
          <X />
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2 text-black">
            Get Property Details
          </h2>

          {propertyName && (
            <p className="text-sm text-emerald-600 mb-4">
              {propertyName}
            </p>
          )}

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              required
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-3 text-black"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              required
              placeholder="Mobile Number"
              className="w-full border rounded-lg px-4 py-3 text-black"
              value={form.mobile}
              onChange={(e) =>
                setForm({ ...form, mobile: e.target.value })
              }
            />

            <input
              placeholder="City"
              className="w-full border rounded-lg px-4 py-3 text-black"
              value={form.city}
              onChange={(e) =>
                setForm({ ...form, city: e.target.value })
              }
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition disabled:opacity-60"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
