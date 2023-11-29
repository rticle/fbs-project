import React from 'react'
import {RxCalendar} from 'react-icons/rx'
import {BsShieldCheck} from 'react-icons/bs'

const Info = () => {
    return (
        <div className = 'info section'>
            <div className = "infoContainer container">
                <div className = "titleDiv flex">
                   <h2>Travel to make memories all around the world</h2>
                   <button className = 'btn'>
                        View All                    
                    </button> 
                </div>
                <div className = "cardsDiv grid">
                    <div className = "singleCard grid">
                        <div className = "iconDiv flex colorOne">
                            <RxCalendar className = 'icon'/>
                        </div>
                        <span classNam="cardTitle">Book & Relax</span>
                        <p>You can also call airlines from your phone and a book to flight ticket!</p>
                    </div>

                    <div className = "singleCard grid">
                        <div className = "iconDiv flex colorTwo">
                            <BsShieldCheck className = 'icon'/>
                        </div>
                        <span classNam="cardTitle">Smart Checklist</span>
                        <p>You can also call airlines from your phone and a book to flight ticket!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info