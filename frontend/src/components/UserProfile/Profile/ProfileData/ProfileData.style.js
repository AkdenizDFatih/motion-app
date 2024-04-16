import styled from 'styled-components'


export const ProfileAboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2.5rem 3.8rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  .left-container {
    display: flex;
    flex-wrap: wrap;
  }

  h3 {
    font-size: 0.8rem;
    font-weight: 400;
    margin-bottom: 0.8rem;
  }

  p {
    line-height: 1.6;
    hyphens: auto;
  }

  .about {
    flex: 0 0 100%;
    margin-bottom: 2rem;
  }

  .email {
    flex: 65%;
    padding-right: 1rem;
  }

  .phone {
    flex: 35%;
  }
`

export const LikedThingsContainer = styled.ul`
  width: 100%;
  display: flex;
  justify-content: ${props => props.centered ? 'center' : 'unset'};
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 0.5rem;
  list-style: none;

  li {
    background-color: rgba(0,0,0,0.05);
    border-radius: 999px;
    font-size: 0.875rem;
    padding: 0.7rem 1rem;
    text-transform: capitalize;
    
    button {
      background: none;
      border: none;
      margin-left: 1rem;
      opacity: 0.3;
      cursor: pointer;
    }
  }
`
