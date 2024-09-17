import React from 'react'
import Browse from './Browse'
import Logins from '../Logins'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'



const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Logins/>
        },
        {
            path : "/browse",
            element : <Browse/>
        }
    ])
  return (
    <div>
       <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body