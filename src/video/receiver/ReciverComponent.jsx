import React, { useState } from 'react'
// import 'video/style13.css'
import { handleSignallingData, createAndSendAnswer, sendData, joinCall, muteAudio, muteVideo, endCall } from './receiver'
import EndCall from './end-call.svg'
import Fab from '@material-ui/core/Fab';



function ReciverComponent() {

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
            <script src="./receiver.js"></script>
            
            <div className='senderdiv'>
                <div>
                    <input placeHolder="Enter ID"
                        type="text"
                        id="username-input" className='input1' /><br />
                    {/* <button onClick={joinCall}>Join Call</button> */}
                    <Fab variant="extended" onClick={joinCall} id='fab'>join Call</Fab>
                </div>
                <div id="video-call-div">
                    <video muted id="local-video" autoPlay></video>
                    <video id="remote-video" autoPlay></video>
                    <div className="call-action-div">
                        <button className='icons' onClick={() => { muteVideo(); toogleClickV(); }}><i className={video} /></button>
                        <button className='icons' onClick={() => { endCall(); }} style={{ backgroundColor: 'white' }}><img className='icon-image' src={EndCall}></img></button>
                        <button className='icons' onClick={() => { muteAudio(); toogleClickA(); }}><i className={audio} /></button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ReciverComponent
