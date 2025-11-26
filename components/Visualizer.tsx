import React from 'react';
import { FLOW_STEPS } from '../constants';
import { FlowStep, StepType } from '../types';
import { FlowCard } from './FlowCard';

interface VisualizerProps {
  selectedStepId: number | null;
  onStepSelect: (step: FlowStep) => void;
}

export const Visualizer: React.FC<VisualizerProps> = ({ selectedStepId, onStepSelect }) => {
  const commonSteps = FLOW_STEPS.filter(s => s.type === StepType.COMMON);
  const optionASteps = FLOW_STEPS.filter(s => s.type === StepType.OPTION_A);
  const optionBSteps = FLOW_STEPS.filter(s => s.type === StepType.OPTION_B);

  return (
    <div className="relative w-full max-w-2xl mx-auto py-8">
      
      {/* Central Connector Line */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-slate-800 z-0 hidden md:block"></div>

      <div className="relative z-10 flex flex-col gap-12">
        
        {/* Common Steps Section */}
        <div className="flex flex-col gap-8 items-center">
          {commonSteps.map(step => (
            <div key={step.id} className="w-full md:w-2/3">
              <FlowCard 
                step={step} 
                isSelected={selectedStepId === step.id} 
                onClick={onStepSelect} 
              />
            </div>
          ))}
        </div>

        {/* Branch Split */}
        <div className="relative">
          {/* Visual split lines for desktop */}
          <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-full h-8 border-t-2 border-slate-700 rounded-t-3xl"></div>
          <div className="hidden md:flex justify-between w-full text-xs text-slate-500 mb-4 px-12">
             <span className="text-cyan-500 font-bold">מסלול פשוט</span>
             <span className="text-purple-500 font-bold">מסלול מורכב</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Option A Column */}
            <div className="flex flex-col gap-6">
               <div className="md:hidden text-center text-cyan-400 font-bold mb-2 text-lg">אופציה א' - פשוט</div>
               {optionASteps.map(step => (
                 <FlowCard 
                    key={step.id}
                    step={step} 
                    isSelected={selectedStepId === step.id} 
                    onClick={onStepSelect} 
                  />
               ))}
            </div>

            {/* Option B Column */}
            <div className="flex flex-col gap-6">
                <div className="md:hidden text-center text-purple-400 font-bold mb-2 text-lg mt-8 md:mt-0">אופציה ב' - מורכב</div>
                {optionBSteps.map((step, idx) => (
                    <div key={step.id} className="relative">
                        {/* Connecting line inside Option B */}
                        {idx < optionBSteps.length - 1 && (
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-purple-900/50 z-0"></div>
                        )}
                        <FlowCard 
                            step={step} 
                            isSelected={selectedStepId === step.id} 
                            onClick={onStepSelect} 
                        />
                    </div>
               ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
