import React from "react";
import "../styles/PixelBackground.css";

export default function PixelBackground() {
    const pixelSize = 40;
    const [numberOfRows, setNumberOfRows] = React.useState(Math.ceil(window.innerHeight / pixelSize));
    const [numberOfCols, setNumberOfCols] = React.useState(Math.ceil(window.innerWidth / pixelSize));

    function pixelate() {
        const pixels = Array.from(document.querySelectorAll('.pixel'));
        let count = 0;
        while(pixels.length) {
            let randomIndex = Math.floor(Math.random() * pixels.length);
            pixels[randomIndex].style.animationDelay = `${count * 0.004}s`;
            pixels.splice(randomIndex, 1);
            count = count + 1;
        }
    }

    React.useEffect(() => {
        function handleResize() {
            setNumberOfRows(Math.ceil(window.innerHeight / pixelSize));
            setNumberOfCols(Math.ceil(window.innerWidth / pixelSize));
        }
        window.addEventListener('resize', handleResize);
        pixelate();
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <div className="pixels-container">
            {
                Array(numberOfRows).fill().map(row => {
                    return <div className="row">
                        {
                            Array(numberOfCols).fill().map(col => {
                                return <div className="pixel"></div>
                            })
                        }
                    </div>
                })
            }
           
        </div>
    )
}