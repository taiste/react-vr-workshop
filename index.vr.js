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
    constructor(props) {
        super(props);
        this.state = {
            station : 1,
            stationInfo: [],
        }

        this.convertUnixTimeToDate = this.convertUnixTimeToDate.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    convertUnixTimeToDate(unixTime) {
        console.log(unixTime);
        var a = new Date(unixTime * 1000);
        var hour = a.getHours();
        var min = a.getMinutes();
        var time = hour + ':' + min;
        console.log(time);
        return time;
    }

    fetchData(stopNumber) {
        fetch('http://data.foli.fi/siri/sm/'+stopNumber)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            console.log(res);
            this.setState((prevState) => ({ stationInfo: (res.result[0]) }));
        }).catch((error)=>{
                console.log("Api call error");
                console.log(error.message);
        })
    }

    render() {
    return (
        <View>
                <Pano source={asset('background.jpg')}/>
                <View
                        style={{
                                width: 8,
                                layoutOrigin: [0.5, 1],
                        }}>
                        <VrButton
                                style={{
                                    
                                }}
                                onClick={()=>this.fetchData(1)}>
                                <Text
                                        style= {{
                                                backgroundColor: '#af1024af',
                                                fontSize: 0.8,
                                                fontWeight: '400',
                                                paddingLeft: 0.2,
                                                paddingRight: 0.2,
                                                textAlign: 'center',
                                                textAlignVertical: 'center',
                                                transform: [{translate: [0, 0, -5]}],
                                        }}>
                                        Pysäkki 1
                                </Text>
                        </VrButton>
                        <VrButton
                                style={{
                                }}
                                onClick={()=>this.fetchData(69)}>
                                <Text
                                        style= {{
                                                backgroundColor: '#af1024af',
                                                fontSize: 0.8,
                                                fontWeight: '400',
                                                paddingLeft: 0.2,
                                                paddingRight: 0.2,
                                                textAlign: 'center',
                                                textAlignVertical: 'center',
                                                transform: [{translate: [0, 0, -5]}],
                                        }}>
                                        Pysäkki 69
                                </Text>
                        </VrButton>
                </View>

                <Text
                      style={{
                                backgroundColor: '#242424af',
                                fontSize: 0.8,
                                fontWeight: '400',
                                paddingLeft: 0.2,
                                paddingRight: 0.2,
                                textAlign: 'center',
                                textAlignVertical: 'center',
                                layoutOrigin: [0.5, 1],
                                transform: [{translate: [0, 0, -5]}],
                        }}>
                        {this.state.stationInfo.expecteddeparturetime != undefined ? 
                        this.convertUnixTimeToDate(this.state.stationInfo.expecteddeparturetime) : ""}{" "}
                        {this.state.stationInfo.destinationdisplay}
                </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('pong', () => pong);
