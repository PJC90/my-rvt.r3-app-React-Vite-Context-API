function Card ({title, imgURL, description, isVisited}){
    // il CHILDREN è un attributo che passi come props, ma sarebbe il testo che metti all'interno nel <Card>..<Card/> del componente anzichè fare un componente autochiudente <Card/>
    
        return(
            <div className="rounded-md bg-zinc-950">
                <img src={imgURL} alt="" className="w-full h-auto"></img>
                <div className="flex flex-col text-white p-5">
                    <h1 className="text-2xl font-bold p-2">{title}</h1>
                     <p>{description}</p>
                     <span className="bg-green-600 font-bold ">{isVisited && "Visitato"}</span>
                     <span className="bg-red-600 font-bold ">{!isVisited && "Non Visitato"}</span>
                </div>
            </div>
        )
    }
    export default Card