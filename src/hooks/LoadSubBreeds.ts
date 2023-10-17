import { useState, useEffect } from 'react';


interface PropBreed {
    breed: string;
}

const useLoadSubBreeds = ({ breed }: PropBreed) => {
    const [subBreeds, setSubBreeds] = useState([]);

    const handleSubBreedsList = (breed: string) => {
        fetch(`https://dog.ceo/api/breed/${breed}/list`)
            .then(response => response.json())
            .then(data => setSubBreeds(data.message))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        if (breed) {
            handleSubBreedsList(breed);
        }
    }, [breed]);

    return { subBreeds, handleSubBreedsList }
};

export default useLoadSubBreeds;
