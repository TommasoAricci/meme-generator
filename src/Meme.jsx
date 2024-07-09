import React from "react";
import {useState} from "react";

export default function Meme(){

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,                    // solo per cambiare randmImage devo importare tutto l'oggetto
            randomImage: url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(meme)
    }

    return (
        <div className="meme">
            <form className="meme-form" onSubmit={handleSubmit}>
                    <input
                    type="text"
                    name="topText"
                    placeholder="Text"
                    value={meme.topText}
                    onChange={handleChange}
                    />
                    <input
                    type="text"
                    name="bottomText"
                    placeholder="Text"
                    value={meme.bottomText}
                    onChange={handleChange}
                    />
                <button onClick={getMemeImage}>
                    Get a new meme image!</button>
            </form>
            <div className="imageContainer">
                <img className="memeImage" src={meme.randomImage}/>
                <h1>{meme.topText}</h1>
                <h1>{meme.bottomText}</h1>
            </div>
        </div>
    )
}