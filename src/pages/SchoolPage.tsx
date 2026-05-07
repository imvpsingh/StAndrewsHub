import { motion } from 'motion/react';
import { Hero } from '../components/shared/Hero';
import { InquiryForm } from '../components/shared/InquiryForm';
import { BookOpen, Monitor, FlaskConical, Trophy } from 'lucide-react';

const facilities = [
  { icon: Trophy, title: 'Big Playground', desc: 'Spacious ground for sports and physical development.' },
  { icon: BookOpen, title: 'Rich Library', desc: 'Vast collection of academic and reference books.' },
  { icon: Monitor, title: 'Computer Lab', desc: 'Modern computing facilities with latest software.' },
  { icon: FlaskConical, title: 'Science Labs', desc: 'Fully equipped physics, chemistry, and biology labs.' },
];

const toppers = [
  { name: 'Aarav Sharma', class: '12th Science', score: '98.2%', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { name: 'Priya Patel', class: '12th Arts', score: '97.5%', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { name: 'Rahul Singh', class: '10th Board', score: '96.8%', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { name: 'Sneha Gupta', class: '10th Board', score: '95.4%', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
];

export default function SchoolPage() {
  return (
    <div className="bg-brand-light">
      <Hero 
        title="St. Andrews Sec. School" 
        subtitle="RBSE English & Hindi Medium | Science & Arts Streams"
        imagePath="https://images.pexels.com/photos/31940733/pexels-photo-31940733.jpeg?_gl=1*9pmeo9*_ga*MzQ0MjYwNDIyLjE3NzgwODQ5MjE.*_ga_8JE65Q40S6*czE3NzgwODQ5MjEkbzEkZzEkdDE3NzgwODQ5NTkkajIyJGwwJGgw"
        gradient="from-blue-900/90 via-brand-blue/80 to-transparent"
      />

      {/* Intro & Highlights */}
      <section className="py-20 -mt-10 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((fac, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-brand-gold transition-colors group"
               >
                 <div className="w-14 h-14 rounded-xl bg-brand-light flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors">
                   <fac.icon className="w-7 h-7 text-brand-blue" />
                 </div>
                 <h3 className="text-xl font-bold text-brand-blue mb-3">{fac.title}</h3>
                 <p className="text-slate-600 leading-relaxed">{fac.desc}</p>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Toppers Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-blue mb-4">Our <span className="text-brand-gold">Champions</span></h2>
            <p className="text-lg text-slate-600">Celebrating the academic excellence of our top performers.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {toppers.map((topper, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group rounded-2xl overflow-hidden shadow-xl"
              >
                <img src={topper.image} alt={topper.name} className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/40 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-2xl font-bold font-serif mb-1">{topper.name}</h3>
                  <p className="text-brand-gold font-medium mb-1">{topper.class}</p>
                  <p className="text-3xl font-light">{topper.score}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Form */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <InquiryForm 
              formType="school" 
              title="Admission Inquiry" 
              subtitle="Fill out the form below to inquire about admissions. Our academic counselor will reach out to guide you through the process."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
