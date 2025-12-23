import { useState } from 'react';
import styled from "styled-components";

import Card from '../components/layout/Card';
import Text from '../components/common/Text';

import EventType from "../components/molecules/EventType";
import GuestCount from '../components/molecules/GuestCount';
import Theme from '../components/molecules/Theme';

const Catering = () => {
  const [step, setStep] = useState(0);

  const forms = [
    {title: <Title>
              <svg
              xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke='#f97316' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-sparkles-icon lucide-sparkles"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/></svg>
              <h4>Event Type</h4>
            </Title>,
      form: EventType
    },
    {title: <Title>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>
              <h4>Guest Count</h4>
            </Title>,
      form: GuestCount,
    },
    {title: <Title>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles-icon lucide-sparkles"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/></svg>
              <h4>Theme</h4>
            </Title>,
      form: Theme,
    },
  ];

  const CurrentForm = forms[step].form;

  return (
    <PageWrapper>
      <Div1>
        <Div2>
          <svg
          xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke='#f97316' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-sparkles-icon lucide-sparkles"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/></svg>
          <h1>Catering Wizard</h1>
        </Div2>
        <Text
          content={`Let's plan the perfect catering experince`}
          s_textSize="lg"
          center
        />
      </Div1>
      <FormCard
        title={ forms[step].title }
        children={ <CurrentForm stepSetter={setStep} stepGetter={step} /> }
      />
    </PageWrapper>
  );
};

export default Catering;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.md};
`;
const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.md};
`;
const Div2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  padding-left: 0;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: flex-start;
`;
const FormCard = styled(Card)`
  border: 1px solid gray;
  background: white;
  padding: ${({ theme }) => theme.spacing.lg};
  &:hover {
    background: white;
  }
`;
