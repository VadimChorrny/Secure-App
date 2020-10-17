import React, { useState } from 'react'

export default function PassVerefication() {

    const [hide, setHide] = useState();



    return (

        <div className="wrapper">
            <div className="wrapper-text">
                <p>CHECK <span>COMPLEXITY</span> OF YOUR PASSWORD</p>
            </div>
            <div className="wrapper-input">
                <input type="text" className="w-input" placeholder="Enter your password" />
            </div>
        </div>

    )
}
