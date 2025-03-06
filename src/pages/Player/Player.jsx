import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {

 const {id}=useParams();
  const navigate=useNavigate();
  const [apiData,setApiDate]=useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""

  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTMwY2I1YjRiODMyOGI1ZDZhZTZhYmQ0YzY1YzcyOCIsIm5iZiI6MTc0MTIyMzM1MS40MTIsInN1YiI6IjY3YzhmNWI3ZjQ4ZThjMjU4MTBjYzQ1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nRCA0jJMunHaJcNw23RqyhdLQgYCtso6SMV2O7k9tFo'
    }
  };
  
useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiDate(res.results[0]))
    .catch(err => console.error(err));
},[])



  return (
    <div className='player'>  
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe src= {`https://www.youtube.com/embed/${apiData.key}`} frameborder="0"  height="90%"width='90%'
      title='trailer' allowFullScreen ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
