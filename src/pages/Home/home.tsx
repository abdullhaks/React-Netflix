import './home.css';
import Titlecard from '../../components/TitleCards/TitleCard';
import Footer from '../../components/Footer/Footer'; 
import Navbar from '../../components/Navbar/navbar';
import Hero from '../../assets/hero_banner.jpg';
import HeroTitle from '../../assets/hero_title.png';
import playIcon from '../../assets/play_icon.png';
import infoIcon from '../../assets/info_icon.png';


function Home() { 
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={Hero} alt="Hero Banner" className="banner-img" />

        <div className="hero-caption">
          <img src={HeroTitle} alt="Hero Title" className="caption-img" />
          <p className='caption'>
            Discovering his ties to a secret ancient order, a young man living in modern Istanbul 
            embarks on a quest to save the city from an immortal enemy.
          </p>

          <div className="hero-btns">
            <button className="btn">
              <img src={playIcon} alt="Play Icon" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={infoIcon} alt="Info Icon" />
              More Info
            </button>
          </div>

          <div className="titleCards">
          <Titlecard title={undefined} category={"now_playing"} page={"3"}/>
          </div>
        </div>

        

      </div>

      <div className="morecards">
        <Titlecard title="Blockbuster Movies" category={"top_rated"} page={"2"}/>
        <Titlecard title="Only on Netflix" category={"popular"} />
        <Titlecard title="Upcoming" category={"upcoming"} />
        <Titlecard title="Top Picks for You" category={"now_playing"} page={"4"}/>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
