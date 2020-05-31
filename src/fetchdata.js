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
              images{
                url
              }
              playlists{
                id
                description
                href
                name
                images{
                  url
                }
                tracks{
                  track{
                    artists{
                      name
                    }
                  }
                }
              }
            }
    }`)
    return promise
}

export function fetchFollowers(href){
    var promise=fetch(href)
    return promise
}

export function extractArtists(data){
  let artists=[];
  data.playlists.forEach(playlist=>{
    playlist.tracks.forEach(eachTrack=>{
      eachTrack.track.artists.forEach(artist=>{
        if(artists.indexOf(artist.name)<0){
          artists.push(artist.name)
        }
      })
    })
  })
  return artists
}