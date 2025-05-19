import Info from '../ContentComponant/Info'
import { useCategory } from '../CategoryContext'

export default function ContentMain() {
    const { selectedCategory } = useCategory() 
    return (
        <main className="flex-1 p-6 overflow-y-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                MENU: {selectedCategory}
            </h2>

            <Info />    
        </main>
    )
}