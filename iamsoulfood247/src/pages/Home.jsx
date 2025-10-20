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
            src="https://res.cloudinary.com/dmxfzfj3z/image/upload/v1760664790/iAmSoulfood247_logo_snbl2x.png"
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
          <TextWrapper>
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
          </TextWrapper>
          <Img
            src="https://res.cloudinary.com/dmxfzfj3z/image/upload/v1760664790/soulfood_gpheff.jpg"
            alt=""
            />
        </ConceptContent>
      </ContentCard>
 
      <ContentCard>
        <ConceptContent flip>
          <TextWrapper>
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
          </TextWrapper>
          <Img
            src="https://res.cloudinary.com/dmxfzfj3z/image/upload/v1760664789/catering_v59dee.jpg"
            alt=""
            />
        </ConceptContent>
      </ContentCard>

      <ContentCard>
        <ConceptContent>
          <TextWrapper>
            <Text content={"MEAL PLANS"} textSize="xxl" color="surface" bold/>
            <Text
              content={"iAmSoulfood247 Meal Plans are designed for busy individuals who want soulful flavor without compromising health or convenience. Our rotating menus balance tradition with nutrition, offering portioned, ready-to-enjoy meals that fit seamlessly into your lifestyle. With flexible options to match your goals, we make eating well simple, affordable, and full of soul."}
              textSize="lg"
              color="surface"
              />
            <LinkButton
              onClick={() => {
                alert('Meal Plans coming soon!');
              }}
              to="/concept"
              name={"EXPLORE MEAL PLANS"}
              border
              isnavbutton
              color="textLight"
              backgroundColor="surface" />
          </TextWrapper>
          <Img
            src="https://res.cloudinary.com/dmxfzfj3z/image/upload/v1760664790/mealPlan_rw79bd.jpg"
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

  @media (max-width: 768px) {
    gap: 0;
  }
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
  display: flex;
  flex-direction: ${({ flip }) => (flip ? 'row-reverse' : 'row')};
  justify-content: space-around;
  align-items: center;
  padding: 55px;

  @media (max-width: 768px) {
    flex-direction: column-reverse !important;
    padding: 20px;
  }
`;

const Img = styled.img`
  height: 40vh;
  width: 40vw;
  height: auto;
  border-radius: 1rem;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-bottom: 2rem;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  max-width: 40%;
  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
    gap: 2rem;
  }
`;
