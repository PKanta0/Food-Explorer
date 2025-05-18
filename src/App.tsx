import React,{useState} from 'react' 
import Header from './Header'
import Content from "./content"
import './App.css'


function App() {
  
  return (
    <div className="flex flex-col h-screen bg-gray-50">
  
      <Header />

      <Content/>
  
  </div>
  )
}

export default App
