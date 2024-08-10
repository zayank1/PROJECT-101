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


export default class MyPostsScreen extends Component {

render() {
        return (
<View>
<Text style = {{marginTop:100,marginBottom:100,marginLeft:40,marginRight:40,alignContent:'center',fontSize:40}}  >My Posts Screen  </Text>
          <TouchableOpacity style = {styles.buttons}  onPress={() =>
                        this.props.navigation.navigate("Posts")
                    }>
                        <Text style = {{fontSize:17}}>Posts</Text>
                        
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.buttons}   onPress={() =>
                        this.props.navigation.navigate("Follower")
                    }>
                    <Text style = {{fontSize:17}}>Followers</Text>
                    </TouchableOpacity>
                     
       
       </View>

        )
}



}

const styles = StyleSheet.create({
buttons:{
   backgroundColor:"red",width:75,height:75,alignItems:"center",justifyContent:"center",borderTopRightRadius:10,borderBottomLeftRadius:10,borderTopLeftRadius:10,borderBottomRightRadius:10,alignSelf:"center",marginBottom:20,marginRight:290
}


})





