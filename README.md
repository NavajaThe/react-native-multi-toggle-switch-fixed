# react-native-multi-toggle-switch-fixed

MultiToggle Switch for React-Native, Expo Compatible (Web, Android, iOS)

  

### Disclaimer

Original Autor kiok46, It was no longer being maintained so i gave it a refresh

```

https://github.com/kiok46/react-native-multi-toggle-switch

```

  

### Try it

[Expo Snack React Navite Multi Toggle Switch](https://snack.expo.dev/@navajathe/react-native-multi-toggle-switch-fixed)
```
https://snack.expo.dev/@navajathe/react-native-multi-toggle-switch-fixed
```


  

### Android and iOS Demo

<img  src="https://media1.tenor.com/images/f523b1706284212538ffc67ce1ed76e0/tenor.gif"  width="350">

<img  src="https://media1.tenor.com/images/c541e956595562d3d60f5ef7ea4f5006/tenor.gif"  width="350">

  
  

### Installation

```

npm i react-native-multi-toggle-switch-fixed

```

  

## Usage

  
  

**First step:** import the component:

  

```

import MultiToggleSwitch from 'react-native-multi-toggle-switch';

```

  

**Second step:** Use it.

  

```

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

```

  
  

## API



| Property     | Type     | Default               | Description                                                                                                |
|--------------|----------|-----------------------|------------------------------------------------------------------------------------------------------------|
| defaultActiveIndex      | number    | 0                    | Item index which should be active when the component renders                                                         |
| primaryColor  | string   | #124E96               | Color of icon when in non-active state & Color of icon background when in active state                                                                                 |
| secondaryColor      | string  | white                  | Color of icon when in active state & Color of icon background when in non-active state                                                                                   |
| itemContainer | style   | null | Style of item container                                                                             |
| activeContainerStyle | style   | null | Style of item container when active                                                                            |
| itemsContainer | style   | null | Style of container containing all items                                                                            |
| itemsContainerBackgroundStyle | style   | null | Background Style of container containing items                                                                             |
| onPress  | function |                       | Function to be called as soon as the user presses any item  |



## TODO

- [x] Make it usable again