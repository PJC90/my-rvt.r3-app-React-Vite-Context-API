import { useContext, useEffect, useState } from "react"
import { ProvaContext } from "../stores/ProvaContext"

function Example (){
    //****** */
    // Uso CONTEXTAPI per prendere lo stato count e setcount
    //
    // const initialCount = parseInt(sessionStorage.getItem("count"))  || 0
    // const [count, setCount] = useState(initialCount)
 
    // useEffect(()=>{
    //     sessionStorage.setItem("count", count.toString())
    //     document.title=`Conteggio: ${count}`
    // },[count])
    //
    //***** */
    const {count, setCount} = useContext(ProvaContext)
    
    return(
        <div>
            <p>Conteggio:{count}</p>
            <button onClick={()=>(setCount(count+1))}>Incrementa</button>
            <button onClick={()=>(sessionStorage.removeItem("count"), setCount(0))}>Svuota Contatore</button>
        </div>
    )
}
export default Example