"use client";
import Link from "next/link";
import { useEffect,useState} from "react";

export default function Header() {
    const [light,setLight] = useState(false);
    const [menuOpen,setMenuOpen] = useState(false);

    //Theme handling 
    useEffect(() => { 
        setLight(localStorage.getItem("theme")==="light");
    },[]);
    useEffect(() => { 
       document.body.classList.toggle("light",light);
    localStorage.setItem("theme",light?"light":"dark");
    },[light]);

    return(
        <header className="nav" role="banner">
        <div className ="container nav-inner">
            {/*Logo*/}
        <Link className ="logo" href="/" aria-label="Invents home">
        <span className="logo-badge" aria-hidden="true">IN</span>
        <span>Invents</span>
        </Link>
        {/*Hamburger Button (mobile*/}
        <button
            className="hamburger"
            aria-label="Toggle menu"
            onclick={() => setMenuOpen(!menuOpen)} >
             ttt 
             </button>
             {/*Navigation*/}
             <nav aria-label="Primary">
                <ul className={menuOpen ? "show" : ""}>
               <li><a href ="/#about">About</a></li> 
               <li><a href ="/#Programs">About</a></li> 
               <li><a href ="/#Process">About</a></li> 
               <li><a href ="/#Showcase">About</a></li> 
               <li><a href ="/Blog">About</a></li> 
               <li><a href ="/Portal">About</a></li> 
               <li><a className ="cta" href ="/#contact">Apply / Invest</a></li>  
               </ul>
               </nav>
               {/*Theme toggle*/}
               <button 
               className="theme-toggle"
               aria-label="Toggle light/dark"
               onclick={()=> setLight(v => !v)} 
               >  
               🌗
               </button>
               </div>
               </header>
    );
}