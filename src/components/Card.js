import React from 'react';

const Card = (props) => {
    const { name, id, email } = props
    return (

        < div className='bg-purple dib br2 pa2 ma2 grow bw1  shadow-5' >

            <img alt='robot' src={`https://www.robohash.org/${id}?200x200`} />
            <h2 className='tc '>{name}</h2>
            <p className='tc '>{email}</p>

        </ div >
    )
}

export default Card;