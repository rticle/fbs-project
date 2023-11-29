import React from 'react'
import video from '../../assets/video.mp4'
import airplane from '../../assets/takeoffs.png'

const Home = () => {
  
    return (
        <div className = 'home flex con'>
            <div className = "mainText">
                <h1>Elevate Your World With Wings of Wonder!</h1>
            </div>
            <div className = "homeImages flex">
                <div className="videoDiv">
                    <video src = {video} autoPlay muted loop className='video'> </video>
                </div>
                <img src = {airplane} className = 'plane'/>
            </div>
        </div>
    )
}

export default Home