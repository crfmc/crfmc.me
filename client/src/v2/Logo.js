import React from 'react'
import logo from './images/crfmc_logo_basic.svg'

export default function Logo(props) {
  return (
    <div>
      <img
        style={{
          width: props.w || "50px"
        }}
        src={logo}
        alt="Cesar's logo"
      />
    </div>
  )
}