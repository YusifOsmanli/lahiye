import React, { useContext } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import dataContexts from '../../context/context'

const Header = () => {
    const{handleSearch}=useContext(dataContexts)
    console.log(handleSearch)
    return (
        <div className='header__bir'>
            <div className='header__iki'>
                <div className='icon__div'>
                    <i class="fa-solid fa-location-pin"></i> <p><Link to={'contact'} style={{color:'white'}}>Mağazanızı tapın</Link> </p>
                </div>
                <div className='icon__div'>
                    <i class="fa-solid fa-question"></i> <p>Əlavə yardım </p>
                </div>
                <div className='icon__div'>
                    <i class="fa-solid fa-user"></i> <p ><Link to={'Login'} style={{color:'white'}}>Giriş</Link> / <Link to={'Register'} style={{color:'white'}}>Qeydiyyat</Link></p>
                </div>
            </div>
            <div className='header__uc'>
                <div>
                    <Link to={''}><img src="https://thetoyshop.az/image/catalog/site_logo.png" alt="" /></Link>
                </div>
                <div className='absolute'>
                    <input type="text" className='search' placeholder= '  Search..' onChange={(e)=>{
                        handleSearch(e.target.value)
                    }}/>
                    <button className='button__header'>Axtar</button>
                </div>
                <div className='sebet'>
                <Link><i class="fa-solid fa-basket-shopping" ></i></Link>
                <p className='margin__p'><Link to={'basket'} style={{color:'white', fontSize:'20px'}}>Sebet</Link></p>
                <p>0.00<i class="fa-solid fa-manat-sign"></i></p>
                </div>
                <div className='flags'>
                    <div>
                        <img src="https://thetoyshop.az/catalog/language/az-az/az-az.png" alt="" />
                    </div>
                    <div>
                        <img src="https://thetoyshop.az/catalog/language/ru-ru/ru-ru.png" alt="" />
                    </div>
                    <div>
                        <img src="https://thetoyshop.az/catalog/language/en-gb/en-gb.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header