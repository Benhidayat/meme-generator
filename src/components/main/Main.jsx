import React from 'react'
import './Main.css';

const Main = () => {
  return (
    <main>
        <div className="form">
            <div className='input-container'>
                <label htmlFor="">Top Text
                    <input 
                        type="text" 
                        placeholder='One does not simply'
                        name='topText'
                    />
                </label>

                <label htmlFor="">Bottom Text
                    <input 
                        type="text" 
                        placeholder='Walk into Mordor'
                        name='bottomText'
                    />
                </label>
            </div>
            <button>Get a new meme image 🖼</button>
        </div>
        <div className="meme">
            <img src="http://i.imgflip.com/1bij.jpg" alt="" />
            <span className="top">One does not simply</span>
            <span className="bottom">Walk into Mordor</span>
        </div>
    </main>
  )
}

export default Main
