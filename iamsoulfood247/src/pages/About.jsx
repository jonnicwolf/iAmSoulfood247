import styled from "styled-components";

import Card from '../components/layout/Card';
import Text from '../components/common/Text';
import Button from "../components/common/Button";

const About = () => {
  return (
    <>
      <Content>
        <img
          src="https://www.dl.dropboxusercontent.com/scl/fi/riqx9f14jygur5je8iya2/chef_team.jpg?rlkey=xl0jqthd0zixcj6nfqj8c2zw1&st=10n24lg0&dl=0"
          alt="chef_team_about_us"
          style={{ width: "100vw", }} />
        <HeroText>ABOUT US</HeroText>
      </Content>

      <Card
        title="OUR STORY"
        size='xxx_xl'
        children={
          <Text
            content={"iAmSoulfood247 was founded with a passion for bringing the rich, comforting flavors of soul food to a wider audience. Our journey began in a small kitchen, where we experimented with traditional recipes passed down through generations, infusing them with a modern twist to cater to contemporary tastes. We believe that soul food is more than just a cuisine; it's a celebration of culture, community, and togetherness. Our mission is to make soul food accessible to everyone, offering delicious, healthy options that nourish both the body and soul. At iAmSoulfood247, we are committed to quality, authenticity, and exceptional service, ensuring that every meal we serve is a memorable experience."}
            textSize="lg" />
        }
        footer={
          <Button
            name="VIEW PHOTO GALLERY"
            border
            color="surface"
            backgroundColor="textLight" />
        }
        center />
      
      <Card
        title={"OUR TEAM"}
        children={
          <TeamWrapper>
            <Card
              title={'EXECUTIVE CHEF'}
              children={
                <img
                  src="https://www.dl.dropboxusercontent.com/scl/fi/fgpmw2xtvhubcdwv1na9j/headshot.jpg?rlkey=khgpa4kexzmu0m25yzioat11k&st=s8i698d5&dl=0"
                  alt="headshot"
                  style={{ width: '400px' }}
                  />}
              footer={
                <Text
                  content={'JAY HART'}
                  textSize="xl" />}
              center />
            <Card
              title={'EXECUTIVE CHEF'}
              children={
                <img
                  src="https://www.dl.dropboxusercontent.com/scl/fi/fgpmw2xtvhubcdwv1na9j/headshot.jpg?rlkey=khgpa4kexzmu0m25yzioat11k&st=s8i698d5&dl=0"
                  alt="headshot"
                  style={{ width: '400px' }}
                  />}
              footer={
                <Text
                  content={'JAY HART'}
                  textSize="xl" />}
              center />
            <Card
              title={'EXECUTIVE CHEF'}
              children={
                <img
                  src="https://www.dl.dropboxusercontent.com/scl/fi/fgpmw2xtvhubcdwv1na9j/headshot.jpg?rlkey=khgpa4kexzmu0m25yzioat11k&st=s8i698d5&dl=0"
                  alt="headshot"
                  style={{ width: '400px' }}
                  />}
              footer={
                <Text
                  content={'JAY HART'}
                  textSize="xl" />}
              center />
          </TeamWrapper>
        }
        center
      />
    </>
  );
};

export default About;

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

const TeamWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg}
`;
