import React from 'react';
import { FlowStep, StepType } from '../types';
import { IconRenderer } from './IconRenderer';

interface FlowCardProps {
  step: FlowStep;
  isSelected: boolean;
  onClick: (step: FlowStep) => void;
}

export const FlowCard: React.FC<FlowCardProps> = ({ step, isSelected, onClick }) => {
  const isOptionA = step.type === StepType.OPTION_A;
  const isOptionB = step.type === StepType.OPTION_B;
  const isCommon = step.type === StepType.COMMON;

  // Dynamic styling based on type and selection state
  let borderColor = 'border-slate-700';
  let bgColor = 'bg-slate-800/50';
  let iconColor = 'text-slate-400';
  let hoverBorder = 'hover:border-slate-500';

  if (isSelected) {
    if (isOptionA) {
      borderColor = 'border-cyan-500';
      bgColor = 'bg-cyan-950/40';
      iconColor = 'text-cyan-400';
    } else if (isOptionB) {
      borderColor = 'border-purple-500';
      bgColor = 'bg-purple-950/40';
      iconColor = 'text-purple-400';
    } else {
      borderColor = 'border-blue-500';
      bgColor = 'bg-blue-950/40';
      iconColor = 'text-blue-400';
    }
  } else {
    // Non-selected but specific types
    if (isOptionA) hoverBorder = 'hover:border-cyan-500/50';
    if (isOptionB) hoverBorder = 'hover:border-purple-500/50';
  }

  return (
    <div 
      onClick={() => onClick(step)}
      className={`
        relative p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer 
        flex flex-col items-center gap-3 shadow-lg backdrop-blur-sm
        ${borderColor} ${bgColor} ${hoverBorder}
        transform hover:-translate-y-1
      `}
    >
      <div className={`p-3 rounded-full bg-slate-900/50 ${iconColor}`}>
        <IconRenderer name={step.iconName} className="w-6 h-6" />
      </div>
      <div className="text-center">
        <h3 className="font-bold text-sm md:text-base text-slate-100">{step.title}</h3>
        {isOptionA && <span className="text-xs text-cyan-400 font-medium mt-1 block">אופציה א' - פשוט</span>}
        {isOptionB && <span className="text-xs text-purple-400 font-medium mt-1 block">אופציה ב' - מורכב</span>}
      </div>
      
      {/* Connector dots for visual flow */}
      {isCommon && (
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-slate-700"></div>
      )}
    </div>
  );
};
