import React from 'react'
import Header from '../layout/Header'
import Button from '../components/Button'

function YourInfo({ setName, name, setEmail, email, phone, setPhone }) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let numberRegex = /^\d+$/;
    return (
        <div className='your-info'>
            <form className='your-info__form' action="">
                <label htmlFor="">
                    <p>Name</p>
                    <input value={name !== "firstCode" ? name : null} className={!name && "empty"} placeholder='e.g. Stephen King' type="text" onChange={(e) => { setName(e.target.value) }} />
                    <span className={!name ? "" : "de-active"}>This field is required</span>
                </label>
                <label htmlFor="">
                    <p>Email Address</p>
                    <input value={email !== "firstCode@gmail.com" ? email : null} className={!email && "empty"} placeholder='e.g. stephenking@lorem.com' type="email" onChange={(e) => { setEmail(e.target.value) }} />
                    <span className={!email.match(regex) ? "" : "de-active"}>This field is required</span>
                </label>
                <label htmlFor="">
                    <p>Phone Number</p>
                    <input value={phone !== "65464" ? phone : null} className={!phone && "empty"} placeholder='e.g. +1 234 567 890' type="tel" onChange={(e) => { setPhone(e.target.value) }} />
                    <span className={!phone.match(numberRegex) ? "" : "de-active"}>This field is required</span>
                </label>
            </form>
        </div >
    )
}

export default YourInfo