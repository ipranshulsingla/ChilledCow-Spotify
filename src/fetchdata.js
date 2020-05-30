import config from './config.json'
import {SpotifyGraphQLClient} from 'spotify-graphql'
const url="https://accounts.spotify.com/api/token"
export default function fetchAccessToken(){
    const token=btoa(config.clientId+':'+config.clientSecret)
    var promise=fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded',
            'Authorization':'Basic '+token
        },
        body:"grant_type=client_credentials"
    })
    return promise
}

export function fetchData(credentials){
    var promise=SpotifyGraphQLClient(credentials).query(`{
            user(id:"chilledcow"){
              id
                  display_name
              href
              playlists{
                id
                description
                href
                name
                images{
                  url
                }
                }
              images{
                url
              }
            }
    }`)
    return promise
}

export function fetchFollowers(href){
    var promise=fetch(href)
    return promise
}