import dataContexts from './context/context'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import ROOT from './Router/index.routes';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import toast, { Toaster } from 'react-hot-toast'
import { BasketProvider } from './context/BasketContext';

const router = createBrowserRouter(ROOT)

function App() {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [detail, setDetail] = useState([]);
  const [wish, setWish] = useState(localStorage.getItem('getWish') ? JSON.parse(localStorage.getItem('getWish')) : [])
  const [user, setUser] = useState({});
  const [userAdmin, setUserAdmin] = useState({});
  const [searchData, setSearchData] = useState([]);
  const [searching, setSearching] = useState([]);
  // const [basket, setBasket] = useState(localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : [])
  // const [homeCounter, setHomeCounter] = useState(localStorage.getItem("counter") ? Math.max(0, parseInt(localStorage.getItem("counter"))) : 0)
  const [basket,SetBasket]=useState(localStorage.getItem("BasketItem")?JSON.parse(localStorage.getItem("BasketItem")):[])


  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLogin")
      ? JSON.parse(localStorage.getItem("isLogin"))
      : false
  );
  const [isLoginAdmin, setIsLoginAdmin] = useState(
    localStorage.getItem("isLoginAdmin")
      ? JSON.parse(localStorage.getItem("isLoginAdmin"))
      : false
  );
  const [product, setProduct] = useState([])

  useEffect(() => {
    const token = localStorage.getItem("token");
    const tokenAdmin = localStorage.getItem("tokenAdmin");
    if (token) {
      const decode = jwtDecode(token);
      setUser(decode);
    }
    if (tokenAdmin) {
      const decodeAdmin = jwtDecode(tokenAdmin);
      setUserAdmin(decodeAdmin);
    }
    console.log(user);
  }, []);
  useEffect(() => {
    axios.get("http://localhost:7070/users").then((res) => {
      setUserData(res.data);
     
    });
  }, []);

  // useEffect(() => {
  //   axios.get("http://localhost:7070/hiq").then((res) => {
  //     setData(res.data);
  //     // setSearchData(res.data);
  //   });
  // }, []);

  // const handleSearch = (e) => {
  //   const searching = e.target.value.trim().toLowerCase();
  //   console.log(searching);
  //   if (searching !== "") {
  //     const searchResult = data.filter(
  //       (item) =>
  //         item &&
  //         item.title &&
  //         item.title.trim().toLowerCase().includes(searching)
  //     );
  //     setSearchData([...searchResult]);
  //     console.log(searchResult);
  //     setSearching(searching);
  //   }
  // };
  const handleSearch=(searchValue)=>{
    if(searchValue==""){
      setProduct([...searching])
    }
    else{
      const target=searching.filter((item)=>item.name.toLowerCase().trim().includes(searchValue))
      setProduct([...target])
    }
  }
  const handleAddToWishlist = (item) => {
    const target = wish.find(prod => prod._id == item._id)
    if (target) {
      toast.error('item wishde var')
    } else {
      setWish([...wish, item])
      localStorage.setItem('getWish', JSON.stringify([...wish, item]))
      toast.success('elave olundu')
    }
  }

  const handleDeleteWishlist = (item) => {
    const target = wish.find(product => product._id == item._id)
    const indexOf = wish.indexOf(target)
    wish.splice(indexOf, 1)
    setWish([...wish])
    localStorage.setItem('getWish', JSON.stringify([...wish]))
    toast.success('silindi')
  }

  const AddtoBasket=(product)=>{
    console.log(product)
    const target=basket.find(item=>item.product._id==product._id)
     if(target){
       target.count +=1
       target.totalPrice=target.product.satis*target.count
       SetBasket([...basket])
       localStorage.setItem("BasketItem",JSON.stringify([...basket]))
       toast.success("added basket")
     }
     else{
       const BasketProduct={
         id:product._id,
         product:product,
         count:1,
         totalPrice:product.satis
       }
       SetBasket([...basket,BasketProduct])
       localStorage.setItem("BasketItem",JSON.stringify([...basket,BasketProduct]))
     }
   }
   const DecreaseBtn=(product)=>{
    const target=basket.find(item=>item.id==product.id)
     if(target.count>1){
       target.count -=1
       target.totalPrice=target.product.satis*target.count
       SetBasket([...basket])
       localStorage.setItem("BasketItem",JSON.stringify([...basket]))
     }
   }
   const increaseBtn=(product)=>{
    const target=basket.find(item=>item.id==product.id)
   
    target.count +=1
    target.totalPrice=target.product.satis*target.count
    SetBasket([...basket])
    localStorage.setItem("BasketItem",JSON.stringify([...basket]))
     
   }
   const removeFromBasket=(item)=>{
     const target=basket.find(prod=>prod._id==item._id)
     basket.splice(basket.indexOf(target),1)
     SetBasket([...basket])
     localStorage.setItem("BasketItem",JSON.stringify([...basket]))
     toast.success("deleted from basket")
   }


  useEffect(() => {
    axios.get("http://localhost:7070/technical").then(res => {
      console.log(res.data)
      setProduct(res.data)
      setSearching(res.data)
      setData(res.data)

    })
  }, [])
  const value = {
    data,
    setData,
    userData,
    setUserData,
    detail,
    setDetail,
    user,
    setUser,
    isLogin,
    setIsLogin,
    userAdmin,
    setUserAdmin,
    isLoginAdmin,
    setIsLoginAdmin,
    searchData,
    setSearchData,
    handleSearch,
    searching,
    handleAddToWishlist,
    handleDeleteWishlist,
    wish,
    product,
    DecreaseBtn,
    increaseBtn,
    AddtoBasket,
    basket,
    removeFromBasket
  };

  console.log(basket)
  return (
    <div className="App">
      <BasketProvider>


        <dataContexts.Provider value={value}>
          <RouterProvider router={router} />
          <Toaster />
        </dataContexts.Provider>
      </BasketProvider>
    </div>
  );
}

export default App;

