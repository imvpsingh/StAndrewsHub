import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-blue-light text-slate-300 pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center">
                <span className="text-brand-blue font-serif font-bold text-xl">SA</span>
              </div>
              <h2 className="font-serif font-bold text-2xl text-white">St. Andrews <span className="text-brand-gold">Hub</span></h2>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Empowering Education, Excellence & Living. A complete ecosystem providing top-tier academic facilities, lifestyle amenities, and comfortable residencies.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">Our Hub</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/school" className="hover:text-brand-gold transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/50"></span>
                  St. Andrews Sec. School
                </Link>
              </li>
              <li>
                <Link to="/pool" className="hover:text-brand-gold transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/50"></span>
                  Swimming Pool
                </Link>
              </li>
              <li>
                <Link to="/tuition" className="hover:text-brand-gold transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/50"></span>
                  Tuition Classes
                </Link>
              </li>
              <li>
                <Link to="/pg" className="hover:text-brand-gold transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/50"></span>
                  Residency (PG)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-sm">31A, Triveni Nagar Rd, Jagannath Puri I, Triveni Nagar, Vishveshvariya Nagar, Arjun Nagar, Jaipur, Rajasthan 302018</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1 text-sm">
                  <a href="tel:+917568666654" className="hover:text-white transition-colors">+91 7568666654</a>
                  <a href="tel:+919588847221" className="hover:text-white transition-colors">+91 9588847221</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <a href="mailto:info@standrewshub.com" className="text-sm hover:text-white transition-colors">info@standrewshub.com</a>
              </li>
            </ul>
          </div>

          {/* Location Map */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">Location</h3>
            <div className="h-40 rounded-xl overflow-hidden border border-white/10 relative group">
              <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8872473461!2d75.77312157522137!3d26.84351657668903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5f76b000001%3A0x600f7c220268571!2sTriveni%20Nagar%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1715012345678!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale-[50%] contrast-125"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} St. Andrews Hub. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            Developed with ❤️ by <a href="https://vipasika.com" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-white transition-colors font-medium">Vipasika IT Solutions</a>
          </p>
        </div>
      </div>
    </footer>
  );
}