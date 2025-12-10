import styled from 'styled-components';

import Text from '../components/common/Text';
import Card from '../components/layout/Card';
import Button from '../components/common/Button';

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
            center
            bold
            color='warning'
          />
          <Text
            content='Soul Food.'
            textSize='xxx_xl'
            s_textSize='xxxl'
            center
            bold
            color='background'
          />
          <Text
            content='Delivered Fresh.'
            textSize='xxxl'
            s_textSize='xxl'
            center
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
              name='Order Now'
              border
              isnavbutton={false}
              color='text'
              backgroundColor='primary'
            />
            <Button
              name='Cater With Us'
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

      <section>
        <h1 style={{textAlign: 'center'}}>Explore Our Menu</h1>
        <Text
          content='From soul food classics to plant-based delights'
          textSize='xl'
          s_textSize='lg'
          center
        />

        <ExploreMenuContainer>
          <SquareWrap color='accent'>
            <GridStack>
              <Img
                src='https://iamsoulfood247.s3.us-east-2.amazonaws.com/iAmSoulfood247+(1)/bbq.jpg'
              />
              <GridStackContent>
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-drumstick-icon lucide-drumstick"><path d="M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23"/><path d="m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59"/></svg>
                <Text
                  content='Soul Food'
                  textSize='xxl'
                  s_textSize='xl'
                  color='surface'
                  center
                  bold
                />
              </GridStackContent>
            </GridStack>
          </SquareWrap>
          <SquareWrap color='primary'>
            <GridStack>
              <Img
                src='https://iamsoulfood247.s3.us-east-2.amazonaws.com/iAmSoulfood247+(1)/salad.jpg'
              />
              <GridStackContent>
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-leaf-icon lucide-leaf"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                <Text
                  content='Plant-Based'
                  textSize='xxl'
                  s_textSize='xl'
                  color='surface'
                  center
                  bold
                />
              </GridStackContent>
            </GridStack>
          </SquareWrap>
          <SquareWrap color='accent'>
            <GridStack>
              <Img
                src='https://iamsoulfood247.s3.us-east-2.amazonaws.com/iAmSoulfood247+(1)/hibachi.jpg'
              />
              <GridStackContent>
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame-icon lucide-flame"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>
                <Text
                  content='Hibachi'
                  textSize='xxl'
                  s_textSize='xxl'
                  color='surface'
                  center
                  bold
                />
              </GridStackContent>
            </GridStack>
          </SquareWrap>
          <SquareWrap color='secondary'>
            <GridStack>
              <Img
                src='https://iamsoulfood247.s3.us-east-2.amazonaws.com/iAmSoulfood247+(1)/sushi.jpg'
              />
              <GridStackContent>
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-fish-icon lucide-fish"><path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"/><path d="M18 12v.5"/><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"/><path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"/><path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"/><path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"/></svg>
                <Text
                  content='Sushi'
                  textSize='xxl'
                  s_textSize='xxl'
                  color='surface'
                  center
                  bold
                />
              </GridStackContent>
            </GridStack>
          </SquareWrap>
        </ExploreMenuContainer>
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
  width: 100%;
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
  
  @media (min-width: 900px) {
    padding: 2rem;
  }
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

const ExploreMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media (min-width: 900px) {
    flex-direction: row;
    padding-top: 0;
    gap: ${({theme}) => theme.spacing.xl};
  }
`;
const GridStackContent = styled.div`
  grid-area: 1/1;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 900px) {
  }
`;
const SquareWrap = styled.div`
  border-radius: ${({theme}) => theme.radii.lg};
  overflow: hidden;
  background: ${({ theme, color }) => `${theme.colors[color]}`};
  margin-top: 2rem;
`;

