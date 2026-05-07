import { motion } from 'motion/react';
import { Hero } from '../components/shared/Hero';
import { InquiryForm } from '../components/shared/InquiryForm';
import { BookOpen, Target, Brain, Award } from 'lucide-react';

export default function TuitionPage() {
  return (
    <div className="bg-brand-light">
      <Hero 
        title="St. Andrews Tuition Classes" 
        subtitle="Empowering Minds. Expert Guidance from 1st to 12th Standard."
        imagePath="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        gradient="from-amber-900/90 via-orange-900/80 to-transparent"
      />

      {/* Segments Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Primary & Secondary */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-xl border-t-4 border-brand-gold relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <BookOpen className="w-40 h-40" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-brand-blue mb-4">Foundation Hub</h3>
              <div className="inline-block px-4 py-1 rounded-full bg-brand-light text-brand-blue font-semibold mb-6">Class 1st to 10th</div>
              <p className="text-slate-600 mb-8 leading-relaxed relative z-10">
                Building strong fundamentals across all subjects. Personalized attention to ensure every student masters the core concepts of mathematics, science, languages, and social studies.
              </p>
              <ul className="space-y-4 relative z-10">
                {['All Main Subjects', 'Weekly Mock Tests', 'Personalized Doubt Sessions', 'Concept Clarity Focus'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Senior Secondary */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-blue p-10 rounded-3xl shadow-xl border-t-4 border-brand-gold relative overflow-hidden text-white"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Brain className="w-40 h-40" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-white mb-4">Career Pathways</h3>
              <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-brand-gold font-semibold mb-6">Class 11th & 12th</div>
              <p className="text-slate-300 mb-8 leading-relaxed relative z-10">
                Specialized coaching for senior secondary board exams. Expert faculty dedicated to Arts and Science streams, preparing students for board excellence.
              </p>
              <div className="grid grid-cols-2 gap-6 relative z-10">
                <div>
                  <h4 className="text-brand-gold font-bold mb-3 border-b border-white/20 pb-2">Arts Stream</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>Political Science</li>
                    <li>History</li>
                    <li>Geography</li>
                    <li>Economics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-brand-gold font-bold mb-3 border-b border-white/20 pb-2">Science Stream</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>Physics</li>
                    <li>Chemistry</li>
                    <li>Mathematics</li>
                    <li>Biology</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <InquiryForm 
              formType="tuition" 
              title="Enroll in Tuition Classes" 
              subtitle="Secure a bright future. Fill out the form below to register or inquire about batch timings for your respective class."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
