import React from 'react'
import Header from '../layout/Header'
import Button from '../components/Button'

function YourInfo() {
    return (
        <div className='your-info'>
                <form className='your-info__form' action="">
                    <label htmlFor="">
                        <p>Name</p>
                        <input placeholder='e.g. Stephen King' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        <p>Email Address</p>
                        <input placeholder='e.g. stephenking@lorem.com' type="email" name="" id="" />
                    </label>
                    <label htmlFor="">
                        <p>Phone Number</p>
                        <input placeholder='e.g. +1 234 567 890' type="tel" name="" id="" />
                    </label>
                </form>
        </div >
    )
}

export default YourInfo