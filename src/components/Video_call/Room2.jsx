"use client"
import { useParams } from 'next/navigation';
import React from 'react';

const Room2 = () => {
    const { room } = useParams()
    console.log(room)
    const ourMeeting = async (element) => {
        const { ZegoUIKitPrebuilt } = await import("@zegocloud/zego-uikit-prebuilt");
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(1848906207, "4da5d47d0439ea0646dfe3ef2259600f", room, Date.now().toString(), "Ekramul");
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Personal link',
                    url:
                        window.location.protocol + '//' +
                        window.location.host + window.location.pathname +
                        '?room=' +
                        room,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
        });
    }
    return (
        <div className='w-full h-screen'>
            <div
                className='w-full h-full'
                ref={ourMeeting}
            ></div>
        </div>
    );
};

export default Room2;