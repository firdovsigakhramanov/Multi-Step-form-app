import React from 'react'
import Figures from './Figures'
import Steps from './Steps'

function StepBlock({ steps, step }) {
    return (
        <div className='step-block'>
            <Steps  steps={steps} step={step} />
            <Figures />
        </div>
    )
}

export default StepBlock