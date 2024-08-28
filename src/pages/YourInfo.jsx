import React from 'react'
import Header from '../layout/Header'
import Button from '../components/Button'

function YourInfo({ emailVerify, phoneVerify, setName, name, setEmail, email, phone, setPhone }) {

    return (
        <div className='your-info'>
            <form className='your-info__form' action="">
                <label htmlFor="">
                    <p>Name</p>
                    <input defaultValue={name !== "firstCode" ? name : null} className={!name ? "empty" : undefined} placeholder='e.g. Stephen King' type="text" onChange={(e) => { setName(e.target.value) }} />
                    <span className={!name ? "" : "de-active"}>This field is required</span>
                </label>
                <label htmlFor="">
                    <p>Email Address</p>
                    <input defaultValue={email !== "firstCode@gmail.com" ? email : null} className={!email ? "empty" : undefined} placeholder='e.g. stephenking@lorem.com' type="email" onChange={(e) => { setEmail(e.target.value) }} />
                    <span className={!emailVerify ? "" : "de-active"}>This field is required</span>
                </label>
                <label htmlFor="">
                    <p>Phone Number</p>
                    <input defaultValue={phone !== "65464" ? phone : null} className={!phone ? "empty" : undefined} placeholder='e.g. +1 234 567 890' type="tel" onChange={(e) => { setPhone(e.target.value) }} />
                    <span className={!phoneVerify ? "" : "de-active"}>This field is required</span>
                </label>
            </form>
        </div >
    )
}

export default YourInfo