import React,{ useState } from 'react'
import '../App.css'

const product = (props : any) => {
    const [ selected, setSelected ] = useState(false)
    const selectHandler = () => {
        setSelected(!selected)
    }
    return (
        <li className={selected ? "selected" : ""} onClick={selectHandler}>
            <span className="name">{props.name}</span>
            <img className="img" src={props.src} />
            <span className="price">from ${props.price}</span>
            <div className="radio" />
        </li>
    )
}

export default product;