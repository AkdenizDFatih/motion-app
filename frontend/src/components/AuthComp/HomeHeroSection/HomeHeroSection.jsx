import {
    HeroSectionContainer, ConnectMessageP, StoresWrapper, StoreIconButton,
    SocialLink, MainContainer, LogoDiv, FooterContainer, SocialLinksWrapper
} from './HomeHeroSection.style.js'
import MotionLogoWhite from '../../../assets/images/logo_white.png'
import AppleLogo from '../../../assets/svgs/apple.svg'
import GoogleLogo from '../../../assets/svgs/google.svg'
import TwitterLogo from '../../../assets/svgs/twitter_icon.svg'
import FacebookLogo from '../../../assets/svgs/facebook_icon.svg'
import InstagramLogo from '../../../assets/svgs/instagram_icon.svg'


const HomeHeroSection = () => {

    return (
        <HeroSectionContainer>
            <MainContainer>
                <LogoDiv to='/'>
                    <img src={MotionLogoWhite} alt="logo"/>
                    <p>Motion</p>
                </LogoDiv>
                <ConnectMessageP>
                    Connect with friends and the world <br/> around you with Motion.
                </ConnectMessageP>
                <StoresWrapper>
                    <StoreIconButton>
                        <img src={AppleLogo} alt="Apple Logo"/>
                    </StoreIconButton>
                    <StoreIconButton>
                        <img src={GoogleLogo} alt="Google Logo"/>
                    </StoreIconButton>
                </StoresWrapper>
            </MainContainer>
            <FooterContainer>
                <SocialLinksWrapper>
                    <SocialLink src={TwitterLogo} alt="Twiter Icon"/>
                    <SocialLink src={FacebookLogo} alt="Facebook Icon"/>
                    <SocialLink src={InstagramLogo} alt="Instagram Icon"/>
                </SocialLinksWrapper>
                <p>© Motion 2023. All rights reserved. </p>
            </FooterContainer>
        </HeroSectionContainer>
    )
}

export default HomeHeroSection