import React from 'react'

type Props = {}

export default function Sidebar({}: Props) {
  return (
      <aside className="w-64 bg-white border-r border-gray-200 p-6 overflow-y-auto">
          <nav className="space-y-3 text-gray-700 font-medium text-left">
              <div className="hover:text-blue-600 cursor-pointer">⭐ Menu Today</div>
              <div className="hover:text-blue-600 cursor-pointer">📋 Menu</div>
              <div className="hover:text-blue-600 cursor-pointer">🐄 Beef</div>
              <div className="hover:text-blue-600 cursor-pointer">🍗 Chicken</div>
              <div className="hover:text-blue-600 cursor-pointer">🍰 Dessert</div>
          </nav>
      </aside>
  )
}