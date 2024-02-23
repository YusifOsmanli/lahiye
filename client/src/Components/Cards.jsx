import React, { useContext } from 'react'
import dataContexts from '../context/context'
import Card from './Card'
import './Cards.css'

const Cards = () => {
    const { product } = useContext(dataContexts)
    return (
        <div className='cards'>
            <div className="container">
                <div className="row">
                    {
                        product.slice(0,4).map((item, index) => {
                            return <div key={index} className="col-3">
                                <Card  item={item} />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Cards