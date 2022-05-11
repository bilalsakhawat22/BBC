import React from "react";
import Home from "../assets/home.png";
import Twitter from "../assets/twitter.png";
import Instagram from "../assets/instagram.png";
import Discord from "../assets/discord.png";
import OpenSea from "../assets/opensea.png";
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHome, faShip } from "@fortawesome/free-solid-svg-icons";
export default function Top(){
    return (

        <div class="header">
            <div class="logo">
                <p style={{fontWeight: 550}}>BBC</p>
            </div>
            <div class="socials">
               
                <a class="navbar-logo" href="https://twitter.com/PixelBeanz">
                    <img class="socialsicon" src={Twitter}/> 
                    {/* <FontAwesomeIcon icon={faTwitter} size='2x' /> */}
                </a>
                <a class="navbar-logo" href="https://discord.gg/9FfnUmcu">
                    <img class="socialsicon" src={Discord}/> 
                    {/* <FontAwesomeIcon icon={faDiscord} size='2x' /> */}
                </a>
                <a class="navbar-logo" href="https://opensea.io/collection/">
                    <img class="socialsicon" src={OpenSea}/>
                    {/* <FontAwesomeIcon icon={faShip} size='2x' /> */}
                </a>
               
            </div>
            <p className="summary">
            Big Black Cock Brings 5,000 Ultra Rara NFT Collection that has the potential to pull a Crypto Punk.
                </p>
        </div>
    );
}