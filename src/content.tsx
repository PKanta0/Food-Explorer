import React, { useState } from 'react'
import Sidebar from './componant/Sidebar'
import ContentMain from './componant/ContentMain'






export default function Content() {

  return (
      <div className="flex flex-1 overflow-hidden">

          
      <Sidebar />

      <ContentMain  />
          

      </div>
  )
}