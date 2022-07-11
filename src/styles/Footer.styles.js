import styled from "styled-components";

export const FooterContainer = styled.nav`
  padding: 80px 60px;
  justify-content: center;
  margin-top: 100vh;
  align-items: center;
  @media (max-width: 100%) {
    padding: 70px 30px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: gray;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  &:hover {
    color: #ff9c00;
    transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: gray;
  margin-bottom: 40px;
  font-weight: bold;
`;
export const WrapperTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
  flex-direction: column;
`;
export const Logo = styled.img`
  max-width: 80px;
  height: 80px;
`;
export const Heading = styled.p`
  font-size: 14px;
  color: blue;
`;
export const EmailWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
`;
export const EmailContainer = styled.input`
  width: 200px;
  height: 30px;
  background: none;
  border-color: blue;
  margin: 20px;
`;
export const SubscribeButton = styled.button`
  width: 100px;
  height: 35px;
  background: lightBlue;
  border-color: blue;
`;
