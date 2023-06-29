import React from 'react'
import '../../App.css'

const Other = (props) => {
    return (
        <>
            <div>
                <div className="container grids grid--2-cols grid--center-v margin">
                    <div className="step-text-box">
                        <h3 className="heading-tertiary">
                            {props.title}
                        </h3>
                        <p className="step-description">
                           {props.desc}
                        </p>
                    </div>

                    <div className="step-img-box">
                        <img
                            src={props.img}
                            alt="iphone app prefrences"
                            className="step-img"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Other