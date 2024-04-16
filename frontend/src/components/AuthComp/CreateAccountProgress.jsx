import styled from 'styled-components'


export const ProgressCirclesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  height: 3rem;

  > div {
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.colors.lightGray};
  }

  div:nth-of-type(${props => props.step}) {
    background-color: black;
    border-color: black;
  }
`

const CreateAccountProgress = ({step}) => {
    return (
        <ProgressCirclesContainer step={step}>
            {step &&
                <>
                    <div className={'circle'}></div>
                    <div className={'circle'}></div>
                    <div className={'circle'}></div>
                </>
            }
        </ProgressCirclesContainer>
    )
}

export default CreateAccountProgress