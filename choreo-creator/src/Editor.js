import React from 'react';

import MyNavBar from './components/MyNavBar';
import AudioTrack from './components/AudioTrack';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Editor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false
        }
        this.playAudio = this.playAudio.bind(this);
        this.url = "http://streaming.tdiradio.com:8000/top40.mp3";
        this.audio = new Audio(this.url);
        this.isPlaying = false;
        this.toggleShow = this.toggleShow.bind(this);
    }

    playAudio() {
        this.isPlaying = !this.isPlaying;
        if(this.isPlaying){
            this.audio.play();
        }
        else {
            this.audio.pause();
        }
    }

    toggleShow(){
        //alert('Double click');
        this.setState({
            show: !this.state.show
        })
    }

    //functions that do nothing
    loopRegionControl(){}
    toggleLoopingPrompt(){}
    goForward(){}
    goBackward(){}
    setSpeed(){}

    render(){
        return (
            <div>
                <MyNavBar
                    className="MyNavBarFlex"
                    togglePlay={this.playAudio}
                    trackTimeline={false}
                    toggleShow={this.toggleShow}
                    loopRegionControl={this.loopRegionControl}
                    toggleLoopingPrompt={this.toggleLoopingPrompt}
                    goForward={this.goForward}
                    goBackward={this.goBackward}
                    setSpeed={this.setSpeed}/>
                <Modal
                    show={this.state.show}>
                    
                    <Modal.Body>
                    <h4>
                        Guide to Audio Editing
                    </h4>
                    <br/>
                    <ul>
                        <li>Hold and drag on squares to select desired part.</li>
                        <li>Then double click to delete.</li>
                    </ul>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button onClick={this.toggleShow}>Close</Button>
                    </Modal.Footer>
                </Modal>
                <AudioTrack />

            </div>
        );
    }
}

export default Editor;
