"use client"
import { CallEnd } from '@mui/icons-material';
import { useSession } from 'next-auth/react';
import { useParams, usePathname, useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
const Room2 = () => {
    const [loader, setLoader] = useState(true);
    const { room } = useParams()
    const pathname = usePathname()

    // User session
    const { data: session } = useSession();

    // useEffect to update loader state when session is available
    useEffect(() => {
        if (session) {
            setLoader(false)
        }
    }, [session])

    const ourMeeting = async (element) => {
        let name;
        if (session?.user?.name) {
            name = session?.user?.name
        } else {
            name = "Unknown"
        }
        const { ZegoUIKitPrebuilt } = await import("@zegocloud/zego-uikit-prebuilt");
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(1848906207, "4da5d47d0439ea0646dfe3ef2259600f", room, Date.now().toString(), name);
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
    const router = useRouter()
    const handelEnd = useCallback(
        () => {
            router.push(`/video_call`);
        },
        [router]
    )
    return (
        <div className='w-full h-screen flex justify-start items-center'>
            <div className='mx-auto'>
                <div
                    className={`w-full h-full `}
                    ref={ourMeeting}
                ></div>
                {
                    loader == false ?
                        <div className='flex justify-center'>
                            <button onClick={handelEnd} className='bg-red-500 h-20 w-20 mt-8 text-white rounded-full'><CallEnd /></button>
                        </div> : ""
                }

            </div>
        </div>
    );
};

export default Room2;