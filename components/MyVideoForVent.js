import React, {useRef, useState} from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe';

export default function MyVideo(props) {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  let timestamps = props.timestamps;

  function createButtons() {
    let k = 0;
    let buttonList = new Array(Object.keys(timestamps).length);

    Object.entries(timestamps).map(([key, value]) => {
      let timeStamp = value.skipTo;
      let order = value.order;
      let buttonName = key.replace(/_/g, " ");
      buttonList[order] =
        <TouchableOpacity
          key={k++}
          style={styles.buttonStyle}
          onPress={() => {
            playerRef.current.seekTo(timeStamp);
          }}
        >
          <Text style={styles.buttonText}>{buttonName}</Text>
        </TouchableOpacity>;
    });
    return buttonList;
  }

  return (
    <View style={styles.contentContainer}>
      <ScrollView>
        <YoutubePlayer
          ref={playerRef}
          height={260}
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
        {createButtons()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    margin: 3.5,
    alignItems: 'center',
  },
  buttonStyle: {
    flexDirection: 'row',
    marginVertical: 8,
    alignSelf: 'center',
    alignItems:'center',
    justifyContent:'flex-start',
    width:300,
    height:70,
    backgroundColor: '#F2F2F2',
    borderRadius:20,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 0 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 1, // Android
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    // fontFamily: 'Avenir-roman',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});

