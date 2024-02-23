import React, { useContext } from 'react'
import './Card.css'
import dataContexts from '../context/context'
import { basketContext } from '../context/BasketContext'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
    const { handleAddToWishlist, AddtoBasket } = useContext(dataContexts)
    // const { AddtoBasket } = useContext(basketContext)
    console.log("first it", item)
    return (
        <div className='card__flex'>

            <div class="card" style={{ width: "18rem;" }}>
                <div className='img__div'>
                    <img style={{ width: '200px', height: '300px', objectFit: 'contain' }} src={item.image} class="card-img-top" alt="..." />
                </div>
                <div class="card-body card_body">
                    <h5 class="card-title "><b>{item.name}</b></h5>
                    <span class="card-text"><b>{item.satis}AZN</b></span>
                    <div className='button__div'>
                        <button style={{ width: '65px' }} className='btn btn-danger' onClick={() => {
                            AddtoBasket(item)
                        }}><i class="fa-solid fa-basket-shopping"></i></button>
                        <button style={{ width: '65px' }} className='btn btn-primary' onClick={
                            () => {
                                handleAddToWishlist(item._id)
                            }
                        }><i class="fa-regular fa-heart"></i></button>
                        <Link to={`/${item._id}`}>
                            <button style={{ width: '75px' }} className='btn btn-success'> Detail</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card