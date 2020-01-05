


import React from 'react';
import styled from 'styled-components';


const AudioPlayerVisualsContainer = styled.div`
`;

const AudioPlayerVisuals = ({analyser}) => {

    console.log( analyser,  "NEED THIS");

    let playerCanvas = React.createRef();

    React.useEffect( () => {
        let bufferLength = analyser.frequencyBinCount;
        let dataArray = new Uint8Array(bufferLength);
        
        // Canvas
        let canvasCtx = playerCanvas.current.getContext("2d");
        
        playerCanvas.current.width = window.innerWidth;
        playerCanvas.current.height = window.innerHeight;

        let WIDTH = playerCanvas.width;
        let HEIGHT = playerCanvas.height;

        let barWidth = (WIDTH / bufferLength) * 2.5;
        let barHeight;
        let x = 0;

        function renderFrame() {
            console.log('Something');
            requestAnimationFrame(renderFrame);
        
            x = 0;
        
            analyser.getByteTimeDomainData(dataArray);
        
            canvasCtx.fillStyle = "#000";
            canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
        
            for (var i = 0; i < bufferLength; i++) {
                console.log('Something Else');
                barHeight = dataArray[i];
                
                var r = barHeight + (25 * (i/bufferLength));
                var g = 250 * (i/bufferLength);
                var b = 50;
        
                canvasCtx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
                canvasCtx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
        
                x += barWidth + 1;
            }
        }

        renderFrame();

    });

    

    return (
        <AudioPlayerVisualsContainer>
            <p>Graphics go here</p>
            <canvas ref={playerCanvas}></canvas>
        </AudioPlayerVisualsContainer>
        
    )
}

export default AudioPlayerVisuals;

