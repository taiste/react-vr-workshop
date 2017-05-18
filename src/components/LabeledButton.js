import React, { Component, PropTypes } from 'react';
import {
    Text,
    VrButton,
} from 'react-vr';

import FadeInView from './FadeInView';


// Multiplier shifts and rotates button 
const basicStyle = multiplier => {
    return {
        marginTop: 0.1,
        transform: [{ translate: [0, 0, 0.06 * Math.abs(multiplier)] }, { rotateX: -5 * multiplier }]
    }
}


// Label and onPressed props are 
const LabeledButton = ({ label, onPressed, color, positionMultiplier }) => (

    <FadeInView>
        <VrButton
            style={basicStyle((positionMultiplier ? positionMultiplier : 0))}
            onClick={onPressed}>
            <Text
                style={{
                    textAlign: 'center',
                    backgroundColor: (color ? color : "#F06292DF")
                }}>
                {label}
            </Text>
        </VrButton >
    </FadeInView>
)

LabeledButton.propTypes = {
    label: PropTypes.string.isRequired,
    onPressed: PropTypes.func.isRequired,
    color: PropTypes.string,
    positionMultiplier: PropTypes.number
}

export default LabeledButton;