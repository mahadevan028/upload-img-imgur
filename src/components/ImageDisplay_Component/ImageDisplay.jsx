import React from 'react'
import './ImageDisplay.css'

function ImageDisplay({imageUrl}) {
    return (
            <div className="padding-top-20">
                <div>
                <img id='imageInput' src={imageUrl} alt='imageInput' width="500px" height="400px"></img>
            </div>
            </div>
             );
    
}

export default ImageDisplay
