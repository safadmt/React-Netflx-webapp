import React,{useEffect,useState} from 'react'
import {imageURL,API_KEY} from '../../constants/constants'
import './RowPost.css'
import axios from '../../axios'
import Youtube from 'react-youtube'
function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(()=> {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results)
    }).catch(err=> {
      alert('Network error')
    })  
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleMovie = (id) => {
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=> {
      if(response.data.results.length !== 0) {
        setUrlId(response.data.results)
      } else {
        console.log('Array is empty')
      }
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj) => 
            <img  onClick={()=>handleMovie(obj.id)} className={props.issmall ? 'smallPoster' : 'poster'} src={`${imageURL + obj.backdrop_path}`} alt="poster" />
          )}
            
        </div>
        {urlId && <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost