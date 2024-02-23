import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AdminProducts = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:7070/technical').then(res => {
            setData(res.data)
        })
    }, [])
    const handleDelete = (id) => {
        axios.delete(`http://localhost:7070/technical/${id}`).then(res => {
            setData(data.filter(item => item._id != id))
        })
    }
    return (
        <div style={{ margin: "200px auto 0" }}>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price</th>
                        <th scope="col">Sale</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((item, index) => {
                            return <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <img src={item.image} width={60} height={60} alt="" />
                                </td>
                                <td>{item.name}</td>
                                <td>{item.brand}</td>
                                <td>{item.catagory?.map((item, index) => {
                                    return <span>{item}</span>
                                })}</td>
                                <td>{item.satis}</td>
                                <td>{item.endirim}</td>
                                <td onClick={() => {
                                    handleDelete(item._id)
                                }}>
                                    <button className='btn btn-danger'>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default AdminProducts