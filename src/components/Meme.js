import React from "react"
import MemeData from "../MemeData.js"

function Meme(){ 
    const [meme,setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImg : "http://i.imgflip.com/1bij.jpg",

    })
    // const [allMemeImages, setAllMemeImages] = React.useState({MemeData})

    function getMemeImg(){
   
        const memeArray = MemeData.data.memes
        const randomNum = Math.floor(Math.random()*memeArray.length)
        const url = memeArray[randomNum].url
        setMeme(prevMeme=>{
            return{
                ...prevMeme,
                randomImg:url
            }
        })
       
    }

   

    return(
        <main>
            <div className="form">
                <input type ="text"  className="form--input"/>
                <input type = "text" className="form--input"/>
                <button onClick = {getMemeImg}className="form--button">Get a new meme</button>
                <img src={meme.randomImg} className="meme-img"/>

            </div>
        </main>

    )
}

export default Meme;