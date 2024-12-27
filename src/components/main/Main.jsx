import React from 'react'
import './Main.css';

const Main = () => {
    const [meme, setMeme] = React.useState({
        imgUrl:'http://i.imgflip.com/1bij.jpg',
        topText: 'One does not simply',
        bottomText: 'Walk into Mordor'
    })

    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
            .catch(err => console.error(err));
    },[]);


    // change meme text
    const handleChangeText = (e) => {
        const {value, name} = e.currentTarget;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    // get a new meme image
    const getNewMemeImage = () => {

        const random = Math.floor(Math.random() * allMemes.length);
   
        setMeme(prevMeme  => ({
            ...prevMeme,
            imgUrl: allMemes[random].url
        }))
     
    }

  return (
    <main>
        <div className="form">
            <div className='input-container'>
                <label htmlFor="">Top Text
                    <input 
                        type="text" 
                        placeholder='One does not simply'
                        name='topText'
                        onChange={handleChangeText}
                    />
                </label>

                <label htmlFor="">Bottom Text
                    <input 
                        type="text" 
                        placeholder='Walk into Mordor'
                        name='bottomText'
                        onChange={handleChangeText}
                    />
                </label>
            </div>
            <button onClick={getNewMemeImage}>Get a new meme image 🖼</button>
        </div>
        <div className="meme">
            <img src={meme.imgUrl} alt="" />
            <span className="top">{meme.topText}</span>
            <span className="bottom">{meme.bottomText}</span>
        </div>
    </main>
  )
}

export default Main
