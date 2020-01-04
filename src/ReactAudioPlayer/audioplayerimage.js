import React from 'react';
import styled from 'styled-components';

export const BackgroundOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #1b1944;
    background-image: linear-gradient(#ff0524, #1b1944);
    opacity: 0.4;
    z-index: 100;
`;

const AudioPlayerImageContainer = styled.div`
    position: relative;
    border-radius: 10px;
    overflow: hidden;


    img {
        object-fit: cover;
        height: 320px;
        width: 100%;
        display: block;
        
    }
`;

const AudioPlayerImage = ({imageURL, altText}) => {
    console.log(altText, imageURL);
    return (
        <AudioPlayerImageContainer>
            <BackgroundOverlay />
            <img src={imageURL} alt={altText} />
        </AudioPlayerImageContainer>
        
    )
}

export default AudioPlayerImage;
