import React from 'react'

function Finish({ secondaryResult, tertiaryResult, tariff }) {

    return (
        <div className='finish'>
            <div className='finish-list'>
                <div className='finish-list__second-page'>

                    <div className='finish-list__second-left'>
                        <p>{secondaryResult.title}({tariff.charAt(0).toUpperCase() + tariff.slice(1)})</p>
                        <span>Change</span>
                    </div>
                    <div className='finish-list__second-right'>
                        ${secondaryResult.price}/{secondaryResult.text}
                    </div>
                </div>
                <ul className='finish-list__third-page'>
                    <li className='finish-list__third-item'>
                        <p>{tertiaryResult.title}</p>
                        <div>+${tertiaryResult.price}/{tertiaryResult.text}</div>
                    </li>
                </ul>
            </div>
            <div className='finish-total'>
                <p>Total (per {tariff.slice(0, -2)})</p>
                <div>+${secondaryResult.price + tertiaryResult.price}/{secondaryResult.text}</div>
            </div>
        </div>
    )
}

export default Finish