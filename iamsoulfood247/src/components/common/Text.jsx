import styled from "styled-components";

const Text = ({
  content,
  textSize = 'md',
  s_textSize = 'sm',
  bold = false,
  color = 'text',
  center = false,
  padding = 'sm'
  }) => {
  return (
    <Wrapper padding={padding}>
      <TextContent center={center} textSize={textSize} s_textSize={s_textSize} bold={bold} color={color}>{content}</TextContent>
    </Wrapper>
  );
};

export default Text;

const Wrapper = styled.div`
  // max-width: 800px;
  width: 100%;
`;

const TextContent = styled.div`
  width: 100%;
  text-align: ${({center}) => center ? 'center' : null};
  font-size: ${({ theme, textSize }) => theme.fontSize[textSize]};
  font-weight: ${({ bold }) => (bold ? "800" : "normal")};
  color: ${({ theme, color }) => theme.colors[color] ? theme.colors[color] : theme.colors.text};
  @media (max-width: 768px) {
    font-size: ${({ theme, s_textSize }) => theme.fontSize[s_textSize] ? theme.fontSize[s_textSize] : theme.fontSize.sm};
  }
`;
