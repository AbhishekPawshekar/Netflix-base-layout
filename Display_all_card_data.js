import { View, Text, ScrollView, ImageBackground, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Display_all_card_data({navigation,route}) {
  return (
    <SafeAreaView>
    <ScrollView>
     <View style={{width:Dimensions.get('screen').width,height:'auto',backgroundColor:'black',display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',flexWrap:'wrap',gap:20}} >
              {route.params.data.map((x)=>{
                
                  return(
                             <ImageBackground  key={x.id} source={{uri:`https://image.tmdb.org/t/p/original${x.backdrop_path}`}} style={style.background_image}> 
                            
                              <Text style={{color:'white',fontSize:18}}>{x.original_title || x.original_name}</Text>
                               </ImageBackground>
                  )
              },[route.params.data])}
              </View> 
              </ScrollView>
              </SafeAreaView>
  )
}
const style=StyleSheet.create({
          background_image:{width:110,height:150,margin:5,paddingBottom:10,display:'flex',flexDirection:'column',justifyContent:'flex-end',alignItems:'center'},     
          });