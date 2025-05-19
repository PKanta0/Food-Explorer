import { useCategory } from './CategoryContext'
import logo from "./componant/Image.png"



export default function Header({}) {

  const { searchTerm, setSearchTerm } = useCategory()

  return (
      <header className="bg-white shadow px-6 py-4 text-2xl font-bold text-gray-800">
          <img className="w-30 h-27" src={logo} alt="logo" />
      <h1 className="text-2xl font-bold text-center">🍽️ Food Finder 🍽️</h1>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="BiteQuest..."
            className="ml-4 mt-4 px-3 py-1 rounded bg-gray-200 text-black text-center w-64"
          />
      </header>

  )
}