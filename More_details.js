import { Text, ImageBackground, StyleSheet, Dimensions, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function More_details({navigation,route}) {
  const [cast,setcast]=useState([]);
  const [fetchimage,setfetchimage]=useState();
  let count=1;
  useEffect(()=>{
    setfetchimage(route.params.x_.backdrop_path);
    fetch(`https://api.themoviedb.org/3/${route.params.media_type}/${route.params.x_.id}?api_key=${route.params.api_key}&language=en-US&append_to_response=credits`)
     .then(res=>res.json()).then(d=>setcast(d.credits.cast));
  },[cast])

  return (
    <SafeAreaView>
          <ImageBackground style={style.background_imagestyle} source={{uri:`https://image.tmdb.org/t/p/original${fetchimage}`}}>
                               <Text style={style.text_style}>{route.params.x_.original_title || route.params.x_.original_name}</Text>
              <Text style={style.text_overview} numberOfLines={4}>{route.params.x_.overview}</Text>  
              <Text style={style.text_style_cast}>Cast</Text>
            <View style={{height:Dimensions.get('screen').height/2}}>
              <ScrollView>
              <View style={style.cast_container}>
                      {cast && cast.filter((x)=>{if(count<=6)count++;return x;}).map((x)=>{return(
                          <ImageBackground  key ={x.id}source={{uri:`https://image.tmdb.org/t/p/original${x.profile_path}`}} style={style.cast_background} imageStyle={{borderRadius:10,marginRight:5}}>
                            <Text style={style.cast_name}>{x.name}</Text>
                          </ImageBackground>
                  )})} 
                  
          </View>
          </ScrollView>
          </View> 
          </ImageBackground> 
          
           
    </SafeAreaView>
  )
}
const style=StyleSheet.create({
  background_imagestyle:{width:'100%', height:Dimensions.get('screen').height,display:'flex',flexDirection:'column',justifyContent:'flex-end',alignItems:'flex-start'},
  text_style:{fontSize:40,color:'blue',textShadowColor:'black',textShadowRadius:10,textShadowOffset:{width:0, height:2}},
  text_overview:{fontSize:18,color:'white',textShadowColor:'black',textShadowRadius:8,textShadowOffset:{width:0, height:0}},
  cast_container:{display:'flex',flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap',gap:5},
  cast_background:{width:100,height:200,display:'flex',flexDirection:'column',justifyContent:'flex-end',alignItems:'center',borderColor:'white',borderWidth:5,borderRadius:10},
  text_style_cast:{fontSize:40,color:'red',textShadowColor:'black',textShadowRadius:8,textShadowOffset:{width:0, height:1}},
  cast_name:{color:'white',textShadowColor:'black',textShadowRadius:5,textShadowOffset:{width:0, height:0}}
 
  
});