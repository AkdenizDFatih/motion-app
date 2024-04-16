import {Outlet} from 'react-router-dom'
import HomeHeroSection from './HomeHeroSection/HomeHeroSection.jsx'
import styled from 'styled-components'
import {HeroSectionContainer} from './HomeHeroSection/HomeHeroSection.style.js'


const AuthenticationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
`

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  
  > div {
    width: 100%;
    height: 100%;
  }

  @media (${props => props.theme.breakPoints.md}) {
    flex-direction: row;

    ${HeroSectionContainer} {
      width: 40%;
    };

    ${AuthenticationContainer} {
      width: 60%;
    }
  }
`

const AuthenticationLayout = () => {
    return <HomePageContainer>
        <HomeHeroSection/>
        <AuthenticationContainer>
            <Outlet/>
        </AuthenticationContainer>
    </HomePageContainer>
}

export default AuthenticationLayout