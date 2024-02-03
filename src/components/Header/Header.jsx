import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { ROUTES } from '../../utils/routes'

import LOGO from '../../images/logo.svg'
import AVATAR from '../../images/avatar.jpg'

import style from '../../styles/Header.module.css'
import { toggleForm } from '../../features/user/userSlice'


const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const { currentUser } = useSelector(({ user }) => user)

  const [values, setValues] = useState({name: 'Guest', avatar: AVATAR})


  const handleClick = () => {
    if(!currentUser) dispatch(toggleForm(true))
    else navigate(ROUTES.PROFILE)
  }

  useEffect(() => {
    if(!currentUser) return

    setValues(currentUser)

  }, [currentUser])



  return (
    <div className={style.header}>
      <div className={style.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="logo" />
        </Link>
      </div>

      <div className={style.info}>
        <div className={style.user} onClick={handleClick}>
          <div className={style.avatar} style={{ backgroundImage: `url(${ values.avatar })` }}>
          
          </div>
          <div className={style.username}>
            { values.name }
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