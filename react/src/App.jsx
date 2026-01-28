import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Profile from "./components/Profile"
import State from "./hooks/State"
import Parent from "./components/Parent"
import Form from "./hooks/Form"
import Home from "./pages/Home"
import Service from "./pages/Service"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import Reducer from "./hooks/Reducer"
import {createContext } from "react"
export const userContext=createContext()
const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Products/:id" element={<ProductDetails/>}/>
          <Route path="/state" element={<State/>}/>
            <Route path="/form" element={<Form/>}/>
              <Route path="/Profile" element={<Profile/>}/>
              <Route path="/reducer" element ={<Reducer/>}/>

      </Routes>


      {/*
      <div>App</div>
      <Profile name="Velu" age={20} skills={["HTML","css","js"]}/>
      <Count/>
      <Parent/>
      <Form/>
      */}
    </>
  )
}

export default App
