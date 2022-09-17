import React from 'react'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  padding: '0px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

const Modal = ({ show, children, close }) => {
  
    if(show===false){
      
        return null
      }
        else{
         
  return  (
    
    <>
      <div style={OVERLAY_STYLES}  className= " bg-inherit" />
      <div style={MODAL_STYLES}>
        <button onClick={close} className="btn btn-sm btn-circle absolute right-2 top-2 bg-blue-200 z-auto">x</button>
        {children}
      </div>
    </>
    
  )
}
}

export default Modal