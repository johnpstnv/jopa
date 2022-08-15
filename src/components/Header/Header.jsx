import React from 'react'
import './Header.css'
const handleClick = () => {
  console.log('Button clicked')
}
function Header() {
  return (
    <div className="Header">
      <div>
        <button onClick={handleClick} className="Button">
          CLICK ME
        </button>
      </div>
    </div>
  )
}
export default Header
