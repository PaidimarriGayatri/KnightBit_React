import React from 'react'
import './Knight.css'
const FranchiseItem = ({img,h6,p}) => {
  return (
   <>
   <span id="fr">
      <img id="a" src={img} alt="" />
      <h6 id="b">{h6}</h6>
      <p id="c">{p}</p>
    </span>
   </>
  )
}

export default FranchiseItem