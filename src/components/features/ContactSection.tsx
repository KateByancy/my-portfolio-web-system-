"use client";

import { useState } from "react";
import Image from "next/image"; 

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      console.log("Contacting:", email);
    }
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto mb-24 pt-20">
      <div className="grid md:grid-cols-2 gap-12 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none">
        
        {/* Contact Info */}
        <div className="space-y-6">
          
          <div className="relative aspect-video bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center border-2 border-dashed border-[#001F3F]/20 font-bold text-[#001F3F]/40 dark:text-blue-400/40 overflow-hidden">
            <Image 
              src="/Map.jpg" 
              alt="Map location in Cordova, Cebu" 
              fill 
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, 50vw" 
            />
          </div>
          <div className="space-y-4 font-medium text-slate-700 dark:text-slate-300">
            <p className="flex items-center gap-3">
              <span className="bg-[#001F3F]/10 p-2 rounded-full">📧</span> yanetura@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <span className="bg-[#001F3F]/10 p-2 rounded-full">📞</span> 09562852666
            </p>
            <p className="flex items-center gap-3">
              <span className="bg-[#001F3F]/10 p-2 rounded-full">📍</span> Cordova, Cebu
            </p>
          </div>
        </div>

        {/* Form with Client Logic */}
        <div className="bg-[#001F3F] dark:bg-blue-950 p-8 rounded-2xl shadow-lg shadow-blue-900/30">
          <h3 className="text-xl font-bold mb-6 text-center uppercase tracking-tight text-white">
            Let&apos;s Work Together
          </h3>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER YOUR EMAIL" 
                className="p-3 rounded border-none bg-white/10 text-white placeholder:text-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-white/20" 
              />
              <button 
                type="submit"
                className="bg-white text-[#001F3F] py-3 rounded-md font-black hover:bg-slate-100 transition-all uppercase text-sm tracking-widest shadow-lg"
              >
                CONTACT ME
              </button>
            </form>
          ) : (
            <div className="text-center py-8">
              <p className="text-white font-bold animate-bounce text-sm uppercase">
                Thank you! I&apos;ll be in touch soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}