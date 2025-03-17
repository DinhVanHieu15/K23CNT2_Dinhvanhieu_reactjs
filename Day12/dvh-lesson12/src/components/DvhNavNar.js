import React from 'react'
import { Link } from 'react-router-dom'

export default function DvhNavNar() {
  return (
    <div>
        <ul>
           <Link to={"/"}>Home</Link> |
           <Link to={"/about"}>About</Link> |
           <Link to={"/contact"}>Contact</Link> |
           <Link to={"list-user"}>List user</Link> |
           <Link to={"/creat-user"}> Creat user</Link>
        </ul>
    </div>
  )
}
