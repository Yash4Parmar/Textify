import React from 'react';

function CalculateSpeed(props) {

    if (props.symbols !== 0 && props.sec !== 0) {
        const wpm = (props.symbols / 5) / (props.sec / 60);
        return (
            <div style={{
                // backgroundColor: props.mode === "dark" ? "black" : "white",
                color: props.mode === "dark" ? "white" : "black"
            }}>{Math.round(wpm)} wpm</div>
        )
    }

    return null;
}
export default CalculateSpeed