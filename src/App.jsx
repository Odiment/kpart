import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import PatentDetay from "./pages/PatentDetay/PatentDetay";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Messsage";
import MyGigs from "./pages/myGigs/MyGigs";
import Kurumsal from "./pages/kurumsal/Kurumsal";
import Hizmetlerimiz from "./pages/hizmetlerimiz/Hizmetlerimiz";
import BilgiMerkezi from "./pages/bilgimerkezi/BilgiMerkezi";
import Iletisim from "./pages/iletisim/Iletisim";
import "./app.scss";



import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";



function App() {

  const Layout = () =>{
    return(
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
     
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/gigs",
          element:<Gigs />
        },
        {
          path:"/gig/:patentId",
          element:<PatentDetay />
        },
        {
          path:"/orders",
          element:<Orders />
        },
        {
          path:"/mygigs",
          element:<MyGigs />
        },
        {
          path:"/add",
          element:<Add />
        },
        {
          path:"/messages",
          element:<Messages />
        },
        {
          path:"/message/:id",
          element:<Message />
        },
        {
          path:"/kurumsal",
          element:<Kurumsal />
        },
        {
          path:"/hizmetlerimiz",
          element:<Hizmetlerimiz />
        },
        {
          path:"/bilgimerkezi",
          element:<BilgiMerkezi />
        },
        {
          path:"/iletisim",
          element:<Iletisim />
        },


     
      ]
    },
  ]);
  return (
    <div>
       <RouterProvider router={router} />
     
      
    </div>
  )
}

export default App;
