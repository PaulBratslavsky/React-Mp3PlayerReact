import React, { Component } from 'react';
import styled from 'styled-components';

const CanvasContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Canvas = styled.canvas`
  z-index: 300;
  left: 0;
  top: 0;
  width: 100%;
  height: 100px;
`;

class AudioVisualiser extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidUpdate() {
    this.draw();
  }

  draw() {
    const { audioData, bufferLength } = this.props;
    const canvas = this.canvas.current;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    const height = canvas.height;
    const width = canvas.width;
    const context = canvas.getContext('2d');


    context.fillStyle = "rgba(23, 18, 31, 0)";
    context.fillRect(0, 0, width, height);
    context.beginPath();
    
    let x = 0;

    var barWidth = (width / bufferLength) * 1.5;
    var barHeight;

    for (var i = 0; i < bufferLength; i++) {
      barHeight = audioData[i]*3;
      
      var r = barHeight + (25 * (i/bufferLength));
      var g = 250 * (i/bufferLength);
      var b = 50;

      context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
      // context.fillStyle = "#fd1d4e";
      context.fillRect(x, height - barHeight, barWidth, barHeight);

      x += barWidth + 1;
      
    }
  }

  render() {
    console.log(this.props.audioData, "DATA");
    return (
      <CanvasContainer><Canvas ref={this.canvas} /></CanvasContainer>
    );
  }
}

export default AudioVisualiser;