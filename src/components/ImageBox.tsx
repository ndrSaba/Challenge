import React from 'react';
import '../styles/ImageBox.css';
import myDog from '../images/birba.jpg';

interface ImageBoxProps {
    imageUrl: string;
    caption: string;
    subCaption?: string;
    error?: string | null;
}

const ImageBox: React.FC<ImageBoxProps> = ({ imageUrl, caption, subCaption, error }) => {

    return (
        error ? (
            <div className='imageWithErrorContainer' >
                <div className="error">
                    <p>Something went wrong</p>
                    <p><span>Error:</span> {error}</p>
                </div>
                <p>Enjoy my Dog</p>
                <div className="image-box">

                    <img src={myDog} alt="Dog" className='dog' />
                    <p className='caption'>She is Birba</p>
                </div>
            </div >
        ) : (
            <div className="image-box">
                <img src={imageUrl} alt="Dog" className='dog' />
                {!subCaption ? (<p className='caption'>{caption}</p>) : (<p className='caption'>{caption} - {subCaption}</p>)}
            </div>
        )
    )
}

export default ImageBox;
