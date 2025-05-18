import React from 'react'
import type { Meal } from "../food/Food"

type Props = {
    meals: Meal[]
    onLoadMore: () => void
  }

const handleClick = () =>{
    console.log("hallo")
}



export default function ButtonMore({ meals, onLoadMore }: Props) {
  return (
      <div className="flex justify-center mt-6">
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow"
            onClick={onLoadMore}
          >
              MORE
          </button>
      </div>
  )
}