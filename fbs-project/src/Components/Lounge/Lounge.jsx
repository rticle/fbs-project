import React from 'react'
import imageGrid from '../../assets/pexels-pew-nguyen-11989285.jpg'

const Lounge = () => {
    return (
        <div className = 'lounge container section'>
            <div className = "sectionContainer grid"> 
                <div className = "imgDiv">
                    <img src={imageGrid} />
                </div>
            </div>
                <div classname = "textDiv">
                    <h2>Unaccompanied Minor Lounge</h2>
                </div>
                        <div className = "SingleGrid">
                            <span className = 'gridTitile'>
                                Help through the airport
                            </span>
                        </div>
                        <p>
                            You can also call airlines from your photos and a book a flight to onr of your favorite destinations.
                        </p>
                <div>

                </div>

        </div>
    )
}

export default Lounge