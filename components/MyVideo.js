import React, {useRef, useState} from 'react';
import { View } from "react-native";
import { Video } from 'expo-av';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function MyVideo(props) {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const nada = props.video;
  return (
    <View style={{ paddingTop: 60 }}>
      <YoutubePlayer
        ref={playerRef}
        height={300}
        width={400}
        videoId={"qG2KNxODxHI"}
        play={playing}
        onChangeState={event => console.log(event)}   
        onReady={() => console.log("ready")}
        onError={e => console.log(e)}
        onPlaybackQualityChange={q => console.log(q)}
        volume={50}
        playbackRate={1}
        playerParams={{
          cc_lang_pref: "us",
          showClosedCaptions: true
        }}
      />
    </View>
  );
}
