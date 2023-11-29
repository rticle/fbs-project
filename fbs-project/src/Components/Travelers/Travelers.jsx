import React from 'react'
import paris from '../../assets/paris.jpg'
import traveler from '../../assets/traveler.jpg'

const 
Travelers = () => {
    return (
        <div className = 'travelers container section'>
            <div className = "sectionContainer">
                <h2>
                    Top traveler this month!
                </h2>

                <div className = "travelersContainer grid">
                        <div>
                                <img src={paris} className = 'destinationImage'  />
                                <div className = "travelerDetails">
                                    <div className = "travelerPicture">
                                        <img src={traveler} className='destinationImage' />
                                    </div>
                                        <div className  = "traverlerName">
                                                <span>Annika Antonovich</span>
                                                @AnnikaA
                                        </div>
                                </div>
                
                        </div>        
                </div>
        </div>
    </div>
    )
}

export default Travelers