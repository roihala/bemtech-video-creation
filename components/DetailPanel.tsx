import React from 'react';
import { FlowStep } from '../types';
import { IconRenderer } from './IconRenderer';

interface DetailPanelProps {
  step: FlowStep | null;
}

export const DetailPanel: React.FC<DetailPanelProps> = ({ step }) => {
  if (!step) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-slate-500 p-8 border border-slate-800 rounded-2xl bg-slate-900/50 border-dashed">
        <IconRenderer name="BrainCircuit" className="w-16 h-16 mb-4 opacity-20" />
        <p className="text-lg">לחץ על שלב בתהליך כדי לראות פרטים טכניים</p>
      </div>
    );
  }

  return (
    <div className="h-full bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700 shadow-2xl relative overflow-hidden">
      {/* Background Accent */}
      <div className={`absolute top-0 left-0 w-full h-2 ${
        step.type === 'optionA' ? 'bg-cyan-500' : 
        step.type === 'optionB' ? 'bg-purple-500' : 'bg-blue-500'
      }`}></div>

      <div className="flex items-start justify-between mb-6">
        <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{step.title}</h2>
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                step.type === 'optionA' ? 'bg-cyan-900 text-cyan-200' : 
                step.type === 'optionB' ? 'bg-purple-900 text-purple-200' : 'bg-blue-900 text-blue-200'
            }`}>
                שלב {step.id}
            </div>
        </div>
        <div className={`p-4 rounded-xl bg-slate-900 ${
             step.type === 'optionA' ? 'text-cyan-400' : 
             step.type === 'optionB' ? 'text-purple-400' : 'text-blue-400'
        }`}>
            <IconRenderer name={step.iconName} className="w-8 h-8" />
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-300 mb-2">תיאור</h3>
          <p className="text-slate-400 leading-relaxed">{step.description}</p>
        </div>

        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
          <h3 className="text-lg font-semibold text-slate-200 mb-3 flex items-center gap-2">
            <span>פרטים טכניים</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm md:text-base">
            {step.technicalDetails}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-300 mb-3">כלים מומלצים</h3>
          <div className="flex flex-wrap gap-2">
            {step.tools.map((tool, index) => (
              <span 
                key={index} 
                className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 rounded-md text-sm text-white transition-colors border border-slate-600"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
