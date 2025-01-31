
import './footer.css'
import ytIcon from '../../assets/youtube_icon.png';
import fbIcon from '../../assets/facebook_icon.png';
import twIcon from '../../assets/twitter_icon.png';
import instIcon from '../../assets/instagram_icon.png';


function footer() {
  return (
    <div className='footer'>

      <div className="footer-icons">
        <img src={ytIcon} alt="" />
        <img src={fbIcon} alt="" />
        <img src={twIcon} alt="" />
        <img src={instIcon} alt="" />
      </div>

      <ul>
        <li>Audio Description</li>
        <li>Help Centere</li>
        <li>Gift Cards</li>
        <li>Media Centere</li>
        <li>Investor Relation</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright">© 1997-2024 Netflix ,Inc.</p>

    </div>
  )
}

export default footer
