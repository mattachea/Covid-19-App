import React, {useRef, useState} from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, Platform } from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe';


export default function MyVideo(props) {
  return Platform.OS == "web" ? webVideo(props) : appVideo(props);
}

function appVideo(props) {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  let timestamps = props.timestamps;
  function createButtonsApp() {
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
    <View style={{height:'100%', flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',}}>
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
        <View style={{flex:0, height:400}}>
          <Text style={styles.titleText}>Content Selection</Text>
          <ScrollView contentContainerStyle={{flex:0}} style={{height:350, width: 400,}}>
            {createButtonsApp()}
          </ScrollView>
        </View>
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



  let timestamps = props.timestamps;
  function createButtonsWeb() {
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
            player.seekTo(timeStamp);
          }}
        >
          <Text style={styles.buttonText}>{buttonName}</Text>
        </TouchableOpacity>;
    });
    return buttonList;
  }

  return (
    <View style={styles.contentContainer}>
      <div style={{position: 'fixed'}}>
        <div ref={(r) => { player = r }}></div>
        <br/>
        <Text style={styles.titleText}>Content Selection</Text>
        </div>
            <ScrollView style={{height:'40vh', width:500, top:340, bottom:0}}>
        {createButtonsWeb()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    display: 'flex',
    height: '100%',
    margin: 3.5,
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonStyle: {
   flexDirection: 'row',
   marginVertical: 8,
   alignSelf: 'center',
   alignItems:'center',
   justifyContent:'flex-start',
   width:275,
   height:55,
   backgroundColor: '#F2F2F2',
   borderRadius:10,
   shadowColor: 'rgba(0,0,0, .4)', // IOS
   shadowOffset: { height: 1.2, width: 0 }, // IOS
   shadowOpacity: 1, // IOS
   shadowRadius: 1, //IOS
   elevation: 1, // Android
 },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Avenir-roman',
    paddingHorizontal: 20,
    //paddingTop: 10,
  },
  titleText: {
    fontFamily: 'Avenir-roman',
    textAlign: "center",
    fontSize: 30,
  },
  scrollable: {
  },
});
