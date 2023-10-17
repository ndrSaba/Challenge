import { useState, useEffect } from 'react';

interface GenerateDogsProps {
  breed: string | undefined;
  subBreed: string | undefined;
}

interface DogResponse {
  message: string;
  status: string;
}

const GenerateDogs = ({ breed, subBreed }: GenerateDogsProps) => {
  const [dogImage, setDogImage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const fetchDogImage = async () => {
      if (!breed && !subBreed) {
        setDogImage('');
        return;
      }

      setLoading(true);

      let url = 'https://dog.ceo/api/breeds/image/random';

      if (breed) {
        url = `https://dog.ceo/api/breed/${breed}/images/random`;
      }

      if (subBreed) {
        url = `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`;
      }

      try {

        if (!breed && !subBreed) return;

        const response = await fetch(url);

        const data: DogResponse = await response.json();
        setDogImage(data.message);

      } catch (error: any) {
        setErr(error.message);
        console.error(error);
      } finally {

        // I'm simulating a delay just to show the funny loading indicator
        setTimeout(() => {
          setLoading(false);
        }, 2500);
      }
    };

    fetchDogImage();
  }, [breed, subBreed]);

  return { dogImage, loading, err };
};

export default GenerateDogs;
