import { useContext, useState } from "react"
import { ProvaContext } from "../stores/ProvaContext"

function CardForm ({addCity}) {
    const [formData, setFormData] = useState({
        name:"",
        description:"",
        imgURL:"",
        isVisited: false,
    })
    const handleInputChange = (e)=>{
        const {name, value, type, checked} = e.target
        const inputValue = type == "checkbox" ? checked : value
setFormData({
    ...formData,
    [name]:inputValue,
})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const city ={
            id: Math.ceil(Math.random()*10000),
            title: formData.name,
            description: formData.description,
            imgUrl: formData.imgURL,
            isVisited: formData.isVisited,
        }
        setFormData({
            name:"",
            description:"",
            imgURL:"",
            isVisited: false,
        })
        addCity(city)
    }

    const {count } = useContext(ProvaContext)

    return(
<form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80 mb-10 bg-sky-200 p-9 rounded-xl">
    <div className="flex flex-col">
        <label>Nome</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange}></input>
    </div>
    <div className="flex flex-col">
        <label>Descizione {count}</label>
        <textarea name="description" value={formData.description} onChange={handleInputChange}></textarea>
    </div>
    <div className="flex flex-col">
        <label>Immagine</label>
        <input type="text" name="imgURL" value={formData.imgURL} onChange={handleInputChange}></input>
    </div>
    <div className="flex flex-col">
        <label>Visitata?</label>
        <input type="checkbox" name="isVisited" checked={formData.isVisited} onChange={handleInputChange}></input>
    </div>
    <button type="submit" className="bg-red-600 text-white text-3xl p-1 pb-2">Agg Card</button>

</form>
    )
}
export default CardForm