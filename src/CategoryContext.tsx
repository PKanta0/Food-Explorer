import React, { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'


type CategoryContextType = {
    selectedCategory: string
    setSelectedCategory: (category: string) => void
    searchTerm: string
    setSearchTerm: (term: string) => void
}


const CategoryContext = createContext<CategoryContextType | undefined>(undefined)


export const CategoryProvider = ({ children }: { children: ReactNode }) => {
    const [selectedCategory, setSelectedCategory] = useState('all') 
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory, searchTerm, setSearchTerm }}>
            {children}
        </CategoryContext.Provider>
    )
}


export const useCategory = (): CategoryContextType => {
    const context = useContext(CategoryContext)
    if (!context) {
        throw new Error('useCategory ต้องใช้ภายใต้ <CategoryProvider>')
    }
    return context
}