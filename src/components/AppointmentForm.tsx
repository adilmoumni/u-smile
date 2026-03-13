"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircle2, X, ChevronDown } from "lucide-react";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    phonePrefix: "+212",
    location: "",
    date: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, boolean> = {};
    if (!formData.name) newErrors.name = true;
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = true;
    if (!formData.phone || formData.phone.length < 5) newErrors.phone = true;
    if (!formData.phonePrefix) newErrors.phonePrefix = true;
    if (!formData.location) newErrors.location = true;
    if (!formData.date) newErrors.date = true;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          phone: `${formData.phonePrefix} ${formData.phone}`
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          phonePrefix: "+212",
          location: "",
          date: "",
          subject: "",
          message: ""
        });
      } else {
        const errorData = await response.json();
        alert(`Erreur: ${errorData.error || 'Une erreur est survenue lors de l\'envoi.'}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Une erreur réseau est survenue. Veuillez réessayer plus tard.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#fdfcfb]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[0.5rem] bg-[#F0FBFF] flex flex-col lg:flex-row">
          {/* Left – Photo Side */}
          <div className="lg:w-[45%] relative min-h-[400px] lg:min-h-[600px]">
            <Image
              src="/images/clinic-exterior.png"
              alt="U-Smile Clinic Exterior"
              fill
              className="object-cover object-center rounded-tr-[4rem]"
            />
          </div>

          {/* Right – Form Side */}
          <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center relative">
            <div className="max-w-xl">
              <p className="text-3xl lg:text-4xl font-light text-dark-taupe mb-10 tracking-tight uppercase">PRENDRE
                <span className="font-semibold p-2">
                  RENDEZ-VOUS
                </span>
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Nom Complet */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nom Complet"
                      className={`w-full bg-white/50 border ${errors.name ? 'border-red-500' : 'border-blue-100'} rounded-xl px-4 py-4 text-sm font-medium tracking-widest placeholder:text-dark-taupe/30 focus:outline-none focus:ring-2 focus:ring-spearmint/20 transition-all`}
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className={`w-full bg-white/50 border ${errors.email ? 'border-red-500' : 'border-blue-100'} rounded-xl px-4 py-4 text-sm font-medium tracking-widest placeholder:text-dark-taupe/30 focus:outline-none focus:ring-2 focus:ring-spearmint/20 transition-all`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Unified Téléphone field */}
                  <div className={`flex items-center bg-white/50 border ${errors.phone || errors.phonePrefix ? 'border-red-500' : 'border-blue-100'} rounded-xl px-4 focus-within:ring-2 focus-within:ring-spearmint/20 transition-all`}>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-dark-taupe/60">+</span>
                      <input
                        type="text"
                        name="phonePrefix"
                        value={formData.phonePrefix.replace('+', '')}
                        onChange={(e) => {
                          const val = e.target.value.replace(/[^0-9]/g, '').slice(0, 4);
                          setFormData(prev => ({ ...prev, phonePrefix: `+${val}` }));
                          if (errors.phonePrefix) setErrors(prev => ({ ...prev, phonePrefix: false }));
                        }}
                        placeholder="212"
                        className="w-[35px] bg-transparent border-none py-4 text-sm font-medium focus:outline-none pl-0.5"
                      />
                    </div>
                    <div className="w-px h-6 bg-blue-100 mx-2" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="611223344 ..."
                      className="flex-1 bg-transparent border-none py-4 text-sm font-medium tracking-widest placeholder:text-dark-taupe/30 focus:outline-none"
                    />
                  </div>
                  {/* Lieu */}
                  <div className="relative">
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className={`w-full bg-white/50 border ${errors.location ? 'border-red-500' : 'border-blue-100'} rounded-xl px-4 py-4 text-sm font-medium tracking-widest ${formData.location ? 'text-dark-taupe' : 'text-dark-taupe/30'} focus:outline-none focus:ring-2 focus:ring-spearmint/20 transition-all appearance-none cursor-pointer pr-10`}
                    >
                      <option value="" disabled>Choisir le lieu</option>
                      <option value="bouskora">Bouskoura</option>
                      <option value="velodrome">Vélodrome Casablanca</option>
                      <option value="both">Bouskoura & Vélodrome</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-dark-taupe/40">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Date */}
                  <div className="relative">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full bg-white/50 border ${errors.date ? 'border-red-500' : 'border-blue-100'} rounded-xl px-4 py-4 text-sm font-medium tracking-widest text-dark-taupe/70 focus:outline-none focus:ring-2 focus:ring-spearmint/20 transition-all`}
                    />
                  </div>
                  {/* Objet */}
                  <div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Objet de consultation"
                      className="w-full bg-white/50 border border-blue-100 rounded-xl px-4 py-4 text-sm font-medium tracking-widest placeholder:text-dark-taupe/30 focus:outline-none focus:ring-2 focus:ring-spearmint/20 transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="w-full bg-white/50 border border-blue-100 rounded-2xl px-4 py-4 text-sm font-medium tracking-widest placeholder:text-dark-taupe/30 focus:outline-none focus:ring-2 focus:ring-spearmint/20 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group flex items-center gap-3 bg-[#3a3a3a] text-white px-10 py-3 rounded-xl text-sm font-bold tracking-[0.2em] uppercase hover:bg-black transition-all duration-300 shadow-lg shadow-black/10 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'ENVOI EN COURS...' : 'ENVOYER'}
                  {!isSubmitting && (
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </button>
              </form>
            </div>

            {/* Success Modal Overlay */}
            {showSuccess && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center p-8 animate-fade-in">
                <div className="text-center space-y-6 max-w-sm">
                  <div className="flex justify-center">
                    <CheckCircle2 className="w-16 h-16 text-spearmint" />
                  </div>
                  <h3 className="text-2xl font-serif text-dark-taupe">Success!</h3>
                  <p className="text-[#393939]/70 font-light italic">
                    Données envoyées, nous vous contacterons dès que possible.
                  </p>
                  <button 
                    onClick={() => setShowSuccess(false)}
                    className="inline-flex items-center gap-2 text-dark-taupe/40 hover:text-dark-taupe transition-colors text-xs font-bold tracking-widest uppercase"
                  >
                    FERMER <X className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
