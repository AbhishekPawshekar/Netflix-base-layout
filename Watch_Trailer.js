import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import YoutubePlayer from 'react-native-youtube-iframe';


export default function Watch_Trailer({navigation,route}) {
          const[watch_trail,setwatch_trail]=useState([]);
        

          useEffect(()=>{
                    fetch(`https://api.themoviedb.org/3/movie/${route.params.id}/videos?api_key=${route.params.api_key}`)
          .then(data=>data.json()).then(d=>setwatch_trail(d.results)).catch(error=>{console.log(error);})
      
          });
         
        
  return (
    <SafeAreaView>

          {(watch_trail)?
          watch_trail && watch_trail.map((x)=>{
                    if(x.name=="Official Trailer"){
                    return(
                    <View key={x.name}>
                            
                              <YoutubePlayer
                                        height={'100%'}
                                        width={'100%'}
                                        play={true}
                                        videoId={x.key}
                                       
                                        />
                     </View>
            )}}):<Text></Text>
          }
    </SafeAreaView>
  )
}