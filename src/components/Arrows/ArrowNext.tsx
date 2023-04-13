import React from 'react'
import Arrow from '../../assets/img/Stroke 1.png'

import "./styles.scss"

function ArrowNext({onClick}:any) {
  return (
    <button style={{border:'none', padding: '15px'}} onClick={onClick} className='arrowNext'>
        <img src={Arrow} alt="next"/>
    </button>
  )
}

export default ArrowNext