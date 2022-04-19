import React from 'react'
import { Navbar, Card } from './components'
import Data from './data/data'
import './app.css';

const App = () => {

const cards = Data.map((item)=>(
    <Card id={item.id} {...item}/>
));

  return (
      <>
        <Navbar/>
        <div className='cards'>{cards}</div>
      </>

  )
}

export default App