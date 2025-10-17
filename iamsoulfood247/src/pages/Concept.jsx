import styled from "styled-components";

import Text from '../components/common/Text';
import Button from "../components/common/Button";

import EntreeMenu from "../components/molecules/EntreeMenu";

const Concept = () => {
  return (
    <>
      <div>
        <img
          src="https://res.cloudinary.com/dmxfzfj3z/image/upload/v1760664789/chef_cspgzy.jpg"
          alt=""
          style={{
            width: "100vw",
            transform: "translateY(-30px)",}} />
        <HeroText>
          IAMSOULFOOD247
        </HeroText>
      </div>
      <Content>
        <ContentHeader>IAMSOULFOOD247'S AUTHENTIC SOUL FOOD</ContentHeader>
        <Text
          content={"Bring soulful flavor to your next event with iAmSoulfood247’s authentic catering! Our table offerings are hearty, fresh, and served with the warmth and hospitality you deserve. From business luncheons to family gatherings, or simply treating your team to a meal that feels like home. We offer a range of dishes that satisfy every palate. Choose from our savory starters, wholesome entrées, and signature soul food favorites that celebrate tradition while keeping health in mind. Every bite is rich in flavor and crafted with care, and you can complete your catering experience with our comforting, indulgent desserts. Let us take the stress out of planning and feeding a crowd—our family-owned business is here to make your next catering experience delicious, memorable, and affordable."}
          textSize="lg"
          color="textLight"
          center
          />
        <Text
          content={"*All menu prices are subject to change"}
          textSize="lg"
          color="textLight"
          bold
          center
          />
        <Button
          name={"VIEW OUR PDF MENU"}
          border
          color="surface"
          backgroundColor="textLight"
        />
      </Content>

      <Menu>
        <MenuHeader>ENTRÉES</MenuHeader>
        <MenuGrid>
          <EntreeMenu />
        </MenuGrid>
      </Menu>
    </>
  );
};

export default Concept;

const HeroText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 100%);
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xxx_xl};
  color: ${({ theme }) => theme.colors.surface};
  font-weight: bold;

  @media (max-width: 768px) {
    top: 20%;
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ContentHeader = styled.h1`
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-align: center;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.textLight};
  width: 100%;
`;

const MenuHeader = styled.h2`
  background-color: ${({ theme }) => theme.colors.surface};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: bold;
  width: 100%;
`;

const MenuGrid = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.md};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
