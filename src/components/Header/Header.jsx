import React from 'react'
import './Header.css'
const handleClick = () => {
  console.log('Button clicked')
}
function Header() {
  return (
    <div className="Header">
      <button onClick={handleClick} className="Button">        CLICK ME      </button>
    </div>
  )
}
export default Header
