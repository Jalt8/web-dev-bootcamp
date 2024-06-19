import { useState } from 'react'
import './Box.css'

function Box({box, handleClick, id}){
    const [isActive, setActive] = useState(false)
    return <div onClick={() => handleClick(id)} className="Box" style={{backgroundColor: box.isActive ? "red" : "black"}}></div>
}

export default Box