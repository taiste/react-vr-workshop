import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';

export default class pong extends React.Component {
    constructor() {
        super();
        this.state = {
            color: 'red',
            station : 1
        }
    }

    render() {
    return (
      <View>
        <Pano source={asset('background.jpg')}
        />
        <Text
          style={{
            backgroundColor: '#242424af',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          {this.state.station} Lentoasema{"\n"}11:58
        </Text>

        <VrButton
            style={{
                height:0.4,
                paddingTop: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
                borderStyle: 'solid',
                borderColor: 'red',
                borderWidth: 0.01,
                layoutOrigin: [0.3, 0]
            }}
            onEnter={()=>this.setState((prevState) => ({color: 'green', station: prevState.station + 1}))}
            onClick={()=>this.setState((prevState) => ({color: 'blue', station: prevState.station + 1}))}>
            <Text
                    style= {{
                            backgroundColor: this.state.color,
                            fontSize: 0.8,
                            fontWeight: '400',
                            layoutOrigin: [0.5, 0.5],
                            paddingLeft: 0.2,
                            paddingRight: 0.2,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            transform: [{translate: [0, 0, -3]}],
                        }}>
                    Nappi
            </Text>
        </VrButton>
      </View>
    );
  }
};

AppRegistry.registerComponent('pong', () => pong);
