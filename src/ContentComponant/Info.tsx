import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useCategory } from '../CategoryContext'
import type { Meal,Food } from '../food/Food'
import ButtonMore from './ButtonMore'

export default function Info() {
  const { selectedCategory } = useCategory()
  const [meals, setMeals] = useState<Meal[]>([])
  const [limit, setLimit] = useState(6)

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        let url = ''
        if (selectedCategory === 'random') {
          url = 'https://www.themealdb.com/api/json/v1/1/random.php'
        } else if (selectedCategory === 'all') {
          url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef'
        } else {
          url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
        }

        const res = await axios.get(url)
        const mealsData = selectedCategory === 'random' ? [res.data.meals[0]] : res.data.meals
        setMeals(mealsData.slice(0, limit))
      } catch (err) {
        console.error('Error:', err)
      }
    }

    fetchMeals()
  }, [selectedCategory,limit])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

      {meals.map(meal => (
        <div key={meal.idMeal} className="shadow rounded-lg overflow-hidden">
          <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-auto" />
          <div className="p-3 font-medium text-gray-800">{meal.strMeal}</div>
        </div> 
      ))}
      <ButtonMore meals={meals} onLoadMore={() => setLimit(limit + 6)} />
    </div>
  )
}