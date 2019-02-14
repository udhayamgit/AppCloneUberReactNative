import React from 'react';
import MapViewDirections from 'react-native-maps-directions'

const Directions = ({
    destination,
    origin,
    onReady
}) => (
        <MapViewDirections
            destination={destination}
            origin={origin}
            onReady={onReady}
            apikey="AIzaSyA-LzSxNdNMTKVSt-VOH_nrbAJdx0D3L8M"
            strokeWidth={3}// largura da linha do direction
            strokeColor="#222"// cor da linha
        />
    );

export default Directions;
