import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserSignupForm from './UserSignupForm'

import { toggleForm, toggleFormType } from '../../features/user/userSlice'

import styles from "../../styles/User.module.css"
import UserLoginForm from './UserLoginForm'

const UserForm = () => {
    const dispatch = useDispatch()

    const {showform, formType} = useSelector(({user}) => user)

    const closeForm = () => dispatch(toggleForm(false))
    const toggleCurrentFormType = (type) => dispatch(toggleFormType(type))


  return ( showform &&
    <>
        <div className={styles.overlay} onClick={() => dispatch(toggleForm(false))}></div>
        {formType === 'signup'
          ? <UserSignupForm closeForm={closeForm} toggleCurrentFormType={toggleCurrentFormType}/>
          : <UserLoginForm closeForm={closeForm} toggleCurrentFormType={toggleCurrentFormType}/>}
    </>
  )
}

export default UserForm