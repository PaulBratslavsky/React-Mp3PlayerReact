import React from 'react';
import styled from 'styled-components';


const AudioPlayerVisualsContainer = styled.div`
    background: yellow;
`;

const AudioPlayerVisuals = () => {
    let playerCanvas = React.createRef();

    React.useEffect( () => {
        // Canvas
        playerCanvas.current.width = window.innerWidth;
        playerCanvas.current.height = window.innerHeight;
    });

    return (
        <AudioPlayerVisualsContainer>
            <p>Graphics go here</p>
            <canvas ref={playerCanvas}></canvas>
        </AudioPlayerVisualsContainer>
        
    )
}

export default AudioPlayerVisuals;
