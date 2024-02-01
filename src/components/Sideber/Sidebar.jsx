import React from 'react'

import st from '../../styles/Sidebar.module.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <section className={st.sidebar}>
      <div className={st.title}>
        CATEGORIES
      </div>
      <nav>
        <ul className={st.menu}>
          <li>
            <NavLink to={`/categories/${1}`}>
              Link
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={st.footer}>
        <a href='/help' target='_blank' className={st.link}>
          Help
        </a>
        <a href='/terms' target='_blank' className={st.link} style={{textDecoration: 'underline'}}>
          Terms & Conditions
        </a>
      </div>
    </section>
  )
}

export default Sidebar