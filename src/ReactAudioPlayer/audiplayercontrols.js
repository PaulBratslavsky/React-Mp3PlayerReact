import React from 'react';
import styled from 'styled-components';
import { MdPlayArrow, MdPause } from "react-icons/md";
import { IoMdSkipForward, IoMdSkipBackward } from "react-icons/io";
import { context } from '../Api/audiocontext';




const Square = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    background: #fd1d4e;
    border-radius: 50px;
    
`;


const AudioPlayerControlsContainer = styled.div`
    div {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 0.5rem;
    }
`;


const AudioPlayerControls = (props) => {

    // let context = new (window.AudioContext || window.webkitAudioContext)();

    const [ isPlayingState, setIsPlayingState ] = React.useState(false);
    let audioPlayer = React.createRef();
    

    React.useEffect( () => {
        // Audio Player
        audioPlayer.current.crossOrigin="anonymous";
        audioPlayer.current.src = audioPath; 
        audioPlayer.current.load();

        
        // let track = context.createMediaElementSource(audioPlayer.current);
        let track = context.createMediaElementSource(audioPlayer.current);
        let analyser = context.createAnalyser();

        track.connect(context.destination);

        console.log(track, "TRACK");
        console.log(analyser, "ANALYZER")

    
    },[]);
    



    function playPauseAudio() {

        if(context.state === 'suspended') {
            context.resume();
        }

        if ( isPlayingState === false ) {
            audioPlayer.current.play();
            setIsPlayingState(true);
        } else {
            audioPlayer.current.pause();
            setIsPlayingState(false);
        }
        
    }




    const { audioPath } = props;
    console.log(context.state, "CONTEXT STATE");



    return (
        <AudioPlayerControlsContainer>
            <audio ref={audioPlayer} controls /> 
            <div>
                <IoMdSkipBackward color='#9994b6' size='2.5rem'/>
                <Square onClick={playPauseAudio}> 
                {  isPlayingState 
                    ? <MdPause color='#fffefe' size='3rem'/> 
                    : <MdPlayArrow color='#fffefe' size='3rem'/> 
                }
                </Square>
                <IoMdSkipForward color='#9994b6' size='2.5rem'/>
            </div>
        </AudioPlayerControlsContainer>
        
    )
}

export default AudioPlayerControls;


/* 
<source  src={audioPath} type="audio/mpeg"  /> 
<canvas ref={playerCanvas}></canvas>

*/