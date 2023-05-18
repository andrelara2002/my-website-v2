import React from 'react';

const Spacer = ({ height }) => {
    const spacerStyle = {
        height: height || '1rem', // Set default height if not provided
    };

    return <div style={spacerStyle} />;
};

export default Spacer;
