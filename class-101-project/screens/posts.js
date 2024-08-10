import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

const plus = require("../plus.png")
export default class PostsScreen extends Component {

  render() {
        return (
<View>
<Text style = {{marginTop:100,marginBottom:100,marginLeft:40,marginRight:40,alignContent:'center',fontSize:40}}  >Posts Screen  </Text>
          <TouchableOpacity style = {styles.buttons}    onPress={() =>
                        this.props.navigation.navigate("Follower")
                    }>
                        <Text style = {{fontSize:17}}>Followers</Text>
                        
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.buttons}  onPress={() =>
                        this.props.navigation.navigate("MyPosts")
                    }>
                    <Text style = {{fontSize:17}}>My Posts</Text>
                    </TouchableOpacity>
       <TouchableOpacity style = {styles.buttons}  // onPress={() =>
                     
                  //  }
                  >
                    <Image source = {plus} style = {styles.icon}/>
                    </TouchableOpacity>
       </View>
        )}


}

const styles = StyleSheet.create({
buttons:{
   backgroundColor:"red",width:75,height:75,alignItems:"center",justifyContent:"center",borderTopRightRadius:10,borderBottomLeftRadius:10,borderTopLeftRadius:10,borderBottomRightRadius:10,alignSelf:"center",marginBottom:20,marginRight:290
},
icon:{
  width:75,height:75,resizeMode:"contain"
}

})