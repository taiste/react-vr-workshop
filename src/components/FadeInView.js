import React from 'react';
import {
    Animated
} from 'react-vr';

class FadeInView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0), // init opacity 0
        };
    }
    componentDidMount() {
        Animated.timing(          // Uses easing functions
            this.state.fadeAnim,    // The value to drive
            { toValue: 1 }            // Configuration
        ).start();                // Don't forget start!
    }

    componentWillUnmount() {
        Animated.timing(          // Uses easing functions
            this.state.fadeAnim,    // The value to drive
            { toValue: 0 }            // Configuration
        ).start();
    }
    render() {
        return (
            <Animated.View          // Special animatable View
                style={{ opacity: this.state.fadeAnim }}>
                {this.props.children}
            </Animated.View>
        );
    }
}

export default FadeInView;