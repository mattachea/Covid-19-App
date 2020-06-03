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

let loadYT;
let player;
function webVideo(props) {
  if (!loadYT) {
    loadYT = new Promise((resolve) => {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = () => resolve(window.YT);
    })
  }
  loadYT.then((YT) => {
    player = new YT.Player(player, {
      height: 300,
      width: 400,
      videoId: props.video,
    })
  })

  return (
    <View style={styles.contentContainer}>
      <div ref={(r) => { player = r }}></div>
    </View>
  );
}


const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    margin: 3.5,
    alignItems: 'center',
    alignSelf: 'center',
  },
});

