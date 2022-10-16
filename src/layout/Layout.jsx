import styled from 'styled-components';
const Layout = ({ children }) => {
  return (
    <Wrapper>
      <StyledLayout>{children}</StyledLayout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const StyledLayout = styled.div`
  width: 40rem;
  height: 100vh;
  display: flex;
  background-color: beige;
  justify-content: center;
`;

export default Layout;
