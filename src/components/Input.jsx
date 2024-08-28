import React from 'react'

function Input({className,type,onChange,placeholder}) {
  return (
    <input className={className} type={type} onChange={onChange} placeholder={placeholder} />
  )
}

export default Input