import styled from 'styled-components'


export const SubSectionNavContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  column-gap: 2rem;
`

export const ProfileSubNavItem = styled.button`
  background: none;
  border: none;
  text-align: left;

  width: 100%;
  max-width: 5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 3px solid;
  border-color: ${props => props.filterActive ? '#ad73fd' : 'transparent'};
  cursor: pointer;
  padding: 2rem 0;

  .nav-item-text {
    color: ${props => props.filterActive ? 'black' : props.theme.colors.lightGray};
    font-size: 1rem;
    text-transform: capitalize;
    margin-top: 0.4rem;
  }

  .nav-item-counter {
    font-size: 1.5rem;
  }

  &:hover {
    border-color: #ad73fd;
  }
`
