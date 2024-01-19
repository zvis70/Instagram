//import { useEffect } from 'react'
//import { useSelector } from 'react-redux'
//import { loadCars, addCar, updateCar, removeCar, addToCart } from '../store/car.actions.js'

import { StoryList } from "./StoryList";





export function StoryIndex() {

    return (
        <div>
            
            <main>
                Hello From StoryIndex
            <StoryList />
            </main>
        </div>
    )
}