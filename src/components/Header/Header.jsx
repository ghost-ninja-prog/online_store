import React from 'react'
import { Link } from 'react-router-dom'

import { ROUTES } from '../../utils/routes'

import LOGO from '../../images/logo.svg'
import AVATAR from '../../images/avatar.jpg'

import style from '../../styles/Header.module.css'


const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="logo" />
        </Link>
      </div>

      <div className={style.info}>
        <div className={style.user}>
          <div className={style.avatar} style={{ backgroundImage: `url(${ AVATAR })` }}>
          
          </div>
          <div className={style.username}>
            Guest
          </div>
        </div>

        <form className={style.form}>

          <div className={style.icon}>
            <svg className='icon'>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
          </div>

          <div className={style.input}>
            <input 
              type='search'
              name='search'
              placeholder='Search for anyting...'
              autoComplete='off'
              onChange={() => {}}
              value=""
            />
          </div>

          { false && <div className={style.box}></div> }
        </form>

        <div className={style.account}>
          <Link to={ROUTES.HOME} className={style.favourites}>
            <svg className={style['icon-fav']}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
            </svg>
          </Link>
          <Link to={ROUTES.CART} className={style.cart}>
            <svg className={style['icon-cart']}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
            </svg>
            <span className={style.count}>2</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header