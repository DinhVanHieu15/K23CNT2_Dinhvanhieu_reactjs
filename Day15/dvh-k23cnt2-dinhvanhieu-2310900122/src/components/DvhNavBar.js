import React from 'react'
import {Link} from "react-router-dom"


export default function DvhNavBar() {
  return (
    <nav>
      <Link to='/' > Home </Link> |
      <Link to='dvh-list-user' > List Users </Link> |
      <Link to='dvh-creat-user' > Create Users </Link> 
    </nav>
  )
}
