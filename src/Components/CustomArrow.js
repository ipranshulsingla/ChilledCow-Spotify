import React from 'react'
import {primary} from '@uprise/colors'

export function NextArrow(props){
    const { className, style, onClick } = props;
    return <div className={className} onClick={onClick} style={{...style,width:0,height:0}}>
        <i style={{color:primary.purple,fontSize:'40px',position:"absolute",top:'-20px',right:'-15px'}} className="fas fa-chevron-circle-right"></i>
    </div>
}

export function PrevArrow(props){
    const { className, style, onClick } = props;
    return <div className={className} onClick={onClick} style={{...style,width:0,height:0}}>
        <i style={{color:primary.purple,fontSize:'40px',position:"absolute",top:'-20px',left:'-15px'}} className="fas fa-chevron-circle-left"></i>
    </div>
}