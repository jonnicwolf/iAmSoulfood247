import styled from "styled-components";

const Text = ({ content }) => {
  return (
    <Wrapper>
      <Content>{content}</Content>
    </Wrapper>
  );
};

export default Text;

const Wrapper = styled.div`
  text-align: center;
  max-width: 800px;
  padding: ${({ theme }) => theme.spacing.md};
`;
const Content = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.text};
`;