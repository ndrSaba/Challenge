import React, { useState } from 'react';
import GenerateDogs from '../hooks/GenerateDogs';
import '../styles/Dropdown.css';
import ProgressBar from './ProgressBar';
import ImageBox from './ImageBox';
import '../styles/Content.css';
import myDog from '../images/birba.jpg';
import useLoadBreeds from '../hooks/LoadBreeds';
import useLoadSubBreeds from '../hooks/LoadSubBreeds';
import DropDown from './DropDown';
import SubBreeds from './SubBreeds';

function Content() {
    const { breeds } = useLoadBreeds();

    const [selectedSubBreed, setSelectedSubBreed] = useState('');
    const [selectedBreed, setSelectedBreed] = useState('');
    const { dogImage, loading, err } = GenerateDogs({ breed: selectedBreed, subBreed: selectedSubBreed });
    const { subBreeds, handleSubBreedsList } = useLoadSubBreeds({ breed: selectedBreed });

    return (
        <div className="content">
            <div className="header">
                <h1>Dog API</h1>
                <p>Click on the button below to generate a random dog image.</p>
            </div>
            <div className="breedslist-container">
                <DropDown breeds={breeds} subBreeds={subBreeds} selectedBreed={selectedBreed} setSelectedBreed={setSelectedBreed} setSelectedSubBreed={setSelectedSubBreed} handleSubBreedsList={handleSubBreedsList} />
            </div>
            <div className="content-container">
                {loading && <ProgressBar />}

                <div className="image-container">
                    {dogImage && !loading && <ImageBox imageUrl={dogImage} caption={selectedBreed} subCaption={selectedSubBreed} error={err} />}
                    {!loading && !dogImage && <div className="image-container mydog">
                        <p>Or enjoy my dog</p>
                        <ImageBox imageUrl={myDog} caption="She's Birba - Jack Russell Terrier" />
                    </div>}
                </div>
                {subBreeds.length > 0 &&
                    <div className="subbreeds-container">
                        <SubBreeds subBreeds={subBreeds} setSelectedSubBreed={setSelectedSubBreed} />
                    </div>}
            </div>
        </div>
    );
}

export default Content;
