import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { GraduationCap, Waves, BookOpen, Building2, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const services = [
  {
    id: 'school',
    title: 'St. Andrews Sec. School',
    subtitle: 'Excellence in Education',
    icon: GraduationCap,
    path: '/school',
    image: 'https://images.pexels.com/photos/31940733/pexels-photo-31940733.jpeg?_gl=1*9pmeo9*_ga*MzQ0MjYwNDIyLjE3NzgwODQ5MjE.*_ga_8JE65Q40S6*czE3NzgwODQ5MjEkbzEkZzEkdDE3NzgwODQ5NTkkajIyJGwwJGgw',
    color: 'from-blue-600/80 to-brand-blue/90'
  },
  {
    id: 'pool',
    title: 'Swimming Pool',
    subtitle: 'Recreation & Coaching',
    icon: Waves,
    path: '/pool',
    image: 'https://images.pexels.com/photos/4716818/pexels-photo-4716818.jpeg?_gl=1*1hg5fql*_ga*MzQ0MjYwNDIyLjE3NzgwODQ5MjE.*_ga_8JE65Q40S6*czE3NzgwODQ5MjEkbzEkZzEkdDE3NzgwODUwOTckajMkbDAkaDA.',
    color: 'from-cyan-500/80 to-blue-700/90'
  },
  {
    id: 'tuition',
    title: 'Tuition Classes',
    subtitle: 'Expert Guidance 1st-10th',
    icon: BookOpen,
    path: '/tuition',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-amber-500/80 to-orange-700/90'
  },
  {
    id: 'pg',
    title: 'St. Andrews Residency',
    subtitle: 'Premium PG Setup',
    icon: Building2,
    path: '/pg',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-emerald-500/80 to-green-800/90'
  }
];

export default function HomePage() {
  return (
    <div className="bg-brand-light">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Campus" 
            className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/60 via-transparent to-brand-light"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-brand-gold/90 backdrop-blur-sm mb-8 shadow-2xl">
              <span className="text-brand-blue font-serif font-bold text-4xl">SA</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
              St. Andrews <span className="text-brand-gold">Hub</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 font-light tracking-wide mb-12">
              Empowering Education, Excellence & Living.
            </p>
            <motion.button 
              className="px-8 py-4 bg-white text-brand-blue font-medium rounded-full hover:bg-brand-gold transition-colors duration-300 shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore the Hub
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Quad-Core Navigation */}
      <section id="explore" className="py-24 relative z-20 -mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link 
                    to={service.path}
                    className="group block relative h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                  >
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className={cn("absolute inset-0 bg-gradient-to-t opacity-90 transition-opacity group-hover:opacity-100", service.color)}></div>
                    
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 border border-white/30">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-white/80 mb-6">{service.subtitle}</p>
                        <div className="inline-flex items-center gap-2 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-4 group-hover:translate-x-0">
                          <span>Explore More</span>
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us Narrative */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-blue mb-6">
                A Legacy of <span className="text-brand-gold">Excellence</span>
              </h2>
              <div className="w-20 h-1 bg-brand-gold mb-8"></div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                St. Andrews Hub is more than just an institution; it is a holistic ecosystem designed to nurture talent, foster well-being, and provide premium living experiences.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Founded with a vision to deliver world-class facilities to the community of Jhotwara, Jaipur, we integrate rigorous academics through our school and tuition classes, with exceptional lifestyle amenities including our premium swimming pool and secure residential PGs. 
              </p>
              <div className="flex gap-4">
                <div className="p-4 bg-brand-light rounded-xl border border-slate-100 text-center flex-1">
                  <div className="text-3xl font-bold text-brand-blue mb-1">15+</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Years Exp.</div>
                </div>
                <div className="p-4 bg-brand-light rounded-xl border border-slate-100 text-center flex-1">
                  <div className="text-3xl font-bold text-brand-blue mb-1">4</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Core Services</div>
                </div>
                <div className="p-4 bg-brand-light rounded-xl border border-slate-100 text-center flex-1">
                  <div className="text-3xl font-bold text-brand-blue mb-1">10k+</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Happy Faces</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-brand-gold/20 rounded-3xl transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="About St. Andrews" 
                className="relative rounded-3xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-blue mb-4">Hub <span className="text-brand-gold">Gallery</span></h2>
            <p className="text-slate-600">Glimpses of life, learning, and celebration at St. Andrews Hub.</p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <div className="break-inside-avoid rounded-2xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="School Activity" className="w-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
            </div>
            <div className="break-inside-avoid rounded-2xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1576016770956-fec9596f27f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pool" className="w-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
            </div>
            <div className="break-inside-avoid rounded-2xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1523580494112-071c16b99b5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Graduation" className="w-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
            </div>
            <div className="break-inside-avoid rounded-2xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Room" className="w-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
            </div>
            <div className="break-inside-avoid rounded-2xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Tuition" className="w-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
            </div>
            <div className="break-inside-avoid rounded-2xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1519315901367-f34ff9154487?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Event" className="w-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Blogs / News */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-blue mb-4">Latest <span className="text-brand-gold">Updates</span></h2>
              <p className="text-slate-600">News, announcements, and academic tips from St. Andrews Hub.</p>
            </div>
            <button className="hidden md:inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-gold transition-colors">
              View All Posts <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Admissions Open for 2026-27 Academic Session",
                date: "March 15, 2026",
                category: "School",
                img: "https://images.pexels.com/photos/3584969/pexels-photo-3584969.jpeg?_gl=1*11qezyx*_ga*MzQ0MjYwNDIyLjE3NzgwODQ5MjE.*_ga_8JE65Q40S6*czE3NzgxMjE0NjMkbzMkZzEkdDE3NzgxMjE0NjckajU2JGwwJGgw"
              },
              {
                title: "Tips to Prepare for Class 10th Board Exams",
                date: "March 10, 2026",
                category: "Academic",
                img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Summer Pool Coaching Camp Registration Starts",
                date: "March 5, 2026",
                category: "Pool",
                img: "https://images.pexels.com/photos/2705879/pexels-photo-2705879.jpeg?_gl=1*1gktbsq*_ga*MzQ0MjYwNDIyLjE3NzgwODQ5MjE.*_ga_8JE65Q40S6*czE3NzgxMjE0NjMkbzMkZzEkdDE3NzgxMjE2MTgkajM5JGwwJGgw"
              }
            ].map((blog, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="rounded-2xl overflow-hidden mb-6 h-60 relative shadow-md">
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/90 backdrop-blur text-brand-blue text-xs font-bold uppercase tracking-wider rounded-full">
                    {blog.category}
                  </div>
                  <img src={blog.img} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                </div>
                <div className="text-sm text-brand-gold font-semibold mb-2">{blog.date}</div>
                <h3 className="text-xl font-bold text-brand-blue group-hover:text-brand-gold transition-colors leading-snug">{blog.title}</h3>
              </motion.div>
            ))}
          </div>
          <button className="md:hidden mt-8 w-full py-4 border border-brand-blue text-brand-blue rounded-xl font-semibold hover:bg-brand-blue hover:text-white transition-colors">
            View All Posts
          </button>
        </div>
      </section>
    </div>
  );
}
