import React from 'react'

const FeaturesItems = ({src,para}) => {
  return (
    <div>
        <img src={src} alt="" />
        <p className='fea'>{para}</p>
    </div>
  )
}

export default FeaturesItems