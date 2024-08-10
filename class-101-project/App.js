import { Text, SafeAreaView, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FollowerScreen from "./screens/followers"
import MyPostsScreen from "./screens/myposts"
import PostsScreen from "./screens/posts"

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Posts" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Posts" component={PostsScreen} />
        <Stack.Screen name="MyPosts" component={MyPostsScreen} />
        <Stack.Screen name="Follower" component={FollowerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;