import { useState, ChangeEvent, FormEvent } from 'react';
import toast from 'react-hot-toast';
import { Loader2 } from 'lucide-react';

interface InquiryFormProps {
  formType: 'school' | 'pool' | 'tuition' | 'pg' | 'general';
  title?: string;
  subtitle?: string;
}

export function InquiryForm({ formType, title = "Request an Inquiry", subtitle = "Fill out the form below and we will get back to you shortly." }: InquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    interest: formType
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate phone number roughly
    if (!/^\d{10}$/.test(formData.phone)) {
      toast.error('Please enter a valid 10-digit phone number');
      setIsSubmitting(false);
      return;
    }

    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Ideally this would be: 
      // await fetch('/api/inquiry', { method: 'POST', body: JSON.stringify(formData) });
      
      toast.success('Your inquiry has been submitted successfully. We will contact you soon!', {
        duration: 5000,
      });
      setFormData({ name: '', phone: '', email: '', message: '', interest: formType });
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
      <div className="p-8 md:p-10">
        <h3 className="font-serif font-bold text-2xl text-brand-blue mb-2">{title}</h3>
        <p className="text-slate-500 mb-8">{subtitle}</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                required 
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all"
                placeholder="9876543210"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message / Requirements *</label>
            <textarea 
              id="message" 
              name="message" 
              required 
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all resize-none"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-brand-blue text-white py-4 rounded-lg font-medium hover:bg-brand-blue-light transition-colors disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Inquiry'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
