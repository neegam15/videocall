import React, { useState } from 'react'
import { handleSignallingData, sendUsername, sendData, startCall, createAndSendOffer, muteAudio, muteVideo, endCall } from './sender'
import MicOff from './mic-off.svg'
import EndCall from './end-call.svg'
import './sender.css'
import Fab from '@material-ui/core/Fab';


function SenderComponent() {

    const [video, setVideo] = useState('fas fa-video')
    const [audio, setAudio] = useState('fas fa-microphone')
    const [flagV, setFlagV] = useState(1)
    const [flagA, setFlagA] = useState(1)

    function toogleClickV() {
        console.log('changed')
        if (flagV == 1) {
            setVideo('fas fa-video-slash')
            setFlagV(0)
        }
        else {
            setVideo('fas fa-video')
            setFlagV(1)
        }
    }
    function toogleClickA() {
        console.log('changedA')
        if (flagA == 1) {
            setAudio('fas fa-microphone-slash')
            setFlagA(0)
        }
        else {
            setAudio('fas fa-microphone')
            setFlagA(1)
        }
    }


    function end() {
        document.getElementById("video-call-div")
            .style.display = "none"
    }

    return (
        <>
            <script src="./sender.js"></script>
                    
            <div className='senderdiv'>
                <div>
                    <input placeholder="Enter ID" type="text" id="username-input" className='input1' /><br />
                        {/* <TextField id="standard-basic" label="ID" id="username-input" className="text-field" placeholder='Enter ID'/> */}
                        
                        {/* <br/> */}
                    {/* <button onClick={sendUsername}>Send</button>
                <button onClick={startCall}>Start Call</button> */}
                    {/* <button onClick={() => { sendUsername(); startCall(); }}>Start Call</button> */}
                    <Fab variant="extended" onClick={() => { sendUsername(); startCall(); }} id='fab'>Start Call</Fab>
                </div>
                <div id="video-call-div">
                    <video muted id="local-video" autoPlay></video>
                    <video id="remote-video" autoPlay></video>
                    <div className="call-action-div">
                        <button className='icons' onClick={() => { muteVideo(); toogleClickV(); }}><i className={video} /></button>
                        <button className='icons' id="stop-button" onClick={() => { endCall(); }} style={{ backgroundColor: 'white' }}><img className='icon-image' src={EndCall}></img></button>
                        <button className='icons' onClick={() => { muteAudio(); toogleClickA(); }}><i className={audio} /></button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SenderComponent
{/* <i class="fas fa-video"></i> */ }
{/* <i className="fas fa-video-slash" onClick={toogleClick}></i> */ }
{/* <button onClick={() => { muteVideo(); toogleClick() }}><i className="fas fa-video-slash icons" ></i></button> */ }