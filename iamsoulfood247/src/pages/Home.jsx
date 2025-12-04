import styled from 'styled-components';

import Text from '../components/common/Text';
import Card from '../components/layout/Card';
import Button from '../components/common/Button';
import LinkButton from '../components/common/LinkButton';


const Home = () => {
  return (
    <PageWrapper>
      <GridStack>
        <Img src="https://iamsoulfood247.s3.us-east-2.amazonaws.com/iAmSoulfood247+(1)/soulfood.jpg" alt="" />
        <WelcomeContainer>
          <Text
            content='Welcome to iAmSoulfood247'
            textSize='xxl'
            s_textSize='lg'
            center={false}
            bold
            color='warning'
          />
          <Text
            content='Soul Food.'
            textSize='xxx_xl'
            s_textSize='xxxl'
            center={false}
            bold
            color='background'
          />
          <Text
            content='Delivered Fresh.'
            textSize='xxxl'
            s_textSize='xxl'
            center={false}
            bold
            color='warning'
          />
          <Text
            content='From authentic soul food to plant-based delights, hibachi, and sushi. Order now or subscribe to our weekly meal plans.'
            textSize='lg'
            s_textSize='md'
            center
            bold
            color='surface'
          />

          <ButtonContainer>
            <Button
              name='Order now!'
              border
              isnavbutton={false}
              color='text'
              backgroundColor='primary'
            />
            <Button
              name='Plan a catering event'
              border
              isnavbutton={false}
              color='text'
              backgroundColor='surface'
            />
          </ButtonContainer>
        </WelcomeContainer>
      </GridStack>

      <section>
        <Content>
          <Card
            title={
              <SquareBackground>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-truck-icon lucide-truck"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
              </SquareBackground>
            }
            size='lg'
            children={
              <Text
              content='Fast Delivery'
              s_textSize='md'
              bold
              />
            }
            footer='Hot & fresh to your door'
            center
          />
          <Card
            title={
              <SquareBackground>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chef-hat-icon lucide-chef-hat"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"/><path d="M6 17h12"/></svg>
              </SquareBackground>
            }
            size='lg'
            children={
              <Text
              content='Chef-Crafted'
              s_textSize='md'
              bold
              />
            }
            footer='Authenic recipes made with love'
            center
          />
          <Card
            title={
              <SquareBackground>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
              </SquareBackground>
            }
            size='lg'
            children={
              <Text
              content='Meal Plans'
              s_textSize='md'
              bold
              center={true}
              />
            }
            footer='Subscribe & save on weekly meals'
            center
          />
          <Card
            title={
              <SquareBackground>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-leaf-icon lucide-leaf"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
              </SquareBackground>
            }
            size='lg'
            children={
              <Text
                content='Plant Based'
                s_textSize='md'
                center
                bold
              />
            }
            footer='Delicious vegetarian & vegan options'
            center
          />
        </Content>
      </section>
    </PageWrapper>
  );
};

export default Home;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 0;
  }
`;
const Img = styled.img`
  grid-area: 1 / 1;
  width: 100vw;
  z-index: 0;
  opacity: 0.8;
  object-fit: fill;
`;
const GridStack = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  position: relative;
  overflow: hidden;
`;
const WelcomeContainer = styled.div`
  grid-area: 1 / 1;
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.sm};
  align-items: center;
  justify-content: center;
  z-index: 1;
  background: linear-gradient(
    to right,
    ${({ theme }) => `${theme.colors.text}90`} 30%,
    rgba(0,0,0,0.1) 90%
  );
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${({theme}) => theme.spacing.xl};
  width: 90vw;

  @media (min-width: 900px) {
    flex-direction: row;
    padding-top: 0;
    gap: ${({theme}) => theme.spacing.xl};
  }
`;

const SquareBackground = styled.div`
  border-radius: ${({theme}) => theme.radii.lg};
  background: linear-gradient(
    to left,
    ${({theme}) => theme.colors.accent} 10%,
    ${({theme}) => theme.colors.warning}  99%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
`;

// const TitleContent = styled(Content)``;
// const ContentCard = styled(Card)`
//   box-shadow: none;
// `;

// const ConceptContent = styled(Content)`
//   background: ${({ theme }) => theme.colors.textLight};
//   display: flex;
//   flex-direction: ${({ flip }) => (flip ? 'row-reverse' : 'row')};
//   justify-content: space-around;
//   align-items: center;
//   padding: 55px;

//   @media (max-width: 768px) {
//     flex-direction: column-reverse !important;
//     padding: 20px;
//   }
// `;

// const Img = styled.img`
//   height: 40vh;
//   width: 40vw;
//   height: auto;
//   border-radius: 1rem;
//   object-fit: cover;
//   @media (max-width: 768px) {
//     width: 100%;
//     height: auto;
//     margin-bottom: 2rem;
//   }
// `;

// const TextWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   gap: 5rem;
//   max-width: 40%;
//   @media (max-width: 768px) {
//     text-align: center;
//     max-width: 100%;
//     gap: 2rem;
//   }
// `;
