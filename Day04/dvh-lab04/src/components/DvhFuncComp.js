import React from 'react'

export default function DvhFuncComp(props) {
  return (
    <div>
      <h2> Demo: Function Component </h2>
      <p>Lay du lieu tu props de hien thi</p>
      <p>Name: {props.name}</p>
      <p>Address: {props.address}</p>
      <p>Company: {props.company}</p>
      <p>Note: {props.note}</p>
      
    </div>
  )
}
