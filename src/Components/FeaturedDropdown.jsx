import React from 'react'
import style from '../css/dropdown.module.css'
export const FeaturedDropdown=(props)=>{
    if(props.artists){
        return <div className={style.dropdown}>
            <ul>
                {createLi(props.artists)}
            </ul>
        </div>
    }
    return <></>
}

function createLi(artists){
    let liArray=[]
    let temp=[]
    while(temp.length<=10){
        let artistName = artists[Math.floor(Math.random() * artists.length)];
        if(temp.indexOf(artistName)<0){
            temp.push(artistName)
            let JSX=<li className={style.artist} key={temp.length}>{artistName}</li>
            liArray.push(JSX)
        }
    }
    return liArray
}