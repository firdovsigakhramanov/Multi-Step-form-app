import React from 'react'

function Card({ card, tariff, setSelected, selected }) {
    const isSelected = selected?.id == card.id
    return (
        <div className={isSelected ? "card active" : "card"} onClick={() => setSelected(card)}>
            <div className='card-img'>
                <img src={card.img} alt="" />
            </div>
            <div className='card-main'>
                <h3>{card.title}</h3>
                <p>${card.price}/{card.text}</p>
                {tariff == "yearly" && <span>2 months free</span>}
            </div>
        </div>
    )
}

export default Card