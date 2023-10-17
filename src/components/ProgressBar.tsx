import '../styles/ProgressBar.css';
import dog1 from '../images/dog-1.png';
import dog2 from '../images/dog-2.png';
import dog3 from '../images/dog-3.png';
import { useEffect, useState } from 'react';

function ProgressBar() {
    const [currentFrame, setCurrentFrame] = useState(1);

    const frames = [dog1, dog2, dog3];

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentFrame === frames.length) {
                setCurrentFrame(1);
            } else {
                setCurrentFrame(currentFrame + 1);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [currentFrame]);

    return (
        <div className="progress-bar" id="progressbar">
            <div className="dog-runner">
                <img
                    src={`${frames[currentFrame - 1]}`}
                    alt={`Dog ${currentFrame}`}
                />

            </div>
            <p>Dog incoming...</p>
        </div>
    )
}

export default ProgressBar;