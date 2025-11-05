import React from 'react'
import { Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] xl:px-[20vw] 2xl:px-[25vw] py-4'>
      <Routes>
        <Route path='/' element= {<Home/>} />
      </Routes>
    </div>
  )
}

export default App
