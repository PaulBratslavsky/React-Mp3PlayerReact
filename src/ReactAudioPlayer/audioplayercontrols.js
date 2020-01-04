import React from 'react';
import styled from 'styled-components';
import { MdPlayArrow, MdPause } from "react-icons/md";
import { IoMdSkipForward, IoMdSkipBackward } from "react-icons/io";


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

    const [ isPlayingState, setIsPlayingState ] = React.useState(false);
    const [ audioDurationState, setAaudioDurationState ] = React.useState(0);

    let audioPlayer = React.createRef();


    React.useEffect( () => {

        // Set up audio context
        var context  = new (window.AudioContext || window.webkitAudioContext)();
        var analyser = context.createAnalyser();

        audioPlayer.current.crossOrigin="anonymous";
        audioPlayer.current.src = audioPath; 
        audioPlayer.current.load();

         var track = context.createMediaElementSource(audioPlayer.current);
         track.connect(context.destination);

    
    },[]);
    



    function playAudio() {
        console.log('Play Audio Clicked', audioPlayer);
        audioPlayer.current.play();
        setIsPlayingState(true);
    }

    function pauseAudio() {
        audioPlayer.current.pause(); 
        setIsPlayingState(false);
    }


    const { audioPath } = props;

    return (
        <AudioPlayerControlsContainer>
            <audio ref={audioPlayer} controls /> 
            <div id="canvas"></div>
            <h1 style={{color: 'red'}}>{audioDurationState}</h1>
            <div><IoMdSkipBackward color='#9994b6' size='2.5rem'/>{ isPlayingState ? <Square onClick={pauseAudio}><MdPause color='#fffefe' size='3rem'/></Square> : <Square onClick={playAudio}><MdPlayArrow color='#fffefe' size='3rem'/></Square> }<IoMdSkipForward color='#9994b6' size='2.5rem'/></div>
        </AudioPlayerControlsContainer>
        
    )
}

export default AudioPlayerControls;


/* <source  src={audioPath} type="audio/mpeg"  /> */