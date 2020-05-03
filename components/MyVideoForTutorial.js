import React, {useRef, useState} from 'react';
import { View, StyleSheet, Platform } from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe';

export default function MyVideo(props) {
  return Platform.OS == "web" ? webVideo(props) : appVideo(props);
}

function appVideo(props) {
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

function webVideo(props) {
  let uri = "https://www.youtube.com/embed/" + props.video;
  return (
    <View styles={styles.contentContainer}>
      <div style="align:center;">
        <iframe
          width="400" 
          height="300" 
          src={uri}
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
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

