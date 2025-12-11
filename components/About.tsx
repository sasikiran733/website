import React from 'react';
import SectionContainer from './ui/SectionContainer';
import { User, Flag, MessageCircle, Music, Gamepad2, Calendar, Heart, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-slate-900/50 clip-path-polygon"></div>
      <SectionContainer id="about">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">About Me</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-lg shadow-primary/50"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Objective Card */}
          <div className="md:col-span-7 glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
            
            <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <User size={24} />
              </div>
              Career Objective
            </h3>
            
            <p className="text-slate-300 leading-relaxed text-lg mb-8">
              "With my skills and assistance from the organization, I believe that I can take up challenging tasks in my work and end up with best results. I am flexible and versatile to adapt to any new environment."
            </p>
            
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Core Strengths</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'Fast Learner', icon: Zap },
                { label: 'Adaptable', icon: User },
                { label: 'Confident', icon: Heart },
                { label: 'Team Player', icon: MessageCircle }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-primary/50 p-3 rounded-xl text-center transition-all duration-300">
                  <item.icon size={20} className="mx-auto mb-2 text-secondary" />
                  <span className="text-slate-300 text-xs font-semibold">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Details Card */}
          <div className="md:col-span-5 space-y-6">
            <div className="glass-card p-8 rounded-3xl border-l-4 border-l-secondary">
               <h3 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                <Flag className="text-secondary" />
                Personal Details
              </h3>
              <ul className="space-y-5">
                <li className="flex items-center justify-between border-b border-slate-700/50 pb-3 hover:border-slate-600 transition-colors">
                  <span className="text-slate-400 flex items-center gap-3 text-sm"><Calendar size={16} className="text-primary"/> Date of Birth</span>
                  <span className="text-white font-medium">23 Apr, 2004</span>
                </li>
                <li className="flex items-center justify-between border-b border-slate-700/50 pb-3 hover:border-slate-600 transition-colors">
                  <span className="text-slate-400 flex items-center gap-3 text-sm"><Flag size={16} className="text-primary"/> Nationality</span>
                  <span className="text-white font-medium">Indian</span>
                </li>
                <li className="flex items-center justify-between border-b border-slate-700/50 pb-3 hover:border-slate-600 transition-colors">
                  <span className="text-slate-400 flex items-center gap-3 text-sm"><Heart size={16} className="text-primary"/> Status</span>
                  <span className="text-white font-medium">Single</span>
                </li>
                 <li className="flex items-center justify-between border-b border-slate-700/50 pb-3 hover:border-slate-600 transition-colors">
                  <span className="text-slate-400 flex items-center gap-3 text-sm"><MessageCircle size={16} className="text-primary"/> Languages</span>
                  <span className="text-white font-medium">Telugu, English</span>
                </li>
              </ul>
            </div>

            {/* Hobbies */}
            <div className="glass-card p-6 rounded-3xl flex items-center justify-between gap-4">
               <span className="text-sm uppercase tracking-wider text-slate-500 font-bold">Interests</span>
               <div className="flex gap-3">
                 <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-pink-500 hover:scale-110 transition-transform cursor-help" title="Gaming">
                    <Gamepad2 size={20} />
                 </div>
                 <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-cyan-500 hover:scale-110 transition-transform cursor-help" title="Music">
                    <Music size={20} />
                 </div>
               </div>
            </div>
          </div>

        </div>
      </SectionContainer>
    </div>
  );
};

export default About;