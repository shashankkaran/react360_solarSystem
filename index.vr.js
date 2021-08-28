import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';

let src = ['chess-world.jpg', 'p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg'];
let count = 0;

export default class weclome extends React.Component {
  constructor() {


    super();
    this.state = { sour: src[count] };

  }


  triggerClick() {
    if (count == 4) {
      count = 0;
    }

      this.setState({ sour: src[count] })
      count++;
  }




  render() {
    return (
      <View>
        <Pano source={asset(this.state.sour)} />
        <VrButton
          onClick={this.triggerClick.bind(this)} >
          <Text
            style={{
              backgroundColor: 'black',
              fontSize: 0.2,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{ translate: [0, 0, -3.0] }],
            }}>
            Click Me to Change Panorama
          </Text>
        </VrButton>
      </View>
    );
  }
};

AppRegistry.registerComponent('weclome', () => weclome);
