import React from 'react'
import { Link } from 'react-router-dom'

import style from '../../styles/Footer.module.css'

import { ROUTES } from "../../utils/routes"

import LOGO from "../../images/logo.svg"

const Footer = () => {
  return (
    <section className={style.footer}>
      <div className={style.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="Stuff" />
        </Link>
      </div>
      <div className={style.rights}>
        Developed by {" "}
        <a
          href='https://github.com/ghost-ninja-prog'
          target='_blank'
          rel='noreferrer'
        > 
          Demon
        </a>
      </div>
      <div className={style.socials}>
        <a
          href='https://www.instagram.com'
          target='_blank'
          rel='noreferrer'
        >
          <svg className='icon'>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>
        <a
          href='https://www.facebook.com'
          target='_blank'
          rel='noreferrer'
        >
          <svg className='icon'>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
          </svg>
        </a>
        <a
          href='https://www.youtube.com'
          target='_blank'
          rel='noreferrer'
        >
          <svg className='icon'>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
          </svg>
        </a>
      </div>

    </section>
  )
}

export default Footer