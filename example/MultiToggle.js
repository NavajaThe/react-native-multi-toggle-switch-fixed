import { View, StyleSheet, ImageBackground } from 'react-native';

import MultiToggleSwitch from 'react-native-multi-toggle-switch-fixed';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function App() {
  
  const Vista = (
    <ImageBackground
        style={styles.background}
        source={require('./assets/forest_wallpaper.jpg')}
        >

      <View style={styles.multiSwitchContainer}>
      
        <MultiToggleSwitch defaultActiveIndex = {1}> 

          <MultiToggleSwitch.Item primaryColor={'darkgray'} onPress={() => alert('iOS')}>
            <Ionicons name={'logo-apple'} size={30} />
          </MultiToggleSwitch.Item>

          <MultiToggleSwitch.Item primaryColor={'#f7df1e'} onPress={() => alert('Web')}>
            <Ionicons name={'laptop-outline'} size={30} />   
          </MultiToggleSwitch.Item>
              
          <MultiToggleSwitch.Item primaryColor={'#a4c639'} onPress={() => alert('Android')}>
            <Ionicons name={'logo-android'} size={30} />
          </MultiToggleSwitch.Item> 

        </MultiToggleSwitch>
                          
      </View>
    </ImageBackground>
  );
  
  return Vista;

}

const styles = StyleSheet.create({

   background:{
        flex: 1,
        justifyContent: 'center',
    },
    
   multiSwitchContainer:{
        alignSelf:'center',
    },
  
});
