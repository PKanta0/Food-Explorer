import React from 'react'
import Info from '../ContentComponant/Info'
import ButtonMore from '../ContentComponant/ButtonMore'

type Props = {}

export default function ContentMain({}: Props) {
  return (
        <main className="flex-1 p-6 overflow-y-auto">

            <h2 className="text-2xl font-semibold text-gray-800 mb-6">MENU</h2>

            <Info />

            <ButtonMore />

        </main>
    )
}