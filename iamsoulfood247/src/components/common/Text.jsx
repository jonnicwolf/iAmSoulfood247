import styled from "styled-components";

const Text = ({ content, textSize = 'md', bold = false, color = 
'text'
 }) => {
  return (
    <Wrapper>
      <Content textSize={textSize} bold={bold} color={color}>{content}</Content>
    </Wrapper>
  );
};

export default Text;

const Wrapper = styled.div`
  text-align: center;
  max-width: 800px;
  padding: ${({ theme }) => theme.spacing.textSize};
`;
const Content = styled.p`
  font-size: ${({ theme, textSize }) => theme.fontSize[textSize]};
  font-weight: ${({ bold }) => (bold ? "600" : "normal")};
  color: ${({ theme, color }) => theme.colors[color] ? theme.colors[color] : theme.colors.text};
`;
