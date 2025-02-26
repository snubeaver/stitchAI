import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { mockMyAgentDetail } from '../../_mock';
import { CreateAgentAgentInfo } from './_components/agent-info';
import { CreateAgentSelectMemory } from './_components/select-memory';
import { CreateAgentSelectPlatform } from './_components/select-platform';
import { CreateAgentFormState } from './_interfaces';

export const CreateAgent = () => {
  const [step, setStep] = useState<'select-platform' | 'select-memory' | 'agent-info'>(
    'select-platform'
  );
  const agent = mockMyAgentDetail.find(i => i.id === '1');
  const methods = useForm<CreateAgentFormState>();

  if (!agent) return;
  return (
    <FormProvider {...methods}>
      {step === 'select-platform' && (
        <CreateAgentSelectPlatform handleNext={() => setStep('select-memory')} />
      )}
      {step === 'select-memory' && (
        <CreateAgentSelectMemory
          handleBack={() => setStep('select-platform')}
          handleNext={() => setStep('agent-info')}
        />
      )}
      {step === 'agent-info' && (
        <CreateAgentAgentInfo handleBack={() => setStep('select-memory')} />
      )}
    </FormProvider>
  );
};
