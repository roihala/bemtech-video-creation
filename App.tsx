import React, { useState } from 'react';
import { Visualizer } from './components/Visualizer';
import { DetailPanel } from './components/DetailPanel';
import { FLOW_STEPS } from './constants';
import { FlowStep } from './types';
import { Video } from 'lucide-react';

export default function App() {
  const [selectedStep, setSelectedStep] = useState<FlowStep | null>(FLOW_STEPS[0]);

  const handleStepSelect = (step: FlowStep) => {
    setSelectedStep(step);
    // On mobile, scroll to details
    if (window.innerWidth < 768) {
      setTimeout(() => {
        const detailsElement = document.getElementById('details-panel');
        if (detailsElement) {
          detailsElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 overflow-x-hidden selection:bg-purple-500/30">
      
      {/* Header */}
      <header className="w-full border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-tr from-purple-600 to-blue-500 p-2 rounded-lg shadow-lg shadow-purple-500/20">
              <Video className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-white to-slate-400">
                יצירת סרטוני שיווק (SMB)
              </h1>
              <p className="text-xs text-slate-500 hidden md:block">מדריך ויזואלי לתהליכי AI מתקדמים</p>
            </div>
          </div>
          <div className="text-sm font-medium text-slate-400">
            גרסה 1.0
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:h-[calc(100vh-8rem)]">
          
          {/* Left Column: Visualization (Scrollable) */}
          <div className="lg:col-span-7 lg:overflow-y-auto pr-2 custom-scrollbar">
            <div className="mb-6 lg:mb-0">
               <div className="p-4 bg-blue-900/20 border border-blue-800 rounded-lg text-sm text-blue-200 mb-6 flex gap-3 items-start">
                  <span className="text-xl">💡</span>
                  <p>
                    מטרת התהליך: יצירת וידאו שיווקי לעסקים קטנים ובינוניים בישראל.
                    <br/>
                    התרשים להלן מתאר את זרימת העבודה משלב הרעיון ועד לביצוע, עם פיצול לשתי גישות עיקריות.
                  </p>
               </div>
               <Visualizer 
                 selectedStepId={selectedStep ? selectedStep.id : null} 
                 onStepSelect={handleStepSelect} 
               />
            </div>
          </div>

          {/* Right Column: Details (Sticky on Desktop) */}
          <div className="lg:col-span-5 lg:h-full" id="details-panel">
            <div className="sticky top-24 lg:top-0 lg:h-full">
               <DetailPanel step={selectedStep} />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
