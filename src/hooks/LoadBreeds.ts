import { useState, useEffect } from 'react';

const useLoadBreeds = () => {
    const [breeds, setBreeds] = useState<string[]>([]);

    useEffect(() => {
        const fetchBreeds = async () => {
            const response = await fetch('https://dog.ceo/api/breeds/list/all');
            const data = await response.json();
            const breedsList = Object.keys(data.message);
            setBreeds(breedsList);
        };

        fetchBreeds();
    }, []);

    return { breeds };
};

export default useLoadBreeds;

