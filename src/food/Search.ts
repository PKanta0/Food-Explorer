import type { Food } from "./Food"


interface SearchResponse {
    meals: meals[]

}

interface meals {
    idMeal: number
    strMeal: string
    strArea: string
    strMealThumb: string
    strSource:string
    strCategory: string

}


export const search = async (term: string) => {
    const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?q=${term}&limit=5`
        
    )
    const data: SearchResponse = await res.json();

    const food: Food[] = data.meals.map((meal) => {
        return {

            id: meal.idMeal,
            name: meal.strMeal,
            country: meal.strArea,
            img: meal.strMealThumb,
            link: meal.strSource,
            category: meal.strCategory,

        }
    })
    console.log(food)
    return food
}