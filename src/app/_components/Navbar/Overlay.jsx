import React from 'react'

const Overlay = ({isOpen, toggleNavbar}) => {
  return (
    <>
      <div
                onClick={toggleNavbar}
                className={`fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}></div>
    </>
  )
}

export default Overlay
