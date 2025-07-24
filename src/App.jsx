import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Porfolio/Portfolio'
import NotFound from './components/NotFound/NotFound'



const myRouter = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      {  path: '/home', element: <Home /> },
      {  path: '/Flora-React', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/portfolio', element: <Portfolio /> },
      { path: '/contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ]
  }
]
)

function App() {

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  )
}

export default App
