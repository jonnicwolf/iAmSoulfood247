import styled from "styled-components";

import Card from '../components/layout/Card';
import Text from '../components/common/Text';
import CateringForm from "../components/molecules/CateringForm";

const Catering = () => {
  return (
    <PageWrapper>
      <Content>
        <img
          src="https://www.dl.dropboxusercontent.com/scl/fi/b0zcubv54iod2mwmfu3d7/volodymyr-leush-sDvfA2ElW24-unsplash.jpg?rlkey=5wctji1pnndcpzbyokppzxkmj&st=b4nntiid&dl=0"
          alt="catering_hero"
          style={{ width: "100vw" }} />
        <HeroText>CATERING</HeroText>
      </Content>

      <Card
        title="GREAT FOOD AND GREAT SERVICE AT A GREAT PRICE"
        size='xxl'
        children={
          <Text
            content={"Let us bring the soulful flavors of iAmSoulfood247 to your next event! Our catering services are perfect for any occasion, whether it's a corporate gathering, family reunion, or special celebration. We offer a variety of delicious soul food dishes that are sure to satisfy every palate. From savory entrees to mouth-watering sides and decadent desserts, our menu is designed to impress. Let us take care of the food so you can focus on enjoying your event with friends and family. Contact us today to learn more about our catering options and to place your order!"}
            textSize="lg" />
        }
        center />
      <CateringForm />
    </PageWrapper>
  );
};

export default Catering;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroText = styled.div`
  position: absolute;
  top: 50%;
  font-size: ${({ theme }) => theme.fontSize.xxx_xl};
  color: ${({ theme }) => theme.colors.surface};
  font-weight: bold;
`;
