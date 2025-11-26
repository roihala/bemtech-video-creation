import React from 'react';
import { 
  BrainCircuit, 
  UserCheck, 
  Wand2, 
  Image, 
  Smile, 
  Layers, 
  Clapperboard,
  HelpCircle 
} from 'lucide-react';

interface IconRendererProps {
  name: string;
  className?: string;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ name, className }) => {
  switch (name) {
    case 'BrainCircuit': return <BrainCircuit className={className} />;
    case 'UserCheck': return <UserCheck className={className} />;
    case 'Wand2': return <Wand2 className={className} />;
    case 'Image': return <Image className={className} />;
    case 'Smile': return <Smile className={className} />;
    case 'Layers': return <Layers className={className} />;
    case 'Clapperboard': return <Clapperboard className={className} />;
    default: return <HelpCircle className={className} />;
  }
};
