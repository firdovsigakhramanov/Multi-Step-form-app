import React from 'react'

function Step({ item, step }) {
    const { id, info } = item
    return (
        <div className='step-container'>
            <div className={step === id ? "step-container__left-side active" : "step-container__left-side"}>{id}</div>
            <div className='step-container__right-side'>
                <p>STEP {id} </p>
                <span>{info.toUpperCase()}</span>
            </div>
        </div>
    )
}

export default Step