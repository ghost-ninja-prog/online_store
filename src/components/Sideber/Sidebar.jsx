import React from 'react'

import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import style from '../../styles/Sidebar.module.css'


const Sidebar = () => {

    const { list } = useSelector(({ categories }) => categories )
    console.log(list)

  return (
    <section className={style.sidebar}>
      <div className={style.title}>
        CATEGORIES
      </div>
      <nav>
        <ul className={style.menu}>
          {list.map(({ id, name }) => (
            <li key={id}>
              <NavLink 
                className={({ isActive }) => `${style.link} ${isActive ? style.active : ""}`}
                to={`/categories/${id}`}>
                { name }
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={style.footer}>
        <a href='/help' target='_blank' className={style.link}>
          Help
        </a>
        <a href='/terms' target='_blank' className={style.link} style={{textDecoration: 'underline'}}>
          Terms & Conditions
        </a>
      </div>
    </section>
  )
}

export default Sidebar