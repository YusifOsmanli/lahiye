import React, { useContext } from 'react'
import dataContexts from '../../../context/context'

const Wishlist = () => {
    const{wish,handleDeleteWishlist}=useContext(dataContexts)
  return (
    <div>
        <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Category</th>
                        <th scope="col">delete</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        wish.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    
                                    <td>{item.name}</td>
                                    <td>{item.satis}</td>
                                    <td>{item.brand}</td>
                                <td>{item.catagory?.map((item, index) => {
                                    return <span>{item}</span>
                                })}</td>
                                    <td><button className='btn btn-danger' onClick={()=>{
                                        handleDeleteWishlist(item._id)
                                    }}>delete</button></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
    </div>
  )
}

export default Wishlist