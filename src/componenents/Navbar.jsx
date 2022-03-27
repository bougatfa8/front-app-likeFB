import React from 'react'
import {Link} from "React-router-dom"
export default function Navbar({user}) {
  return (
    <div className="navbar">
        <span className="logo">
            <Link className="link" to="/" >likefb</Link>
        </span>{
            user?(
        <ul className="list">
            <li className="listItem">
                <img src="https://i.unimedias.fr/2015/01/19/Kristina-9-ans-la-plus-belle-petite-fille-du-monde.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=675&w=1200" alt="" className="avatar" />
            </li>
            <li className="listItem">
                ahmed bougatfa
            </li>
            <li className="listItem">
                logout
            </li>
        </ul>
        ):(<Link className="login" to="/login">login </Link>)
    }
        </div>
  )
}
