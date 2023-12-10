import { View, Text, StyleSheet, Dimensions, Image, Pressable, ImageBackground, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'


const netflix_icon=require('./Images/netflix_icon.png');

export default function Top_Section({data,setdata,navigation,api_key}) {
const[search,setsearch]=useState("");
  return (
    <View style={style.top_section_container}>
          <View  style={style.netflix_icon_and_search}><Image source={netflix_icon} style={style.netflix_icon_}></Image>
          
          <TextInput style={style.search_style} placeholder='Search'onChangeText={(e)=>setsearch(e)} defaultValue={search} placeholderTextColor={'white'}/>
          </View>
      
      <View  style={style.menu_list}>
          <Pressable style={style.menu_button_style}onPress={()=>{navigation.navigate('Display_all_card', {data:data,topic:topic})}} >
            <Text style={{color:'white'}}>TV Shows</Text></Pressable>
          <Pressable style={style.menu_button_style}><Text  style={{color:'white'}}>Movies</Text></Pressable>
          <Pressable style={style.menu_button_style}><Text  style={{color:'white'}}>Categories</Text></Pressable>
      </View>
      
       <ScrollView style={{width:'82%', marginLeft:30}} horizontal={true} >
      {data.filter((x)=>x.original_title.toLowerCase().includes(search.toLowerCase())).map((x)=>{
          return(
                    
                       <ImageBackground key={x.id} source={{uri:`https://image.tmdb.org/t/p/original${x.backdrop_path}`}} style={style.backround_image_style} imageStyle={{borderRadius:20,borderWidth:1,borderColor:'white'}}>
                        <View style={style.background_image_text}>
                          <Text style={style.text_style}>{x.original_title}</Text>
                           <Text style={{color:'white',fontSize:20}}>{x.vote_average}✨</Text>
                       <View style={style.background_image_buttons}>
                         <Pressable style={style.menu_list} onPress={()=>{navigation.navigate('WatchTrailer', {id:x.id,api_key:api_key})}}>
                          <Text style={style.background_image_menu}>Watch Trailer</Text>
                        </Pressable>
                        <Pressable style={style.menu_list}>
                          <Text style={style.menu_button_style}>Add Likes</Text>
                        </Pressable>
                        </View>
                        </View>
                      </ImageBackground>
                    
          )
      })}
      </ScrollView> 

    </View>
  )
}
const style=StyleSheet.create({
          top_section_container:{backgroundColor:'black',width:Dimensions.get('window').width,height:(Dimensions.get('window').height)/1.5,color:'white'},
          netflix_icon_:{width:50,height:50},
          menu_list:{display:'flex', flexDirection:'row',justifyContent:'flex-start', alignItems:'center',gap:15,padding:10},
           background_image_menu:{borderColor:'white', color:'white',borderWidth:1,borderRadius:30,padding:10,backgroundColor:'red'},
          menu_button_style:{borderColor:'white', color:'white',borderWidth:1,borderRadius:30,padding:10},
          netflix_icon_and_search:{display:'flex',justifyContent:'space-between',padding:10,alignItems:'center', width:'90%',flexDirection:'row'},
          backround_image_style:{width:(Dimensions.get('window').width)*0.79,height:Dimensions.get('window').height/2, marginLeft:10,borderCurve:'circular',display:'flex',flexDirection:'row',alignItems:'flex-end', justifyContent:'space-around'},
          background_image_buttons:{width:'auto',height:'auto', display:'flex', flexDirection:'row'},
          background_image_text:{width:'100%',height:'auto', display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center'},
          text_style:{fontSize:40,color:'white',textShadowColor:'blue',textShadowRadius:20,textShadowOffset:{width:1, height:2}},
          search_style:{borderColor:'white',borderWidth:2,borderRadius:20,color:'white',width:100,fontSize:15,textAlign:'center'},
          
});