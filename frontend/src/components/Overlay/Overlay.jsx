import { OverlayContainer } from './Overlay.style.js'

export function Overlay({ onClose, children, setPostToShare }) {
  const handleClose = () => {
    onClose(false)
    setPostToShare(undefined)
  }
  return (
    <OverlayContainer className="overlay">
      <div className="overlay__background" onClick={() => handleClose()} />
      <div className="overlay__container">
        <div className="overlay__controls">
          <button
            className="overlay__close"
            type="button"
            onClick={() => handleClose()}
          />
        </div>
        {children}
      </div>
    </OverlayContainer>
  )
}

export default Overlay
