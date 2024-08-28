import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

function YourPlan({ step, tariff, setTariff, selected, setSelected, isChecked, setIsChecked }) {

  function handleTariff(e) {
    setIsChecked(e.target.checked)
    if (e.target.checked) {
      setTariff("yearly")
    }
    else {
      setTariff("monthly")
    }
  }
  return (
    <div className='your-plan'>
      <div className='your-plan__box-container'>
        {
          step.page.content[tariff].map((card, index) => (
            <Card
              selected={selected}
              key={index}
              card={card}
              tariff={tariff}
              setSelected={setSelected}
            />
          ))
        }
      </div>
      <div className='switch-block'>
        <label className='switch-block__label' htmlFor="select">
          <span className="switch-block__first-selection">Monthly</span>
        </label>
        <input
          id="select"
          className="switch-block__check"
          type="checkbox"
          onClick={handleTariff}
          checked={isChecked}
          readOnly
        />
        <label htmlFor="select">
          <span className="switch-block__last-selection">Yearly</span>
        </label>
      </div>
    </div>
  )
}

export default YourPlan