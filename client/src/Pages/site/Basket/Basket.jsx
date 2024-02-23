import React, { useContext } from 'react'
import dataContexts from '../../../context/context'
// import { basketContext } from '../../../context/BasketContext'

const Basket = () => {
    // const { basket, handleIncrease, handleDecrease} = useContext(dataContexts)
    // const {basketItem, hanldeBasketIncrease,handleDelete,hanldeBasketDecrease } = useContext(basketContext)
    // const {AddtoBasket}=useContext(dataContexts)
    const {basket,DecreaseBtn,
        increaseBtn,}=useContext(dataContexts)

    let totalPrice = 0
    return (
        <div className='basket'>
            <table className="table table-striped">
                <thead>
                    <tr>
                        {/* <th scope="col">id</th> */}
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Category</th>
                        <th scope="col">Decrease</th>
                        <th scope="col">Count</th>
                        <th scope="col">Increase</th>
                        <th scope="col">TotalPrice</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        basket.map((item, index) => {
                            console.log("item" ,item)
                            totalPrice += item.totalPrice

                            return (
                                <tr key={index}>
                                    {/* <th scope="row">{item.index + 1}</th> */}
                                    <td><img width={'100px'} height={'100px'} src={item.product.image} alt="" /></td>
                                    <td style={{ padding: '15px', marginTop: '20px' }}>{item.product.name}</td>
                                    <td style={{ padding: '15px' }}>{item.product.satis}</td>
                                    <td>{item.product.brand}</td>
                                    <td>{item.product.catagory?.map((item, index) => {
                                        return <span>{item}</span>
                                    })}
                                    </td>
                                    <td style={{ padding: '15px' }}><button className='btn btn-danger' onClick={() => DecreaseBtn(item)}>-</button></td>
                                    <td style={{ padding: '15px' }}>{item.count}</td>
                                    <td style={{ padding: '15px' }}><button className='btn btn-success' onClick={() => increaseBtn(item)}>+</button></td>
                                    <td style={{ padding: '15px' }}>{item.totalPrice}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            <h1 style={{ padding: '40px' , color:'black'}}>Total Price:{totalPrice}</h1>
        </div>
    )
}

export default Basket