import { FaGithub, FaLinkedin, FaSchool } from "react-icons/fa";
import { FooterContainer, FooterWrap } from "./FooterCss";
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
