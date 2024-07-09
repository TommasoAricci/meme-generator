import React from "react";

export default function Header() {
    return (
        <header className="header">
            <div className="header-first">
                <a href="index.html"><img src="trollface.png" className="trollface" width="70px"/></a>
                <a className="header-title" href="index.html"><h1>Meme Generator</h1></a>
            </div>
            <h3>React Course - Project 3</h3>
        </header>
    );
}