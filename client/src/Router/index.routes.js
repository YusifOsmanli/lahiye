import Add from "../Pages/admin/Add/Add"
import AdminLogin from "../Pages/admin/Admin-login/AdminLogin"
import AdminRoot from "../Pages/admin/AdminRoot"
import AdminProducts from "../Pages/admin/Products/AdminProducts"
import AZN from "../Pages/site/20AZN/Index"
import Basket from "../Pages/site/Basket/Basket"
import ContactForm from "../Pages/site/Contact/Contact"
import Detail from "../Pages/site/Detail/Detail"
import Home from "../Pages/site/Home/Home"
import Login from "../Pages/site/Login/Login"
import Register from "../Pages/site/Register/Register"
import SiteRoot from "../Pages/site/SiteRoot/SiteRoot"
import Wishlist from "../Pages/site/Wishlist/Wishlist"

const ROOT = [
   {
      path: "/",
      element: <SiteRoot />,
      children: [
         {
            path: "",
            element: <Home />,
         },
         {
            path: "Login",
            element: <Login />,
         },
         {
            path: "Register",
            element: <Register />,
         },
         {
            path: "wishlist",
            element: <Wishlist/>
         },
         {
            path: "basket",
            element: <Basket/>
         },
         {
            path: "contact",
            element: <ContactForm/>
         },
         {
            path: "20AZN",
            element: <AZN/>
         },
         {
            path:'/:id',
            element:<Detail/>
        }


      ]
   },
   {
      path: "/admin",
      element: <AdminRoot />,
      children: [
        
         {
            path: "add",
            element: <Add />,
         },
         {
            path: "",
            element: <AdminLogin/>,
         },
         {
            path: "products",
            element: <AdminProducts/>,
         },
        

      ]

   }

]
export default ROOT