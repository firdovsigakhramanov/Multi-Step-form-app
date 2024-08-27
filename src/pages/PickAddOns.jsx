import React from 'react'
import Box from '../components/Box'

function PickAddOns({ step, tariff, setSelectedPickAddOns, selectedPickAddOns,tertiaryStep }) {
    return (
        <div className='pick-add-ons__container'>
            {
                step.page.content[tariff].map((box, index) => (
                    <Box
                        box={box}
                        key={index}
                        setSelectedPickAddOns={setSelectedPickAddOns}
                        selectedPickAddOns={selectedPickAddOns}
                        tertiaryStep={tertiaryStep}
                    />
                ))
            }
        </div>
    )
}

export default PickAddOns