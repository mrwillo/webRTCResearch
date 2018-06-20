'use strict'

let localConnection;

let callBtn = document.getElementById('callBtn');
let handUpBtn = document.getElementById('handUpBtn');
let startBtn = document.getElementById('startBtn');
let localVideo = document.getElementById('localVideo');
let remoteVideo = document.getElementById('remoteVideo');

let handleMediaStream = (stream)=>{
   localVideo.srcObject = stream;
}
let getLocalStream = ()=>{
    navigator.mediaDevices.getUserMedia({audio:true, video: true}).then(handleMediaStream).catch((error)=>{console.error('error ', error)})
}

let callAction = ()=>{

}
let handUpAction = () =>{

}
let startAction = ()=>{
    getLocalStream();
}

callBtn.addEventListener('click', callAction);
handUpBtn.addEventListener('click', handUpAction);
startBtn.addEventListener('click', startAction);


