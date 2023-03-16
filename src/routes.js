import Home from './page/home/Home'
import HomeLayout from './page/home/index'
import About from './page/about/About'
import Contact from './page/contact/Contact'
import FavoriList from './page/FavoriList'
import Favori from './page/Favori'
import AutLayout from './page/autLayout'
import Login from './page/autLayout/Login'




const routes=[
    {
        path: "/",
        element: <HomeLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "contact",
            element: <Contact/>,
          },
          {
            path: "favorite",
            element: <Favori />,
          },
          {
            path: "favoritelist",
            element: <FavoriList />,
          },
          
        
        ],
        
        
      },
      {
        path:'/auth',
        element:<AutLayout />,
        children:[
          {
            path:'login',
            element:<Login/>
          }
        ]
      },
     
]




export default routes