import { useState } from 'react';

import { mockMyAgentDetail } from '../../_mock';
import { AgentCardDetailMain } from './_components/main';
import { AgentCardDetailSelectMemory } from './_components/select-memory';
import { useGetUser } from '@/api/get-user';

export const AgentCardDetail = ({ params }: { params: { agnetIdx: number } }) => {
  const [step, setStep] = useState<'main' | 'select-memory'>('main');

  const { data: user } = useGetUser();

  const agent = user?.agent[params.agnetIdx];

  if (!agent) return;

  if (step === 'main')
    return (
      <AgentCardDetailMain
        handleNext={() => setStep('select-memory')}
        agent={{
          id: agent.id,
          name: agent.name,
          description: agent.description,
          socialLink: agent.socialLink,
          memoryHash: agent.memory,
          platform: agent.platform,
          memory: {
            id: agent.memory,
            name: agent.memory,
          },
        }}
      />
    );
  if (step === 'select-memory')
    return <AgentCardDetailSelectMemory handlePrev={() => setStep('main')} />;

  return;
};
