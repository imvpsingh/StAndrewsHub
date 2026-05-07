import { motion } from 'motion/react';
import { Hero } from '../components/shared/Hero';
import { InquiryForm } from '../components/shared/InquiryForm';
import { Wifi, Droplets, Utensils, ThermometerSun, ShieldCheck, Car, BedDouble } from 'lucide-react';

const facilities = [
  { icon: BedDouble, title: 'Varied Room Options', desc: 'Comfortable Single, Double, and Triple seated rooms to suit your preference.' },
  { icon: Utensils, title: 'Homely Food', desc: 'Nutritious and hygienic meals cooked with a touch of home.' },
  { icon: Wifi, title: 'High-speed Wi-Fi', desc: 'Stay connected and productive with uninterrupted internet.' },
  { icon: ShieldCheck, title: 'CCTV Security', desc: '24/7 surveillance ensuring a safe and secure environment.' },
  { icon: Droplets, title: 'RO Water', desc: 'Purified drinking water available round the clock.' },
  { icon: ThermometerSun, title: 'Geyser Facility', desc: 'Hot water availability for winter comfort.' },
  { icon: Car, title: 'Dedicated Parking', desc: 'Safe and secure parking space for personal vehicles.' },
];

export default function PGPage() {
  return (
    <div className="bg-brand-light">
      <Hero 
        title="St. Andrews Residency (PG)" 
        subtitle="A Home Away From Home. Premium facilities and a secure environment for students and professionals."
        imagePath="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        gradient="from-emerald-900/90 via-green-900/80 to-transparent"
      />

      {/* Facilities Showcase */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-blue mb-6">Premium <span className="text-brand-gold">Living</span> Standard</h2>
            <p className="text-lg text-slate-600">
              We understand the importance of a comfortable living space for your growth. Our residency is equipped with all modern amenities to ensure a hassle-free stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {facilities.map((fac, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                  <fac.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">{fac.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{fac.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 bg-brand-blue text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
           <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
             <defs>
               <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
               </pattern>
             </defs>
             <rect width="100%" height="100%" fill="url(#grid)" />
           </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-4">Check Availability</h2>
            <p className="text-slate-300 text-center mb-12">Looking for a single, double, or triple sharing room? Send us your requirements.</p>
            
            {/* The Inquiry Form is already styled for dark backgrounds mostly, but we can customize if needed or use the shared one since it has a white background block. */}
            <InquiryForm 
              formType="pg" 
              title="Residency Inquiry" 
              subtitle="Fill this form for PG admission or availability checks."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
