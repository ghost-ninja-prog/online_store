import React from 'react'
import { Link } from 'react-router-dom'

import { ROUTES } from '../../utils/routes'

import LOGO from '../../images/logo.svg'
import AVATAR from '../../images/avatar.jpg'

import st from '../../styles/Header.module.css'


const Header = () => {
  return (
    <div className={st.header}>
      <div className={st.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="logo" />
        </Link>
      </div>

      <div className={st.info}>
        <div className={st.user}>
          <div className={st.avatar} style={{ backgroundImage: `url(${ AVATAR })` }}>
          
          </div>
          <div className={st.username}>
            Guest
          </div>
        </div>

        <form className={st.form}>

          <div className={st.icon}>
            <svg className='icon'>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
          </div>

          <div className={st.input}>
            <input 
              type='search'
              name='search'
              placeholder='Search for anyting...'
              autoComplete='off'
              onChange={() => {}}
              value=""
            />
          </div>

          { false && <div className={st.box}></div> }
        </form>

        <div className={st.account}>
          <Link to={ROUTES.HOME} className={st.favourites}>
            <svg className={st['icon-fav']}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
            </svg>
          </Link>
          <Link to={ROUTES.CART} className={st.cart}>
            <svg className={st['icon-cart']}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
            </svg>
            <span className={st.count}>2</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header