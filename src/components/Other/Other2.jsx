import React from 'react'

const Other2 = (props) => {
    return (
        <>
            <div>
                <div className="container grids grid--2-cols grid--center-v">

                    <div className="step-img-box">
                         <img
                            src= {props.img}
                            alt="iphone app prefrences"
                            className="step-img"
                        />
                    </div>

                    <div className="step-text-box">
                        <h3 className="heading-tertiary">
                         {props.title}
                        </h3>
                        <p className="step-description">
                         {props.desc}
                        </p>
                    </div>

                    
                </div>
            </div>
        </>
    )
}

export default Other2