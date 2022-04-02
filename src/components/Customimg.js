import React from 'react'

export default function Customimg({ imgSrc, pt }) {
  
  return <div className="custom-img" style={{paddingTop :pt}}>
      <img src={imgSrc} alt="" />
  </div>;
}
