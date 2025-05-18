import React from 'react'

type Props = {}

export default function ButtonMore({}: Props) {
  return (
      <div className="flex justify-center mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow">
              MORE
          </button>
      </div>
  )
}