import React from 'react'
import { filterContext } from './context/FilterContext'

const MyLife = () => {

    const {result} = filterContext()

  return (
    <div>
        <h1>My LIfe</h1>

   

        {result}
      
    </div>
  )
}

export default MyLife
