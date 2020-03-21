import React from 'react';
import style from './Header.module.css'
import { NavLink } from 'react-router-dom';
import noAvatar from './../../assets/noAvatar.png'
const Header = function (props) {
  debugger
  return (
    <header>
      <div className={style.logo}>
        <a href=""><img src="https://png2.cleanpng.com/sh/28ccc54389905c99b58c4eced6b138a7/L0KzQYm3VME4N51piZH0aYP2gLBuTfxwb5CyeuRqbnSwgrL1hP9uNZpoh9D8LUXkdIaCUvY3bJQ3Udg6Lkm1R4i6VcA0OWY3S6s9NkK2QIq3UcgveJ9s/kisspng-logo-brand-random-icons-5ad592f6dc29f1.9277350315239462309018.png" /></a>
      </div>
      <textarea></textarea>


      <div className={style.aboutUser}>
      {props.loggedIn? <NavLink to={'/login'}>Login</NavLink> : <NavLink to={'/profile'}>
  <div className={style.userName}> <NavLink to={'/profile'}>{props.authUserLogin}</NavLink></div>
          <div className={style.avatarMini}><NavLink to={'/profile'}><img src={props.avatar === null ? noAvatar : props.avatar} alt="" /></NavLink></div>
        </NavLink>}
      

        
      </div>
    </header>
  );
}

export default Header;