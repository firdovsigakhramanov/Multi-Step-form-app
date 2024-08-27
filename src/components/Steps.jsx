import React from 'react'
import Step from './Step'

function Steps({ steps, step }) {
    return (
        <div className='steps'>
            {
                steps.map(item => (
                    <Step key={item.id} item={item} step={step} />
                ))
            }
        </div>
    )
}

export default Steps