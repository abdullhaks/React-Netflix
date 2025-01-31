import { useRef, useEffect, useState } from "react";
import "./titleCard.css";
// import cards_data from "../../assets/cards/Cards_data";
import { Link } from 'react-router-dom';


interface TitlecardsProps {
  title?: string;
  category?: string; 
  original_title?:string;
  backdrop_path?:string
  page?:string
  id?:string
}

function Titlecards({ title,category,page }: TitlecardsProps) {
 
  const [apiData,setApiData]= useState<TitlecardsProps[]>([]);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  const url = `https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=${page?page:'1'}`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjM5N2Q2YzI2YzIyYTlhMTkwOWNmZjNjNWRkMTg5MyIsIm5iZiI6MTczMzQ2MTIwOS41MzMsInN1YiI6IjY3NTI4NGQ5MzQ5NGNjOWJmYmM2MWY1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YjF024Qbdn5PJboFUNI1muACgx2Z3lkjIwRNOuYOE6M'
  }
};



  useEffect(() => {


  fetch(url,options)
  .then(res => res.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));

// cards scrolling setup....-----------
    const currentRef = cardsRef.current;
    const handleNativeWheel = (event: WheelEvent) => {
      if (currentRef) {
        event.preventDefault();
        currentRef.scrollLeft += event.deltaY;
      }
    };
    if (currentRef) {
      currentRef.addEventListener("wheel", handleNativeWheel, { passive: false });
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("wheel", handleNativeWheel);
      }
    };
//-----------------------------


  }, []);
  

  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="cards" ref={cardsRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt={card.original_title} />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Titlecards;
