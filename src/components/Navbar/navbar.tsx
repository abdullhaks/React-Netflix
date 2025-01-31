import "./navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile from "../../assets/profile_img.png";
import carot from "../../assets/caret_icon.svg"
import {useEffect, useRef } from "react";
import { log_out } from "../../js/fireBase";

function navbar() {

  const navRef = useRef<HTMLDivElement|null>(null);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{

      if(navRef.current){

        if(window.scrollY >= 80){
          navRef.current.classList.add('nav-dark')
        }else{
          navRef.current.classList.remove('nav-dark')
        }
      }
    })
  },[])


  return (
 <div ref={navRef}  className="navbar" >
      <div className="nav-left">
        <img src={logo} alt="" />
        <ul>

        <li>Home</li>
        <li>Tv Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Brows by Language</li>

        </ul>
      </div>

      <div className="nav-right">
        <img src={search_icon } alt="" className="icon" />
        <p>children</p>
        <img src={bell_icon} alt="" className="icon"/>

        <div className="nav-profile">
          <img src={profile} alt="" className="profile"/>
          <img src={carot} alt="" />

          <div className="dropdown">
            <p onClick={()=>{log_out()}}>Sign out</p>
          </div>
        </div>
      </div>
</div>
  )
}

export default navbar
