import React from 'react'

const Results = ({ zimo, price }) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })

    return (
        <div className='results'>
            {zimo ? <h3>Everyone pays: {formatter.format(price)}</h3> : <h3>Shooter pays:  {formatter.format(price)}</h3>}
        </div>
    )
}

export default Results
