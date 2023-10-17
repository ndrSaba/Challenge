import { useState } from "react";

interface DropDownProps {
    breeds: string[];
    subBreeds: string[];
    selectedBreed: string;
    setSelectedBreed: (breed: string) => void;
    setSelectedSubBreed: (subBreed: string) => void;
    handleSubBreedsList: (breed: string) => void;
}

const DropDown: React.FC<DropDownProps> = ({
    breeds,
    selectedBreed,
    setSelectedBreed,
    setSelectedSubBreed,
    handleSubBreedsList
}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log('isMenuOpen', isMenuOpen);
    }

    return (
        <div className="dropdown">
            <button className="dropbtn" onClick={toggleMenu}>Select a Breed</button>
            <div className={`dropdown-content ${isMenuOpen ? "show" : ""}`}>
                {breeds && breeds.length > 0 ? (breeds.map((breedName) => (
                    <div key={`${breedName}-breed`} className="menu">
                        <button
                            onClick={() => {
                                setSelectedBreed(breedName);
                                setSelectedSubBreed('');
                                handleSubBreedsList(breedName);
                                setIsMenuOpen(!isMenuOpen);
                            }}
                            className={`menu-item ${selectedBreed === breedName ? "active" : ""}`} >
                            {breedName}
                        </button>
                    </div>
                ))) : (
                    <div className="menu">
                        <p>No breeds found</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DropDown;