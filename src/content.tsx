import React from 'react'
import Sidebar from './componant/Sidebar'
import ContentMain from './componant/ContentMain'

type Props = {}

export default function Content({}: Props) {
  return (
      <div className="flex flex-1 overflow-hidden">

          
          <Sidebar/>

          <ContentMain/>
          

      </div>
  )
}