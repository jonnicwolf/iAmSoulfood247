import styled from "styled-components";

import Card from '../components/layout/Card';
import Text from '../components/common/Text';
import CateringForm from "../components/molecules/CateringForm";
import EventType from "../components/molecules/EventType";

const Catering = () => {
  return (
    <PageWrapper>
      <Div1>
        <Div2>
          <svg
          xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke='#f97316' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-sparkles-icon lucide-sparkles"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/></svg>
          <h1>AI Catering Wizard</h1>
        </Div2>
        <Text
          content='Let our AI help you plan the perfect catering experince'
          s_textSize="lg"
          center
        />
      </Div1>
      <FormCard
        title={
          <Div2>
            <svg
            xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke='#f97316' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-sparkles-icon lucide-sparkles"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/></svg>
            <h4>Event Type</h4>
          </Div2>
        }
        children={
          <EventType/>
        }
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
`;
const FormCard = styled(Card)`
  border: 1px solid gray;
  background: white;
  padding: ${({ theme }) => theme.spacing.lg};
  &:hover {
    background: white;
  }
`

