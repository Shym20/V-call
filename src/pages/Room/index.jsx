import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const RoomPage = () => {
    const {roomId} = useParams();
    const myMeeting = async (element) => {
        const appId = 1109569434;
        const serverSecret = "d27ab0d19372c49bd7fc227ab2314449";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId,serverSecret,roomId, Date.now().toString() , "Shyam");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks:[
                {
                    name: 'Copy Link',
                    url: `https://localhost:3000/room/${roomId}`
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: false,
        });
    };
  return (
    <div>
        <div ref={myMeeting}/>
    </div>
  )
}

export default RoomPage;
