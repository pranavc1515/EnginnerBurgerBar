import React from 'react'
import {AiFillInstagram ,AiFillTwitterSquare,AiFillGithub} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
        <div>
        <h2>Engineer Burger Bar</h2>

        <p>We are trying to give you best test possible</p>
        <br/>
        <em>We give attention to genuine feedback.</em>

        <strong>All right received @EnginnerBurgerBar</strong>
    </div>

    <aside>
        <h4>Follow Us</h4>
        <a href="https://twitter.com/thepranavc1515"><AiFillTwitterSquare/></a>        
        <a href="https://instagram.com/pranavc_15"><AiFillInstagram/></a>        
        <a href="https://github.com/pranavc1515"><AiFillGithub/></a>        

    </aside>
    </footer>
  )
}

export default Footer