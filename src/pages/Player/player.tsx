import "./player.css"
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function player() {


  const {id} = useParams()
  const navigate = useNavigate();
const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjM5N2Q2YzI2YzIyYTlhMTkwOWNmZjNjNWRkMTg5MyIsIm5iZiI6MTczMzQ2MTIwOS41MzMsInN1YiI6IjY3NTI4NGQ5MzQ5NGNjOWJmYmM2MWY1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YjF024Qbdn5PJboFUNI1muACgx2Z3lkjIwRNOuYOE6M'
  }
};

  const [apiDate,setApiData] = useState({
    name:'',
    key:'',
    published_at:'',
    type:''
  });

  useEffect(()=>{
    fetch(url, options)
  .then(res => res.json())
  .then(json => setApiData(json.results[0]))
  .catch(err => console.error(err));
  },[])



  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" onClick={()=> navigate('/')}/>
      <iframe width={"90%"} height={'90%'} src={`https://www.youtube.com/embed/${apiDate.key}`} title='triler' frameBorder="0" allowFullScreen></iframe>

      <div className="player-info">
        <p>{apiDate.published_at.slice(0,10)}</p>
        <p>{apiDate.name}</p>
        <p>{apiDate.type}</p>
      </div>
    </div>
  )
}

export default player
