import { FaGithub, FaLinkedin, FaSchool } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinksWrapper,
  FooterLink,
} from "./FooterCss";
import {
  SocialMedia,
  SocialMediaWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  WebsiteRights,
} from "./FooterCss";

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Sponsorships</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">How it Works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Legal</FooterLinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Privacy</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Learn</FooterLinkTitle>
              <FooterLink to="/">Blog</FooterLink>
              <FooterLink to="/">References</FooterLink>
              <FooterLink to="/">Libraries</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Social Gaming</SocialLogo>
            <WebsiteRights>
              Social Gaming © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://github.com/SebastienAnty"
                target="_blank"
                arial-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/sebastienanty/"
                target="_blank"
                arial-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.bocacode.com/candidates/software-engineer/sebas-anty"
                target="_blank"
                arial-label="School"
              >
                <FaSchool />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
