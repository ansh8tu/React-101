import React from "react"
import ReactLogo from "../images/react-logo-small.png"
export default function Navbar () {
    return (
        <>
            <nav>
                <img className="nav--logo" src={ReactLogo} width="40px" alt="React-Logo"></img>
                <h3 className="nav--title">ReactFacts</h3>
                <h4 className="nav--info">Anshuman Mishra</h4>
            </nav>
        </>
    )
}