import { useState } from "react"
import { categories } from "../data/categories"

export default function Form() {

    const [activity, setActivity] = useState({
        category: 1,
        name: '',
        calories: 0
    })

  return (
   <>
    <form
        className="space-y-5 bg-amber-200 shadow-md p-10 rounded-md"
    >
        <div className="grid grid-cols-1 gap-3">
            <label 
                className="text-lg font-bold" 
                htmlFor="category"
            >
                Categoría
            </label>
            <select 
                className="border border-gray-300 p-2 rounded-md w-full font-light" 
                name="category" 
                id="category"
                value={activity.category}
                >
                {categories.map(category => (
                    <option 
                        key={category.id}
                        value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label 
                className="text-lg font-bold" 
                htmlFor="name"
            >
                Actividad
            </label>
            <input 
                id="name"
                type="text"
                value={activity.name}
                className="border border-gray-300 p-2 rounded-md w-full font-light"
                placeholder="Ej. Comida, jugo de naranja, ejercicios, pesas, bicicleta" />
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label 
                className="text-lg font-bold" 
                htmlFor="calories"
            >
                Calorías
            </label>
            <input 
                id="calories"
                type="number"
                value={activity.calories}
                className="border border-gray-300 p-2 rounded-md w-full font-light"
                placeholder="Ej. 200, 500" />
        </div>
        <input 
            type="submit" 
            value="Guardar"
            className="bg-blue-500 hover:bg-blue-600 w-full p-2 font-bold text-white rounded-sm cursor-pointer shadow-md" 
        />
    </form>
   </>
  )
}
