import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {primary} from '@uprise/colors'
import navbar from '../css/navbar.module.css'

export const Navbar=()=>{
    
    const [state,setState] = useState({active:getDefaultActive()})
    return <div className={navbar.navOuter}>
        <ul className={navbar.nav}>
            <li>
                <Link 
                onClick={(e)=>{setState({active:e.target.innerText})}} 
                to="/" 
                style={state.active==='Overview'?{color:primary.purple}:{color:primary.charcoal}}>
                Overview
                </Link>
            </li>
            <li>
                <Link 
                onClick={(e)=>{setState({active:e.target.innerText})}} 
                to="/playlist" 
                style={state.active==='Playlist'?{color:primary.purple}:{color:primary.charcoal}}>
                Playlist
                </Link>
            </li>
            <li>
                <Link onClick={(e)=>{setState({active:e.target.innerText})}} 
                to="/featured" 
                style={state.active==='Featured'?{color:primary.purple}:{color:primary.charcoal}}>
                Featured
                </Link>
            </li>
        </ul>
    </div>
}

function getDefaultActive(){
    let path=window.location.pathname
    if(path==='/' || path===''){
        return 'Overview'
    }
    else if(path==='/playlist'){
        return 'Playlist'
    }
    else{
        return 'Featured'
    }
}