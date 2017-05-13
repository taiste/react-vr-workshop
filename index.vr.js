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

import LabeledButton from './src/components/LabeledButton'

export default class reactVrWorkshop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foliApi: 'https://data.foli.fi/siri/sm/',
            stationInfo: [],
            numberOfResults: 5,
        }

        //Binding is not needed when using arrow functions whithin the class
    }

    fetchData = stopNumber => {
        fetch(this.state.foliApi + stopNumber)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                this.setState((prevState) => ({ stationInfo: (res.result) }));
            }).catch((error) => {
                console.log("Api call error");
                console.log(error.message);
            })
    }

    createTimetableList = () => {
        return this.state.stationInfo
            .slice(0, this.state.numberOfResults)
            .map(station => {
                return (
                    <Text
                        style={{
                            transform: [{ translate: [1.3, 0.3, -0.1] }, { rotateY: -30 }],
                            backgroundColor: '#FBDC4Fef',
                            marginTop: 0.02,
                            width: 1.4,
                        }}>
                        {this.assembleTimetableItemText(station)}
                    </Text>
                )
            })
    }

    assembleTimetableItemText = (station) => {
        //TODO: add station validation
        var time = this.convertUnixTimeToDate(station.expecteddeparturetime);
        var destination = station.destinationdisplay;
        var line = station.lineref;
        return time + " " + line + " " + destination;
    }

    convertUnixTimeToDate = unixTime => {
        var a = new Date(unixTime * 1000);
        var hour = (a.getHours() < 10 ? '0' : '') + a.getHours();
        var min = (a.getMinutes() < 10 ? '0' : '') + a.getMinutes();
        var time = hour + ':' + min;
        return time;
    }

    render() {
        return (
            <View>
                <Pano source={asset('background.jpg')} />

                <View style={initialViewPosition}>
                    {
                        busStops.map((stop, index) => (
                            <LabeledButton
                                positionMultiplier={index - (busStops.length - 1) / 2}
                                key={stop.stopId}
                                label={"Pysäkki " + stop.stopId}
                                color={stop.color}
                                onPressed={() => this.fetchData(stop.stopId)} />
                        ))
                    }
                    {this.createTimetableList()}
                </View>
            </View>
        );
    }
};




AppRegistry.registerComponent('reactVrWorkshop', () => reactVrWorkshop);
