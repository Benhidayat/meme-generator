import './Header.css';
import trollFace from '../../assets/troll-face.png'

const Header = () => {
  return (
    <header>
      <img src={trollFace} alt="header logo" />
      <h1>Meme Generator</h1>
    </header>
  )
}

export default Header
