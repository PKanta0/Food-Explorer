import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useCategory } from '../CategoryContext'
import type { Food } from '../food/Food'
import ButtonMore from './ButtonMore'

export default function Info() {
  const [meals, setMeals] = useState<Food[]>([])
  const { selectedCategory, searchTerm } = useCategory()
  const [limit, setLimit] = useState(6)

  const filteredMeals = meals.filter(meal =>
    searchTerm.length < 2
      ? true
      : meal.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        if (selectedCategory === 'random') {
          const res = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
          const m = res.data.meals[0]
          const food: Food = {
            id: parseInt(m.idMeal),
            name: m.strMeal,
            country: m.strArea,
            img: m.strMealThumb,
            link: m.strSource,
            category: m.strCategory
          }
          setMeals([food])
          return
        }

        const filterUrl =
          selectedCategory === 'all'
            ? 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef'
            : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`

        const res = await axios.get(filterUrl)
        const mealsData = res.data.meals.slice(0, limit)

        const detailedMeals: Food[] = await Promise.all(
          mealsData.map(async (meal: { idMeal: string }) => {
            const detail = await axios.get(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
            )
            const m = detail.data.meals[0]
            
            return {
              id: parseInt(m.idMeal),
              name: m.strMeal,
              country: m.strArea,
              img: m.strMealThumb,
              link: m.strSource,
              category: m.strCategory
            } as Food
          })
        )

        setMeals(detailedMeals)
      } catch (err) {
        console.error('Error:', err)
      }
    }

    fetchMeals()
  }, [selectedCategory, limit])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filteredMeals.map(meal => (
        <div
          key={meal.id}
          className="shadow rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition"
          onClick={() => {
            if (meal.link) {
              window.open(meal.link, '_blank')
            }
          }}
        >
          <img src={meal.img} alt={meal.name} className="w-full h-auto" />
          <div className="p-3 font-medium text-gray-800">{meal.name}</div>
        </div>
      ))}
      <ButtonMore meals={meals} onLoadMore={() => setLimit(limit + 6)} />
    </div>
  )
}