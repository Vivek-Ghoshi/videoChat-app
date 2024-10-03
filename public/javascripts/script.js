const socket = io();

let local ;
let remote ;
let peerConnection ;

const rtcSettings = {
    iceServers = [{urls:'your stun server'}],
}

const initialize = async function () {
 local = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
    });
    initiateOffer()
};

const initiateOffer = async function(){
    await createPeerConnection();
};

const createPeerConnection = async function(){
    peerConnection = new RTCPeerConnection(rtcSettings);

   let remoteMediaStream =  new MediaStream();
   document.querySelector('#remotevideo').srcObject = remoteMediaStream;
   document.querySelector('#remotevideo').style.display = "block";
   document.querySelector('#localvideo').classList.add('smallFrame');

   local.getTracks().forEach(tracks => {
    peerConnection.addTrack(track, local);
   });
    
   peerConnection.onTrack = (event) =>{
    event.streams[0].getTracks().forEach((track) => remote.addTrack(track));
   }
}