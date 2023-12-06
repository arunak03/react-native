
import {  ImageBackground,SafeAreaView, View,Image, Text, ScrollView } from 'react-native';



let Header =()=>{
  return <View style={{height:50,backgroundColor:"yellow"}}>
    <Text> I am Header</Text>
  </View>
}

export default app=()=> {
  
  return (
    <SafeAreaView>
      <Header/>
        <ScrollView>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
          <View>
          <ImageBackground  style={{width:175,height:375,display:'flex',flexDirection:'row'}} source={{uri:"https://www.w3schools.com/w3css/img_lights.jpg"}} >
            <Text  style={{color:'white',alignSelf:'flex-end',backgroundColor:'grey'}}>hello1</Text>
          </ImageBackground>
          </View>
          <View>
          <ImageBackground style={{width:175,height:375,display:'flex',flexDirection:'row'}}  source={{uri:"https://www.w3schools.com/w3css/img_lights.jpg"}} >
            <Text  style={{color:'white',alignSelf:'flex-end',backgroundColor:'grey'}}>hello2</Text>
          </ImageBackground>
          </View>
          </View>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
          <View>
          <ImageBackground style={{width:175,height:375,display:'flex',flexDirection:'row'}} source={{uri:"https://www.w3schools.com/w3css/img_lights.jpg"}} >
            <Text  style={{color:'white',alignSelf:'flex-end',backgroundColor:'grey'}}>hello3</Text>
          </ImageBackground>
          </View>
          <View>
          <ImageBackground style={{width:175,height:375,display:'flex',flexDirection:'row'}} source={{uri:"https://www.w3schools.com/w3css/img_lights.jpg"}} >
            <Text style={{color:'white',alignSelf:'flex-end',backgroundColor:'grey'}}>hello4</Text>
          </ImageBackground>
          </View>
          </View>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
          <View>
          <ImageBackground style={{width:175,height:375,display:'flex',flexDirection:'row'}} source={{uri:"https://www.w3schools.com/w3css/img_lights.jpg"}} >
            <Text  style={{color:'white',alignSelf:'flex-end',backgroundColor:'grey'}}>hello3</Text>
          </ImageBackground>
          </View>
          <View>
          <ImageBackground style={{width:175,height:375,display:'flex',flexDirection:'row'}} source={{uri:"https://www.w3schools.com/w3css/img_lights.jpg"}} >
            <Text style={{color:'white',alignSelf:'flex-end',backgroundColor:'grey'}}>hello4</Text>
          </ImageBackground>
          </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

