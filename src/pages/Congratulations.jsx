import React from 'react'
import check from '../assets/img/Group 2.svg'

function Congratulations() {
    return (
        <div className='congrat'>
            <div className='congrat-img'>
                <img src={check} alt="" />
            </div>
            <h3>Thank you!</h3>
            <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    )
}

export default Congratulations