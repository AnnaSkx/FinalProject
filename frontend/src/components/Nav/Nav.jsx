import React from 'react'
import Button from '../UI/Button/Button'
import s from './Nav.module.sass'
import fb2 from './media_nav/fb2.png'
import logo_book from './media_nav/logo_book.png'
import Pages from './media_nav/Pages.png'
import tw2 from './media_nav/tw2.png'
import ink2 from './media_nav/ink2.png'

export default function Nav() {
  return (
    <header className={s.nav}>
        
        <div className={s.social}>
            <div className={s.logo}>
            <a href="#" >
                <img src={logo_book} className={s.logo2} alt="Logo" />
                <img src={Pages} className={s.logo1} alt="Pages" />
            </a>
            </div>
            <div className={s.icon}>
                <a href="#">
                    <img src={fb2} alt="Facebook" />
                </a>
                <a href="#">
                    <img src={tw2} alt="Twitter" />
                </a>
                <a href="#">
                    <img src={ink2} alt="Linkedin" />
                </a>
            </div>
        
        
            <div className={s.menu}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Pages</a>
                <a href="#">Contact Us</a>
            </div>
        </div>
        <Button>Order Today</Button>

    </header>
  )
}