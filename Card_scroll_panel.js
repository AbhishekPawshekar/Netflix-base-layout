import { View, Text, ScrollView, ImageBackground, StyleSheet, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'


export default function Card_scroll_panel({topic,api_fetch,navigation,api_key,media_type}) {
          const[data,setdata]=useState([]);
         
          useEffect(()=>{
           fetch(api_fetch).then(data=>data.json()).then(d=>setdata(d.results)).catch((error=>{console.log(error);}));
           
        },[data]); 

          return (
            <View style={{height:200,marginTop:30}}>
              
              <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:'10',width:'99%'}}>
                    <Text style={style.heading}>{topic}</Text>
                    <Pressable onPress={()=>{navigation.navigate('Display_all_card', {data:data,topic:topic})}}> 
                              <Text style={{color:'red'}}>see all.</Text>
                    </Pressable>
              </View>
              <ScrollView style={{width:'100%', marginLeft:10}} horizontal={true} >
               
              {data && data.map((x)=>{
               
                  return( 
                    <Pressable key={x.id} onPress={()=>{(x)?navigation.navigate('MoreDetails', {x_:x,topic:topic,api_key:api_key,media_type:media_type}):null}}> 
                               <ImageBackground   source={{uri:`https://image.tmdb.org/t/p/original${x.backdrop_path}`}} style={style.background_image}> 
                              <Text style={{color:'white',fontSize:18}}>{x.original_title || x.original_name}</Text>

                               </ImageBackground>
                      </Pressable>
                  )
              },[data])}
              </ScrollView> 
            </View>
          )
        }
        
        const style=StyleSheet.create({
        background_image:{width:110,height:'100%',margin:5,paddingBottom:10,display:'flex',flexDirection:'column',justifyContent:'flex-end',alignItems:'center'},
        heading:{fontSize:20,textShadowColor:'black',textShadowOffset:{width:0,height:1},textShadowRadius:1,marginLeft:10,paddingBottom:10,color:'white',},
         
        });