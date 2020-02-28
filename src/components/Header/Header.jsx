import React from 'react';
import avatar from './../../avatar.jpg';
import style from './Header.module.css'

const Header = function() {
    return(
        <header>
      <div className={style.logo}>
      <a href=""><img src="https://png2.cleanpng.com/sh/28ccc54389905c99b58c4eced6b138a7/L0KzQYm3VME4N51piZH0aYP2gLBuTfxwb5CyeuRqbnSwgrL1hP9uNZpoh9D8LUXkdIaCUvY3bJQ3Udg6Lkm1R4i6VcA0OWY3S6s9NkK2QIq3UcgveJ9s/kisspng-logo-brand-random-icons-5ad592f6dc29f1.9277350315239462309018.png"/></a>
      </div>
      <textarea></textarea>
        <div className={style.aboutUser}>
          <a href="">
            <div className={style.userName}> <a href='#'> Roman Pavlenko</a></div>
            <div className={style.avatarMini}><a href="#"><img src={avatar} alt=""/></a></div>
          </a>
        </div>
    </header>
    );
}

export default Header;