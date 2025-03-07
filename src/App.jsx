
import { useState } from 'react'
import Herosec from './hero'
import Cuisine from './cuisine'
import Recipe from './recipes'
import Blog from './blog'
import Footer from './footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Herosec/>
     <Cuisine/>
     <Recipe/>
     <Blog/>
     <Footer/>
    </>
  )
}

export default App
