import React from 'react'

function Header({title, subtitle}) {
  return (
    <h2 className="title">
          {title}
          <span className="under-title">{subtitle}.</span>
        </h2>
  )
}

export default Header