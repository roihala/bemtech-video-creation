import { LucideIcon } from 'lucide-react';

export enum StepType {
  COMMON = 'common',
  OPTION_A = 'optionA',
  OPTION_B = 'optionB',
}

export interface FlowStep {
  id: number;
  title: string;
  description: string;
  technicalDetails: string;
  tools: string[];
  type: StepType;
  iconName: string; // We map string to icon component in the UI to keep data clean
}
