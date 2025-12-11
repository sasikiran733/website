import React from 'react';
import SectionContainer from './ui/SectionContainer';
import { GraduationCap, Award, BookOpen, MapPin } from 'lucide-react';
import { Education as EducationType } from '../types';

const Education: React.FC = () => {
  const educationData: EducationType[] = [
    {
      school: "Sanketika Institute of Technology and Management (JNTU-GV)",
      degree: "Bachelor of Technology (B.Tech)",
      year: "Pursuing",
      score: "7.0 CGPA",
      location: "Vishakhapatnam"
    },
    {
      school: "Nadimpalli Satyanarayana Raju Institute of Technology",
      degree: "Diploma in Mechanical Engineering",
      year: "2023",
      score: "71.6%",
      location: "Andhra Pradesh"
    },
    {
      school: "Narayana E-Techno School",
      degree: "Central Board of Secondary Education (CBSE)",
      year: "2020",
      score: "345 / 500",
      location: "Andhra Pradesh"
    }
  ];

  return (
    <SectionContainer id="education">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Education</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full shadow-lg shadow-secondary/50"></div>
      </div>

      <div className="relative container mx-auto px-4 max-w-5xl">
        {/* Vertical Line with Gradient */}
        <div className="absolute left-4 md:left-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-slate-800 -translate-x-1/2 hidden md:block rounded-full opacity-30"></div>
        
        <div className="space-y-12 md:space-y-20">
          {educationData.map((edu, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Center Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-dark rounded-full border-4 border-secondary hidden md:block z-10 shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-125 transition-transform duration-300"></div>

              {/* Empty space for alignment */}
              <div className="w-full md:w-5/12"></div>

              {/* Content Card */}
              <div className="w-full md:w-5/12">
                 <div className="glass-card p-6 md:p-8 rounded-2xl relative transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:border-secondary/30 group-hover:bg-slate-800/80">
                    
                    <div className="absolute -top-4 right-8 bg-gradient-to-r from-secondary to-primary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      {edu.year}
                    </div>

                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-slate-800/80 rounded-xl text-secondary border border-slate-700/50">
                        <GraduationCap size={28} />
                      </div>
                      <div className="text-right">
                        <div className="flex items-center justify-end gap-1 text-xs text-slate-400 mb-1">
                          <MapPin size={12} /> {edu.location}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-heading font-bold text-white mb-2 leading-tight group-hover:text-secondary transition-colors">
                      {edu.school}
                    </h3>
                    
                    <div className="space-y-3 mt-4">
                      <div className="flex items-center gap-3 text-slate-300 bg-slate-900/40 p-2 rounded-lg">
                        <BookOpen size={16} className="text-primary"/>
                        <span className="font-medium text-sm">{edu.degree}</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-300 bg-slate-900/40 p-2 rounded-lg">
                        <Award size={16} className="text-yellow-500"/>
                        <span className="font-bold text-sm text-yellow-500">Score: {edu.score}</span>
                      </div>
                    </div>
                 </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Education;
