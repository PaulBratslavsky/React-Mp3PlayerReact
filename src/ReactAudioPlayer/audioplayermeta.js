import React from 'react';
import styled from 'styled-components';


const AudioPlayerMetaContainer = styled.div`
    padding: 1rem 0.5rem;
    text-align: center;
    color: #dfdee1;

    h2 {
        font-size: 1.8rem;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1.2rem;
    }
`;

const AudioPlayerMeta = ({songTitle, songDescription}) => {
    return (
        <AudioPlayerMetaContainer>
            <h2>{songTitle}</h2>
            <p>{songDescription}</p>
        </AudioPlayerMetaContainer>
        
    )
}

export default AudioPlayerMeta;