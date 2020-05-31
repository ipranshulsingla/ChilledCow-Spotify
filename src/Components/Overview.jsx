import React from 'react'
import {Button} from '@uprise/button'
import style from'../css/overview.module.css'
var profile=''
export const Overview=(props)=>{
    profile=props.profile
    let image=props.images?props.images[0].url:''
    let displayName=props.displayName?props.displayName:'Loading...'
    let followers=props.followers?`Followers(${props.followers})`:''
    return <div className={style.outer}>
        <div>
           <img src={image} alt=""></img>
        </div>
        <div className={style.flexDirectionCol}>
            <div>
                <h1>{displayName}</h1>
                <p>{followers}</p>
            </div>
            <div>
                <Button onClick={handleClick} variant='primary' size='medium' title="Follow"/>
            </div>
        </div>
    </div>
}

const handleClick=()=>{
    window.location.href=profile
}