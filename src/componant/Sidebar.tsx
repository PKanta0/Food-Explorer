import { useEffect, useState } from 'react'
import axios from 'axios'
import { useCategory } from '../CategoryContext'
import type { Category } from '../food/Food'



export default function Sidebar() {
    const [categories, setCategories] = useState<Category[]>([])
    const { setSelectedCategory } = useCategory() 

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
                setCategories(res.data.meals)
            } catch (err) {
                console.error('Error:', err)
            }
        }

        fetchCategories()
    }, [])

    return (
        <aside className="w-[15%] bg-white border-r border-gray-200 p-6 overflow-y-auto">
            <nav className="space-y-3 text-gray-700 font-medium text-left">
                <div className="hover:text-blue-600 cursor-pointer" onClick={() => setSelectedCategory('random')}>
                    ⭐ Menu Today
                </div>
                <div className="hover:text-blue-600 cursor-pointer" onClick={() => setSelectedCategory('all')}>
                    📋 All Menu
                </div>

                {categories.map((cat, i) => (
                    <div
                        key={i}
                        className="hover:text-blue-600 cursor-pointer"
                        onClick={() => setSelectedCategory(cat.strCategory)}
                    >
                        🍽️ {cat.strCategory}
                    </div>
                ))}
            </nav>
        </aside>
    )
}