import React,{useState} from 'react'
import { useCategory } from './CategoryContext'



export default function Header({}) {

  const { searchTerm, setSearchTerm } = useCategory()

  return (
      <header className="bg-white shadow px-6 py-4 text-2xl font-bold text-gray-800">
          <h1 className="text-2xl font-bold">🍽️ Food Finder</h1>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="ค้นหาอาหาร..."
            className="ml-4 px-3 py-1 rounded text-black w-64"
          />
      </header>

  )
}