import React, {useRef, useState} from 'react';
import { View, StyleSheet } from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe';

export default function MyVideoForTutorial(props) {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  return (
    <View style={styles.contentContainer}>
      <YoutubePlayer
        ref={playerRef}
        height={300}
        width={400}
        videoId={props.video}
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

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    margin: 3.5,
    alignItems: 'center'
  },
});

