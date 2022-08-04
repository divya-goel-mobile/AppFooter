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
  WrapperBottom,
  SocialMediaButton,
} from "../styles/Footer.styles";
import LogoImg from "../assets/logo.png";
import FacebookImg from "../assets/facebook.png";
import InstagramImg from "../assets/instagram.png";
import YouTubeImg from "../assets/youtube.png";
import FooterStrip from "./FooterStrip";
import "../styles/main.css";

function Footer() {
  return (
    <>
      <FooterContainer>
        <Wrapper>
          {/* <WrapperTop>
          <Logo src={LogoImg}></Logo>
          <Heading>
            Stay up to date with all Prudential India & Health news
          </Heading>
          <EmailWrapper>
            <EmailContainer placeholder="Email Address" />
            <SubscribeButton>Subscribe</SubscribeButton>
          </EmailWrapper>
        </WrapperTop> */}
          <Row>
            <Column>
              <Title>Products</Title>
              <Link href="#">Pulse by Prudential</Link>
              <Link href="#">Health Insurance</Link>
              <Link href="#">Life Insurance</Link>
              <Link href="#">Wealth Accumulation</Link>
              <Link href="#">PruPanel Connect</Link>
              <Link href="#">Promotions</Link>
              <Link href="#">International Clients</Link>
            </Column>
            <Column>
              <Title>Services</Title>
              <Link href="#">FAQ's</Link>
              <Link href="#">Claims</Link>
              <Link href="#">Payments</Link>
              <Link href="#">Contact Us</Link>
              <Link href="#">Support</Link>
              <Link href="#">Financial Tools</Link>
            </Column>
            <Column>
              <Title>Company</Title>
              <Link href="#">About Us</Link>
              <Link href="#">Annual Reports</Link>
              <Link href="#">Newsroom</Link>
            </Column>
            <Column>
              <Title>Disclaimer and Intellctual Right Notice</Title>
              <Link href="#">Privacy Notice</Link>
            </Column>
            <Column>
              <Title>Priority Programme</Title>
              <Link href="#">Ascend by Prudential</Link>
              <Link href="#">OPUS by Prudential</Link>
              <Link href="#">Pursue</Link>
            </Column>
            <Column>
              <Title>Prudential India</Title>
              <Link href="#">Prudential customer service centre</Link>
              <Link href="#">5 Straits View</Link>
              <Link href="#">1800 3330 333</Link>
              <Link href="#">Prudential corporation Office</Link>
            </Column>
          </Row>
        </Wrapper>
      </FooterContainer>
      <WrapperBottom>
        <div>
          <p style={{ color: "white", fontSize: 11 }}>
            VHIS Provider Registration No: 00026 (effective from 28 February
            2019)
          </p>
          <p style={{ color: "white", fontSize: 11 }}>
            © Copyright 2022 Prudential Singapore. All rights reserved.
          </p>
        </div>
        <div>
          <SocialMediaButton src={FacebookImg}></SocialMediaButton>
          <SocialMediaButton src={InstagramImg}></SocialMediaButton>
          <SocialMediaButton src={YouTubeImg}></SocialMediaButton>
        </div>
      </WrapperBottom>
      <FooterStrip></FooterStrip>
    </>
  );
}
export default Footer;
