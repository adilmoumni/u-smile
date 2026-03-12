"use client";

import Image from "next/image";

export default function AppointmentForm() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#fdfcfb]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[0.5rem] bg-[#F0FBFF] flex flex-col lg:flex-row">
          {/* Left – Photo Side */}
          {/* roudned top right 4rem */}
          <div className="lg:w-[45%] relative min-h-[400px] lg:min-h-[600px]">
            <Image
              src="/images/clinic-exterior.png"
              alt="U-Smile Clinic Exterior"
              fill
              className="object-cover object-center  rounded-tr-[4rem]"
            />
          </div>

          {/* Right – Form Side */}
          <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center">
            <div className="max-w-xl">
              <p className="text-3xl lg:text-4xl font-light text-dark-taupe mb-10 tracking-tight uppercase">PRENDRE
                <span className="font-semibold p-2">
                  RENDEZ-VOUS
                </span>
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Nom Complet */}
                  <div>
                    <input
                      type="text"
                      placeholder="NOM COMPLET"
                      className="w-full bg-white/50 border border-blue-100 rounded-xl px-4 py-4 text-xs font-medium tracking-widest placeholder:text-dark-taupe/30 focus:outline-none focus:ring-2 focus:ring-spearmint/20 transition-all uppercase"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      placeholder="EMAIL"
                      className="w-full bg-white/50 border border-blue-100 rounded-xl px-4 py-4 text-xs font-medium tracking-widest placeholder:text-dark-taupe/30 focus:outline-none focus:ring-2 focus:ring-spearmint/20 transition-all uppercase"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Téléphone */}
                  <div>
                    <input
                      type="tel"
                      placeholder="NUMÉRO DE TÉLÉPHONE"
                      className="w-full bg-white/50 border border-blue-100 rounded-xl px-4 py-4 text-xs font-medium tracking-widest placeholder:text-dark-taupe/30 focus:outline-none focus:ring-2 focus:ring-spearmint/20 transition-all uppercase"
                    />
                  </div>
                  {/* Date */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="DATE DE RESERVATION"
                      className="w-full bg-white/50 border border-blue-100 rounded-xl px-4 py-4 text-xs font-medium tracking-widest placeholder:text-dark-taupe/30 focus:outline-none focus:ring-2 focus:ring-spearmint/20 transition-all uppercase"
                    />
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-taupe/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                </div>

                {/* Objet */}
                <div>
                  <input
                    type="text"
                    placeholder="OBJET DE CONSULTATION"
                    className="w-full bg-white/50 border border-blue-100 rounded-xl px-4 py-4 text-xs font-medium tracking-widest placeholder:text-dark-taupe/30 focus:outline-none focus:ring-2 focus:ring-spearmint/20 transition-all uppercase"
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    rows={4}
                    placeholder="MESSAGE"
                    className="w-full bg-white/50 border border-blue-100 rounded-2xl px-4 py-4 text-xs font-medium tracking-widest placeholder:text-dark-taupe/30 focus:outline-none focus:ring-2 focus:ring-spearmint/20 transition-all uppercase resize-none"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex items-center gap-3 bg-[#3a3a3a] text-white px-10 py-3 rounded-xl text-xs font-bold tracking-[0.2em] uppercase hover:bg-black transition-all duration-300 shadow-lg shadow-black/10"
                >
                  ENVOYER
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
