import Header from './Header'
import Content from "./content"
import { CategoryProvider } from './CategoryContext'


import './App.css'



function App() {


  return (
    <CategoryProvider>
      <div className="flex flex-col h-screen bg-gray-50">
        <Header />
        <Content />
      </div>
    </CategoryProvider>
  )
}

export default App
