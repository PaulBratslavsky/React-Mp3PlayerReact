import React, { Component } from 'react';
import styled from 'styled-components';

const CanvasContainer = styled.div`
  position: relative;
  height: 75px;
  margin: 0 auto;

  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;

  overflow: hidden;
`;

const Canvas = styled.canvas`
  height: 100%;
  width: 100%;
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

    const height = canvas.height;
    const width = canvas.width;
    
    const context = canvas.getContext('2d');

    // Clear Canvas every rerender
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "rgba(23, 18, 31, 0)";
    context.fillRect(0, 0, width, height);
    
    let x = 0;

    let barWidth = (width / bufferLength) * 2;
    let barHeight;

    for (var i = 0; i < bufferLength; i++) {
      barHeight = ( audioData[i] / 1.75 );
      
      let r = barHeight + (25 * (i/bufferLength));
      let g = 250 * (i/bufferLength);
      let b = 50;

      context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
      
      let my_gradient = context.createLinearGradient(0, 0, 0, 170);
      my_gradient.addColorStop(1, "#fd1d4e");
      my_gradient.addColorStop(0, "#17121f");
      
      // context.fillStyle = my_gradient;

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