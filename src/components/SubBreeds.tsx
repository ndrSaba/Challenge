interface SubBreedsProps {
    subBreeds: string[];
    setSelectedSubBreed: (subBreed: string) => void;
}

const SubBreeds: React.FC<SubBreedsProps> = ({
    subBreeds,
    setSelectedSubBreed,
}) => {
    return (

        <div className="subBreedsList-container">
            <h1>SubBreeds</h1>
            <div className="subBreedsList">
                {subBreeds.map((subBreedName) => (
                    <div key={`${subBreedName}-subbreed`} >
                        <button
                            onClick={() => {
                                setSelectedSubBreed(subBreedName);
                            }}
                            className="dropbtn subBreedButton">
                            {subBreedName}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SubBreeds;