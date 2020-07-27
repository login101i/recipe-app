import React from 'react'
// 8
import style from './recipe.module.css'



const Receptura = ({title,calories,image, ingredients}) => {
    // 9
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
            {ingredients.map(x=>(
            <p>{x.text}</p>
            // 13
            ))}
            </ol>
        
            <h3>{calories}</h3>
            <img src={image} alt="" />
        </div>
    )


}

export default Receptura