import {ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import Top_Section from './Top_Section'
import Bottom_Section from './Bottom_Section'


export default function NetFlix_app({navigation}) {
          const[data,setdata]=useState([]);
          const api_key="c5d6e32a3055a6c4d1e42efef2ab2ddf";
          const[main_search,setmainsearch]=useState("movie/popular?");
          const[horizontal_orientation,setHorizontal_orientation]=useState(true);
          useEffect(()=>{
                    fetch(`https://api.themoviedb.org/3/${main_search}api_key=${api_key}&language=en-US&page=1`)
                    .then(data=>data.json()).then(d=>setdata(d.results)).catch((error=>{console.log(error);}));
                    // (search_id)? fetch(`https://api.themoviedb.org/3/movie/${search_id}/videos?api_key=${api_key}`)
                    // .then(data=>data.json()).then(d=>setwatch_trail(d.results)).catch(error=>{console.log(error);}):(s="")
                    
          },[data]);


  return (
    <SafeAreaView>
      <ScrollView>
          <StatusBar backgroundColor={'black'} navigation={navigation}/>
          <Top_Section data={data} setdata={setdata} navigation={navigation} api_key={api_key} />
          <Bottom_Section api_key={api_key} navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  )
}