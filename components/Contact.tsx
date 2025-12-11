import React from 'react';
import SectionContainer from './ui/SectionContainer';
import { Phone, Mail, MapPin, Send, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <SectionContainer id="contact" className="pb-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Get In Touch</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-lg shadow-primary/50"></div>
        <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        
        {/* Contact Info Cards */}
        <div className="space-y-6">
          <a href="tel:+917330679619" className="block">
            <div className="glass-card p-6 rounded-2xl flex items-center gap-6 group hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform border border-primary/20">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1 font-semibold uppercase tracking-wider">Phone</p>
                <p className="text-xl text-white font-bold group-hover:text-primary transition-colors">+91 7330679619</p>
              </div>
              <div className="ml-auto text-slate-600 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all">
                <ArrowRight size={20} />
              </div>
            </div>
          </a>

          <a href="mailto:sasikiran8175@gmail.com" className="block">
            <div className="glass-card p-6 rounded-2xl flex items-center gap-6 group hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-full flex items-center justify-center text-secondary group-hover:scale-110 transition-transform border border-secondary/20">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1 font-semibold uppercase tracking-wider">Email</p>
                <p className="text-xl text-white font-bold group-hover:text-secondary transition-colors break-all">sasikiran8175@gmail.com</p>
              </div>
               <div className="ml-auto text-slate-600 group-hover:text-secondary opacity-0 group-hover:opacity-100 transition-all">
                <ArrowRight size={20} />
              </div>
            </div>
          </a>

          <div className="glass-card p-6 rounded-2xl flex items-center gap-6 group hover:bg-slate-800/80 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center text-slate-300 group-hover:scale-110 transition-transform border border-slate-600">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1 font-semibold uppercase tracking-wider">Location</p>
              <p className="text-lg text-white font-medium leading-snug">
                24-102-23, Vinayaka Nagar, Gajuwaka,<br/> Vishakhapatnam, AP
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -mr-16 -mt-16"></div>
          
          <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Send Message</h3>
          <form className="space-y-5 relative z-10" onSubmit={(e) => { e.preventDefault(); alert("Message sent simulation!"); }}>
            <div className="grid grid-cols-2 gap-5">
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="name" className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-slate-700"
                  placeholder="John Doe"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="email" className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-slate-700"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">Message</label>
              <textarea 
                id="message"
                rows={4}
                className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none placeholder:text-slate-700"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 flex items-center justify-center gap-2 group"
            >
              <span>Send Message</span>
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

      </div>
    </SectionContainer>
  );
};

export default Contact;