import React from 'react';
import AudioPlayerImage from './audioplayerimage';


import styled, { createGlobalStyle } from 'styled-components'
import AudioPlayerMeta from './audioplayermeta';
import AudioPlayerControls from './audioplayercontrols';
import AudioPlayerVisuals from './audioplayervisuals';

const data = {
    songURL: 'https://archive.org/details/geometry_dash_1.9/Geometry+Dash+OST/BaseAfterBase.mp3',
    imageURL: 'https://thumbs.gfycat.com/FoolishEvilHyracotherium-size_restricted.gif',
    songTitle: 'Into Darkness',
    songDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'

}

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html,
    body {
        height: 100%;
    }

    body {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 10px;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Roboto', sans-serif;
    }

    p {
        font-family: 'Roboto', sans-serif;
    }
`;

const ReactAudioPlayerContainer = styled.div`
    position: absolute;
    margin: 0;
    padding: 1rem;
    top: 0;
    left: 0;

    width: 100%;
    background: #17121f;
`;

const ReactAudioPlayer = () => {
    return (
            <React.Fragment><GlobalStyle />
                <ReactAudioPlayerContainer>
                    <AudioPlayerImage imageURL={data.imageURL} altText={data.songTitle}/>
                    <AudioPlayerMeta songTitle={data.songTitle} songDescription={data.songDescription} />
                    <AudioPlayerVisuals />
                    <AudioPlayerControls audioPath="https://s3-us-west-2.amazonaws.com/s.cdpn.io/858/outfoxing.mp3" />
                </ReactAudioPlayerContainer>
            </React.Fragment>
    )
}

export default ReactAudioPlayer;
