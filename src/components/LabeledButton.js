import React, { PropTypes } from 'react';
import {
    Text,
    VrButton,
} from 'react-vr';

const LabeledButton = ({ label, color, onButtonClicked }) => (

    < VrButton
        style={{
            marginTop: 0.1
        }}
        onClick={onButtonClicked}>
        <Text
            style={{
                textAlign: 'center',
                backgroundColor: color ,
            }}>
            {label}
        </Text>
    </VrButton >
)

LabeledButton.propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onButtonClicked: PropTypes.func.isRequired
}

export default LabeledButton;