import React, { useContext } from 'react'
import Card from '../../../Components/Card'
import dataContexts from '../../../context/context'

const AZN = () => {
    const { data } = useContext(dataContexts)

    const filteringData = data.filter(item => item.satis < 20)
    return (
        <div className='container mt-5' style={{minHeight:'70vh'}}>
            <div className="row">
                {
                    filteringData.map((item,index)=>{
                        return    <div key={index} className="col-md-3 mb-2">
                        <Card  item={item}/>
                    </div>
                    })
                }
             
            </div>

        </div>
    )
}

export default AZN