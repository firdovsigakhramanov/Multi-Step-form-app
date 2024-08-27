import React from 'react'

function Header({ children }) {
  return (
    <div className='header'>
      <h1 className='page-title'>{children?.title}</h1>
      <p className='page-description'>{children?.description}</p>
    </div>
  )
}

export default Header