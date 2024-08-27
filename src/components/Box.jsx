import React from 'react'

function Box({ box, setSelectedPickAddOns, selectedPickAddOns, tertiaryStep }) {
    const isSelected = selectedPickAddOns?.id == box.id;

    return (
        <div className={isSelected ? "box active" : "box"} onClick={() => setSelectedPickAddOns(box)}>
            <div className='box-left'>
                <div className='box__check-icon'>
                    <input type="checkbox" name="" id="" checked={isSelected} readOnly />
                </div>
                <div className='box-content'>
                    <h3>{box.title}</h3>
                    <p>{box.context}</p>
                </div>
            </div>


            <div className='box-right'>
                +${box.price}/{box.text}
            </div>
        </div>
    )
}

export default Box