import { View, StyleSheet } from 'react-native'
import React from 'react'
import Card_scroll_panel from './Card_scroll_panel';

export default function Bottom_Section( {api_key,navigation}) {
  
  
  return (
    <View style={{backgroundColor:'black'}} >
      <Card_scroll_panel topic={"Trending Movies"} api_fetch={`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}&language=en-US`} api_key={api_key} navigation={navigation} media_type={"movie"}/>
      
      <Card_scroll_panel topic={"Trending TV"} api_fetch={`https://api.themoviedb.org/3/trending/tv/day?api_key=${api_key}&language=en-US`} api_key={api_key} navigation={navigation}  media_type={"tv"}/>
      
      <Card_scroll_panel topic={"Popular TV Series"} api_fetch={`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`} api_key={api_key} navigation={navigation}  media_type={"tv"}/>
      <Card_scroll_panel topic={"Top Rated"} api_fetch={`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`}  api_key={api_key} navigation={navigation}  media_type={"movie"}/>
      
      <Card_scroll_panel topic={"Upcoming"} api_fetch={`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`}  api_key={api_key} navigation={navigation}  media_type={"movie"}/>
    
    </View>
  )
}
const style=StyleSheet.create({

});