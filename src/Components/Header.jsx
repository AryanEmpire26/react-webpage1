import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'

function Header() {
  return (
    <nav>
        <h1>AryanEmpire.</h1>
        <main>
            <HashLink to= {"/#Home"}>Home</HashLink>
            <Link to= {"/Contact"} >Contact</Link>
            <HashLink to= {"/#About"}>About</HashLink>  {/*div will be given id as about when clicked it will go that div*/}
            <HashLink to= {"/#Brands"}>Brands</HashLink>
            <Link to= "/Services" >Services</Link>
            
        </main>
    </nav>
  )
}

export default Header