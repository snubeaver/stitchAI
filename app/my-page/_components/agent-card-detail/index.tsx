import { useState } from 'react';

import { mockMyAgentDetail } from '../../_mock';
import { AgentCardDetailMain } from './_components/main';
import { AgentCardDetailSelectMemory } from './_components/select-memory';

export const AgentCardDetail = () => {
  const [step, setStep] = useState<'main' | 'select-memory'>('main');

  const agent = mockMyAgentDetail.find(i => i.id === '1');

  if (!agent) return;

  if (step === 'main') return <AgentCardDetailMain handleNext={() => setStep('select-memory')} />;
  if (step === 'select-memory')
    return <AgentCardDetailSelectMemory handlePrev={() => setStep('main')} />;

  return;
};
