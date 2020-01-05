import React, { Component } from 'react';
import AudioVisualiser from './audiovisualizer';

class AudioAnalyser extends Component {
    constructor(props) {
        super(props);
        this.state = { audioData: new Uint8Array(0) };
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {

        this.bufferLength = this.props.analyser.frequencyBinCount;
        this.dataArray = new Uint8Array(this.bufferLength);
        this.props.analyser.getByteFrequencyData(this.dataArray);
        this.rafId = requestAnimationFrame(this.tick);

    }

    tick() {
        this.props.analyser.getByteTimeDomainData(this.dataArray);
        this.setState({ audioData: this.dataArray });
        this.rafId = requestAnimationFrame(this.tick);
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.rafId);
    }

    render() {
        return <AudioVisualiser audioData={this.state.audioData} bufferLength={this.bufferLength} />;
    }
}

export default AudioAnalyser;