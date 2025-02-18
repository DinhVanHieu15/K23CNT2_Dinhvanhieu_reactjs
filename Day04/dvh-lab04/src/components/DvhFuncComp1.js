import React from 'react'

export default function DvhFuncComp1(props) {
  return (
    <div>
        <h2>Props is Object </h2>
        <p><b>Info:</b></p>
        <p>FullName:{props.renderInfo.fullName}</p>
        <p>Age:{props.renderInfo.age}</p>
        <p>Phone:{props.renderInfo.phone}</p>
    </div>
  )
}
