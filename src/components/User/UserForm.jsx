import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserSignupForm from './UserSignupForm'

import { toggleForm } from '../../features/user/userSlice'

import styles from "../../styles/User.module.css"

const UserForm = () => {
    const dispatch = useDispatch()

    const {showform} = useSelector(({user}) => user)


  return (
    showform && 
    <>
        <div className={styles.overlay} onClick={() => dispatch(toggleForm(false))}></div>
        <UserSignupForm />
    </>
  )
}

export default UserForm