import { motion } from 'motion/react';
import { Hero } from '../components/shared/Hero';
import { InquiryForm } from '../components/shared/InquiryForm';
import { Waves, Music, Users, Droplets } from 'lucide-react';

const services = [
  { icon: Users, title: 'Professional Coaching', desc: 'Expert swimming classes for all age groups and skill levels.' },
  { icon: Music, title: 'Pool Parties', desc: 'Book our pristine pool for private events and vibrant parties.' },
  { icon: Waves, title: 'Rain Dance', desc: 'Experience the ultimate fun with our energetic rain dance setup.' },
  { icon: Droplets, title: 'RO Filtered Water', desc: 'We maintain the highest hygiene standards with crystal clear RO water.' },
];

export default function PoolPage() {
  return (
    <div className="bg-brand-light">
      <Hero 
        title="St. Andrews Swimming Pool" 
        subtitle="Dive into Luxury. Crystal clear waters, expert coaching, and endless fun."
        imagePath="https://images.pexels.com/photos/4716818/pexels-photo-4716818.jpeg?_gl=1*1hg5fql*_ga*MzQ0MjYwNDIyLjE3NzgwODQ5MjE.*_ga_8JE65Q40S6*czE3NzgwODQ5MjEkbzEkZzEkdDE3NzgwODUwOTckajMkbDAkaDA."
        gradient="from-cyan-900/90 via-blue-900/80 to-transparent"
      />

      {/* Services Section */}
      <section className="py-20 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((srv, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-6 bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-cyan-50 flex items-center justify-center">
                  <srv.icon className="w-8 h-8 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-blue mb-2">{srv.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{srv.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-brand-blue text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Pristine <span className="text-brand-gold">Experience</span></h2>
              <p className="text-slate-300">Take a glimpse into our state-of-art pool facilities maintaining the highest purity standards.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-[60vh] min-h-[400px]">
            <motion.div className="col-span-2 row-span-2 rounded-2xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1519315901367-f34ff9154487?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Pool View 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div className="rounded-2xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1583314445831-297d0cebf28a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Pool View 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div className="rounded-2xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1522230193134-2e90de250787?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Pool View 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <InquiryForm 
              formType="pool" 
              title="Book the Pool / Join Coaching" 
              subtitle="Interested in professional coaching or booking the pool for a rain dance party? Let us know!"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
