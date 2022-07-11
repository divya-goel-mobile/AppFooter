import React, { useState } from "react";
import {
  FooterContainer,
  Wrapper,
  Row,
  Column,
  Link,
  Title,
  Logo,
  WrapperTop,
  Heading,
  EmailContainer,
  SubscribeButton,
  EmailWrapper,
} from "../styles/Footer.styles";
import LogoImg from "../assets/logo.png";
function Footer() {
  return (
    <FooterContainer>
      <Wrapper>
        <WrapperTop>
          <Logo src={LogoImg}></Logo>
          <Heading>
            Stay up to date with all Prudential India & Health news
          </Heading>
          <EmailWrapper>
            <EmailContainer placeholder="Email Address" />
            <SubscribeButton>Subscribe</SubscribeButton>
          </EmailWrapper>
        </WrapperTop>
        <Row>
          <Column>
            <Title>Why Prudential</Title>
            <Link href="#">Customers</Link>
            <Link href="#">Enterprise</Link>
            <Link href="#">Resources</Link>
            <Link href="#">Partner Program</Link>
          </Column>
          <Column>
            <Title>Products</Title>
            <Link href="#">Women's critical illness</Link>
            <Link href="#">Product-2</Link>
          </Column>
          <Column>
            <Title>Learn</Title>
            <Link href="#">Docs community</Link>
            <Link href="#">Severity claims</Link>
            <Link href="#">Policy</Link>
          </Column>
          <Column>
            <Title>Contact Us</Title>
            <Link href="#">Sales</Link>
            <Link href="#">Support status</Link>
            <Link href="#">Forums</Link>
          </Column>
          <Column>
            <Title>Company</Title>
            <Link href="#">Blog</Link>
            <Link href="#">About</Link>
            <Link href="#">Press</Link>
            <Link href="#">Sustainability</Link>
          </Column>
        </Row>
      </Wrapper>
    </FooterContainer>
  );
}
export default Footer;
