import styled from 'styled-components'


const LoadingSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  .loading-spinner {
    border: 8px solid #c468ff;
    border-top: 8px solid #6e91f6;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: auto;
    vertical-align: middle;
    animation: spin 0.7s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const LoadingSpinner = () => {
    return (
        <LoadingSpinnerContainer className="loading-spinner-container">
            <div className="loading-spinner"/>
        </LoadingSpinnerContainer>
    )
}

export default LoadingSpinner
