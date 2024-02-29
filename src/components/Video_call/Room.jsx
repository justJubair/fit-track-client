// "use client"
// import { useSocket } from '@/app/context/SocketProvider';
// import React, { useCallback, useEffect, useState } from 'react';
// import ReactPlayer from 'react-player';
// import peer from "./service/peer"
// import { useElements } from '@stripe/react-stripe-js';
// import NoPhotographyIcon from '@mui/icons-material/NoPhotography';
// import CameraAltIcon from '@mui/icons-material/CameraAlt';
// import VolumeUpIcon from '@mui/icons-material/VolumeUp';
// import VolumeOffIcon from '@mui/icons-material/VolumeOff';
// import { IconButton, Tooltip } from '@mui/material';
// import CallEndIcon from '@mui/icons-material/CallEnd';
// import "./service/Room.css"

// const Room = () => {
//     const socket = useSocket()
//     const [remoteSocketId, setRemoteSocketId] = useState(null)
//     const [myStream, setMyStream] = useState(null)
//     const [remoteStream, setRemoteStream] = useState(null)
//     const [myMicMuted, setMyMicMuted] = useState(false);
//     const [myCameraOff, setMyCameraOff] = useState(false);
//     const [remoteMicMuted, setRemoteMicMuted] = useState(false);
//     const [remoteCameraOff, setRemoteCameraOff] = useState(false);

//     const toggleMyMic = () => {
//         if (myStream) {
//             const audioTrack = myStream.getAudioTracks()[0];
//             audioTrack.enabled = !myMicMuted;
//             setMyMicMuted(!myMicMuted);
//         }
//     };

//     const toggleMyCamera = () => {
//         if (myStream) {
//             const videoTrack = myStream.getVideoTracks()[0];
//             videoTrack.enabled = !myCameraOff;
//             setMyCameraOff(!myCameraOff);
//         }
//     };

//     const toggleRemoteMic = () => {
//         if (remoteStream) {
//             const audioTrack = remoteStream.getAudioTracks()[0];
//             audioTrack.enabled = !remoteMicMuted;
//             setRemoteMicMuted(!remoteMicMuted);
//         }
//     };

//     const toggleRemoteCamera = () => {
//         if (remoteStream) {
//             const videoTrack = remoteStream.getVideoTracks()[0];
//             videoTrack.enabled = !remoteCameraOff;
//             setRemoteCameraOff(!remoteCameraOff);
//         }
//     };

// //     const handelUserJoin = useCallback(({ email, id }) => {
// //         console.log(`email ${email} join room`)
// //         setRemoteSocketId(id)
// //     }, [])

//     const handleIncomingCall = useCallback(async ({ from, offer }) => {
//         setRemoteSocketId(from)
//         const stream = await navigator.mediaDevices.getUserMedia({
//             audio: true,
//             video: true
//         })
//         setMyStream(stream)
//         const ans = await peer.getAnswer(offer)
//         socket.emit("call:accepted", { to: from, ans })

// //     }, [socket])

// //     const sendSteams = useCallback(() => {
// //         for (const track of myStream.getTracks()) {
// //             peer.peer.addTrack(track, myStream)
// //         }
// //     }, [myStream])

// //     const handelCallAccepted = useCallback(({ from, ans }) => {
// //         peer.setLocalDescription(ans)
// //         console.log(`call accepted yahoooooo!`)
// //         sendSteams()

// //     }, [sendSteams])

// //     const handelNegoNeeded = useCallback(async () => {
// //         const offer = await peer.getOffer()
// //         socket.emit('peer:nego:needed', { offer, to: remoteSocketId })
// //     }, [remoteSocketId, socket])

//     useEffect(() => {
//         peer.peer.addEventListener('negotiationneeded', handelNegoNeeded)
//         return () => {
//             peer.peer.removeEventListener('negotiationneeded', handelNegoNeeded)
//         }
//     }, [handelNegoNeeded])

// //     const handelNegoNeedIncoming = useCallback(async ({ from, offer }) => {
// //         const ans = await peer.getAnswer(offer)
// //         socket.emit("peer:nego:done", { to: from, ans })
// //     }, [socket])

// //     const handelNegoNeedFinal = useCallback(async ({ ans }) => {
// //         await peer.setLocalDescription(ans)
// //     }, [])

//     useEffect(() => {
//         peer.peer.addEventListener('track', async ev => {
//             const remoteStream = ev.streams
//             // console.log(`got tracks`)s
//             setRemoteStream(remoteStream[0])
//         })
//     }, [])
//     useEffect(() => {
//         socket.on("user:joined", handelUserJoin)
//         socket.on("incoming:call", handleIncomingCall)
//         socket.on("call:accepted", handelCallAccepted)
//         socket.on("peer:nego:needed", handelNegoNeedIncoming)
//         socket.on("peer:nego:final", handelNegoNeedFinal)

// //         return () => {
// //             socket.off('user:joined', handelUserJoin)
// //             socket.off("incoming:call", handleIncomingCall)
// //             socket.off("call:accepted", handelCallAccepted)
// //             socket.off("peer:nego:needed", handelNegoNeedIncoming)
// //             socket.off("peer:nego:final", handelNegoNeedFinal)
// //         }
// //     }, [socket, handelUserJoin, handleIncomingCall, handelCallAccepted, handelNegoNeedIncoming, handelNegoNeedFinal])

// //     const handelCallUser = useCallback(async () => {
// //         const stream = await navigator.mediaDevices.getUserMedia({
// //             audio: true,
// //             video: true
// //         })
// //         const offer = await peer.getOffer();
// //         socket.emit("user:call", { to: remoteSocketId, offer })
// //         setMyStream(stream)
// //     }, [remoteSocketId, socket])

//     return (
//         <div >
//             <p className='text-3xl font-bold'>{remoteSocketId ? "Connected" : "no one in Room"}</p>
//             {
//                 remoteSocketId && <button
//                     onClick={handelCallUser}
//                     className='p-4 bg-red-400 rounded-3xl'>Call</button>
//             }

//             <div className='flex flex-col-reverse justify-between relative'>
//                 <div className='border rounded-xl p-4 absolute right-5 bottom-28 paperScrollPaper'>
//                     {
//                         myStream &&
//                         <>
//                             <h1 className='text-white'>My Stream</h1>
//                             <ReactPlayer
//                                 className="w-full "
//                                 height={300}
//                                 width={300}
//                                 playing
//                                 url={myStream}
//                             />
//                             <div className='flex justify-between'>
//                                 <div>
//                                     <IconButton onClick={toggleMyMic}>
//                                         <button className='text-white' >
//                                             {myMicMuted ? < VolumeUpIcon /> : <VolumeOffIcon />}
//                                         </button>
//                                     </IconButton>
//                                     <IconButton onClick={toggleMyCamera} sx={{ zIndex: 10 }}>
//                                         <button className='text-white'>
//                                             {myCameraOff ? < NoPhotographyIcon /> : <CameraAltIcon />}
//                                         </button>
//                                     </IconButton>
//                                 </div>
//                                 <div>
//                                     <Tooltip title="Call End" >
//                                         <IconButton sx={{ zIndex: 10 }}>
//                                             <button className='text-white bg-red-400 px-3 py-1 rounded-full'>
//                                                 {/* {myCameraOff ? < NoPhotographyIcon /> : <CameraAltIcon />} */}
//                                                 <CallEndIcon />
//                                             </button>
//                                         </IconButton>
//                                     </Tooltip>
//                                 </div>
//                             </div>
//                         </>
//                     }
//                 </div>
//                 <div className='border'>
//                     {
//                         remoteStream &&
//                         <>

//                             <h1>Remote Stream</h1>
//                             <div className='bg-black'>
//                                 <ReactPlayer
//                                     className=""
//                                     height={1000}
//                                     width={1000}
//                                     playing
//                                     url={remoteStream}
//                                 />
//                             </div>
//                             <button
//                                 className='bg-green-200'
//                                 onClick={sendSteams}
//                             >
//                                 Send Stream
//                             </button>
//                         </>
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Room;
