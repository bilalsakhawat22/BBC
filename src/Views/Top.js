import React from "react";

import Twitter from "../assets/twitter.png";
import Discord from "../assets/discord.png";
import OpenSea from "../assets/opensea.png";

export default function Top(){
    return (

        <div className="header">
            <div className="logo">
                <p style={{fontWeight: 550}}>BBC</p>
            </div>
            <div className="socials">
               
                <a className="navbar-logo" href="https://twitter.com/BigBlackCocksio">
                    <img alt="Twitter" className="socialsicon" src={Twitter}/> 
                    {/* <FontAwesomeIcon icon={faTwitter} size='2x' /> */}
                </a>
                <a className="navbar-logo" href="http://discord.gg/7g3aHKZCyW">
                    <img alt="Discord" className="socialsicon" src={Discord}/> 
                    {/* <FontAwesomeIcon icon={faDiscord} size='2x' /> */}
                </a>
                <a className="navbar-logo" href="https://opensea.io/collection/">
                    <img alt="Opensea" className="socialsicon" src={OpenSea}/>
                    {/* <FontAwesomeIcon icon={faShip} size='2x' /> */}
                </a>
               
            </div>
            <p className="summary">
            Big Black Cock Brings 5,000 Ultra Rara NFT Collection that has the potential to pull a Crypto Punk.
                </p>
        </div>
    );
}