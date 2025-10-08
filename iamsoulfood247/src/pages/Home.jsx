import styled from 'styled-components';

import Text from '../components/common/Text';
import Card from '../components/layout/Card';
import LinkButton from '../components/common/LinkButton';

const Home = () => {
  return (
    <PageWrapper>
      <Card center style={{ boxShadow: 'none', margin: '2rem 0 0 0' }}>
        <TitleContent>
          <img
            src="https://dl.dropboxusercontent.com/scl/fi/5761osx5w55gqeakjwjlw/iAmSoulfood247_logo.png?rlkey=hw7vcgy24mfj9712wdgu16oqf&st=qxjum5u0"
            alt="iAmSoulfood247 Logo"
            style={{ width: "400px", marginBottom: "20px" }}
          />
          <Text
            content={"IAMSOULFOOD247.COM"}
            textSize="xxl"
            bold />
        </TitleContent>
      </Card>

      <ContentCard>
        <ConceptContent>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '5rem',
            maxWidth: "40%" }}>
            <Text content={"OUR CONCEPT"} textSize="xxl" color="surface" bold />
            <Text
              content={"iAmSoulfood247 2 Go aims to revolutionize the meal prep industry by offering delicious, healthy soul food options that cater to busy individuals seeking nutritious meals without sacrificing flavor. Our mission is to make soul food accessible, affordable, and health-conscious, promoting a balanced lifestyle while celebrating the rich culinary heritage of soul food."}
              textSize="lg"
              color="surface" />
            <LinkButton
              to="/concept"
              name={"MORE ABOUT US"}
              border
              isnavbutton
              color="textLight"
              backgroundColor="surface" />
          </div>
          <Img
            src="https://dl.dropboxusercontent.com/scl/fi/jt7zghw8189lio026no70/soulfood.jpg?rlkey=ww72w9lurnz692r53volvt77p&st=0msnug71"
            alt=""
            />
        </ConceptContent>
      </ContentCard>

      <ContentCard>
        <ConceptContent>
          <Img
            src="https://dl.dropboxusercontent.com/scl/fi/jevkllqaur7xrgkizv4ij/catering.jpg?rlkey=ss7svgetibrf8lrwi514e7zsp&st=chhe2cpw"
            alt=""
             />
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '5rem',
            maxWidth: "40%" }}>
            <Text content={"LET US CATER"} textSize="xxl" color="surface" bold/>
            <Text
              content={"iAmSoulfood247 Catering brings the heart of soulful cooking to your gatherings, combining rich flavors with health-conscious preparation. Whether it’s a corporate lunch, family celebration, or large-scale event, we deliver meals that are both comforting and nourishing. Our goal is to make authentic soul food accessible and memorable for every occasion—celebrating tradition while supporting modern lifestyles."}
              textSize="lg"
              color="surface"
              />
            <LinkButton
              to="/catering"
              name={"WHAT WE OFFER"}
              border
              isnavbutton
              color="textLight"
              backgroundColor="surface" />
          </div>
        </ConceptContent>
      </ContentCard>

      <ContentCard>
        <ConceptContent>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '5rem',
            maxWidth: "40%" }}>
            <Text content={"MEAL PLANS"} textSize="xxl" color="surface" bold/>
            <Text
              content={"iAmSoulfood247 Meal Plans are designed for busy individuals who want soulful flavor without compromising health or convenience. Our rotating menus balance tradition with nutrition, offering portioned, ready-to-enjoy meals that fit seamlessly into your lifestyle. With flexible options to match your goals, we make eating well simple, affordable, and full of soul."}
              textSize="lg"
              color="surface"
              />
            <LinkButton
              to="/concept"
              name={"EXPLORE MEAL PLANS"}
              border
              isnavbutton
              color="textLight"
              backgroundColor="surface" />
          </div>
          <Img
            src="https://dl.dropboxusercontent.com/scl/fi/ekl4xx8i8pq7hdtn5zpwi/mealPlan.jpg?rlkey=e93b1s5ysl1t3wabkfcvii1ps&st=qto52op8"
            alt=""
            />
        </ConceptContent>
      </ContentCard>
    </PageWrapper>
  );
};

export default Home;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
const TitleContent = styled(Content)``;
const ContentCard = styled(Card)`
  box-shadow: none;
`;
const ConceptContent = styled(Content)`
  background: ${({ theme }) => theme.colors.textLight};
  flex-direction: row;
  justify-content: space-around;
  padding: 55px;
`;

const Img = styled.img`
  width: 800px;
  height: 800px;
`;
