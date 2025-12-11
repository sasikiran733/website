import React from 'react';
import SectionContainer from './ui/SectionContainer';
import { Briefcase, MapPin, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { Experience as ExperienceType } from '../types';

const Experience: React.FC = () => {
  const experiences: ExperienceType[] = [
    {
      company: "Bharat Heavy Electricals Limited (BHEL)",
      role: "Industrial Trainee",
      duration: "6 Months",
      location: "Vishakhapatnam",
      description: "Gained hands-on experience in heavy engineering operations and industrial workflows. Adapted to professional environments and contributed to team objectives."
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <SectionContainer id="experience">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Experience</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto rounded-full shadow-lg shadow-emerald-500/50"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative">
              {/* Gradient Border Background */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl opacity-30 group-hover:opacity-70 transition duration-500 blur-sm"></div>
              
              <div className="relative bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-800">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-400 border border-emerald-500/20 shadow-inner">
                      <Briefcase size={36} />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-white group-hover:text-emerald-400 transition-colors">{exp.role}</h3>
                      <h4 className="text-xl text-slate-400 font-medium mt-1">{exp.company}</h4>
                    </div>
                  </div>

                  <div className="flex flex-row md:flex-col gap-3 md:items-end text-slate-500 text-sm font-medium">
                    <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                      <Calendar size={14} className="text-emerald-500" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                      <MapPin size={14} className="text-emerald-500" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                  <h5 className="text-emerald-400 font-bold mb-4 flex items-center gap-2 uppercase tracking-wide text-xs">
                     <CheckCircle size={14}/>
                     Work Highlights
                  </h5>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
};

export default Experience;