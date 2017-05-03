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
        this.createResults = this.createResults.bind(this);
    }

    convertUnixTimeToDate(unixTime) {
        console.log(unixTime);
        var a = new Date(unixTime * 1000);
        var hour = (a.getHours() < 10 ? '0' : '') + a.getHours();
        var min = (a.getMinutes() < 10 ? '0' : '') + a.getMinutes();
        var time = hour + ':' + min;
        console.log(time);
        return time;
    }

    fetchData(stopNumber) {
        fetch('https://data.foli.fi/siri/sm/'+stopNumber)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            console.log(res);
            this.setState((prevState) => ({ stationInfo: (res.result) }));
        }).catch((error)=>{
                console.log("Api call error");
                console.log(error.message);
        })
    }

    createResults() {
        const resultViews = [];
        for(var i = 0; i < this.state.stationInfo.length; i++)
        {
                if(i > 4)
                {
                        break;
                }
                resultViews.push(<Text
                              style={{
                                        transform: [{translate: [1.2, 0.1, 0]}, {rotateY: -30}],
                                        backgroundColor: '#242424af',
                                        marginTop: 0.01,
                              }}>
                              {this.state.stationInfo.length > 0 ?
                              this.convertUnixTimeToDate(this.state.stationInfo[i].expecteddeparturetime) : ""}{" "}
                              {this.state.stationInfo.length > 0 ? this.state.stationInfo[i].destinationdisplay : ""}
                        </Text>);

        }
        return resultViews
    }

    render() {
        return (
            <View>
                <Pano source={asset('background.jpg')}/>
                <View style={{
                    transform: [{translate: [0, 0, -1]}],
                    width: 1,
                    layoutOrigin: [0.5, 0.5],
                }}>
                    <VrButton
                        style={{
                            marginTop: 0.1
                        }}
                        onClick={()=>this.fetchData(1)}>
                        <Text
                            style= {{
                                textAlign: 'center',
                                backgroundColor: "#904824af",
                            }}>
                            Pysäkki 1
                        </Text>
                    </VrButton>
                    <VrButton
                        style={{
                            marginTop: 0.1
                        }}
                        onClick={()=>this.fetchData(69)}>
                        <Text
                            style= {{
                                textAlign: 'center',
                                backgroundColor: "#701024af",
                            }}>
                            Pysäkki 69
                        </Text>
                    </VrButton>
                    {this.createResults()}
                </View>
            </View>
        );
        }
};

AppRegistry.registerComponent('pong', () => pong);
